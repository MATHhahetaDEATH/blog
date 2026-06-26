import { h } from "preact"

const truncate = (value, maxChars = 50) => {
  const text = String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const chars = Array.from(text)
  if (chars.length <= maxChars) return chars.join("")
  return `${chars.slice(0, maxChars).join("")}…`
}

export const SidebarDiscussions = (userOpts = {}) => {
  const opts = {
    repo: "MATHhahetaDEATH/blog",
    limit: 3,
    maxChars: 50,
    title: "最近讨论",
    ...userOpts,
  }

  const Discussions = ({ displayClass }) =>
    h(
      "section",
      {
        class: ["ksm-sidebar-discussions", displayClass].filter(Boolean).join(" "),
        "data-repo": opts.repo,
        "data-limit": String(opts.limit),
        "data-max-chars": String(opts.maxChars),
      },
      h("h3", { class: "ksm-sidebar-discussions-title" }, opts.title),
      h(
        "div",
        { class: "ksm-sidebar-discussions-list" },
        h("p", { class: "ksm-sidebar-discussions-empty" }, "载入中"),
      ),
    )

  Discussions.afterDOMLoaded = `
(() => {
  const init = () => {
    document.querySelectorAll(".ksm-sidebar-discussions").forEach((root) => {
      if (root.dataset.loaded === "true") return
      root.dataset.loaded = "true"
      const repo = root.dataset.repo
      const limit = Number(root.dataset.limit ?? "3")
      const maxChars = Number(root.dataset.maxChars ?? "50")
      const list = root.querySelector(".ksm-sidebar-discussions-list")
      if (!repo || !list) return

      const renderEmpty = (text) => {
        list.replaceChildren()
        const p = document.createElement("p")
        p.className = "ksm-sidebar-discussions-empty"
        p.textContent = text
        list.appendChild(p)
      }

      const truncate = (value, max) => {
        const text = String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\\s+/g, " ").trim()
        const chars = Array.from(text)
        return chars.length > max ? chars.slice(0, max).join("") + "…" : chars.join("")
      }

      fetch("https://api.github.com/repos/" + repo + "/discussions?per_page=" + limit + "&sort=updated&direction=desc", {
        headers: { Accept: "application/vnd.github+json" },
      })
        .then((res) => (res.ok ? res.json() : []))
        .then((items) => {
          const discussions = Array.isArray(items) ? items.slice(0, limit) : []
          if (discussions.length === 0) {
            renderEmpty("暂无讨论")
            return
          }
          list.replaceChildren()
          discussions.forEach((item) => {
            const article = document.createElement("article")
            article.className = "ksm-sidebar-discussion-item"

            const title = document.createElement("a")
            title.className = "ksm-sidebar-discussion-link"
            title.href = item.html_url || ("https://github.com/" + repo + "/discussions/" + item.number)
            title.textContent = item.title || ("Discussion #" + item.number)

            const excerpt = document.createElement("p")
            excerpt.className = "ksm-sidebar-discussion-excerpt"
            excerpt.textContent = truncate(item.body || item.title || "", maxChars)

            article.appendChild(title)
            article.appendChild(excerpt)
            list.appendChild(article)
          })
        })
        .catch(() => renderEmpty("暂无讨论"))
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true })
  } else {
    init()
  }
  document.addEventListener("nav", init)
  document.addEventListener("render", init)
})()
`

  Discussions.css = `
.ksm-sidebar-discussions {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-sidebar-discussions-title {
  margin: 0;
  color: var(--dark);
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1.02rem;
  font-weight: 400;
}

.ksm-sidebar-discussions-list {
  margin-top: 0.4rem;
}

.ksm-sidebar-discussions-empty {
  margin: 0;
  color: var(--gray);
  font-size: 0.76rem;
  line-height: 1.35;
}

.ksm-sidebar-discussion-item + .ksm-sidebar-discussion-item {
  margin-top: 0.55rem;
}

.ksm-sidebar-discussion-link {
  display: block;
  color: var(--secondary);
  font-size: 0.9rem;
  line-height: 1.35;
}

.ksm-sidebar-discussion-excerpt {
  margin: 0.18rem 0 0;
  color: var(--gray);
  font-family: "Cactus Classical Serif", var(--bodyFont);
  font-size: 0.78rem;
  line-height: 1.45;
}
`

  return Discussions
}
