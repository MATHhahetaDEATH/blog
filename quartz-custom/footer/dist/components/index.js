import { h } from "preact"

const defaultQuickLinks = [
  { label: "Moments", href: "/journal_flow/", description: "威力加强版的朋友圈" },
  { label: "ダイアリー", href: "/dairy/", description: "快来这里「视奸」我" },
  { label: "過期思想", href: "/deprecated/", description: "「Paradigm Shift」的灰燼" },
  { label: "笔记分享", href: "/stem/", description: "所有（未完成）笔记的归档" },
]

const defaultAboutLinks = [
  { label: "About", href: "https://www.ksmtang.com/about" },
  { label: "Site Map", href: "/index/" },
]

const defaultLinks = [
  { label: "かすみのサイト", href: "https://www.ksmtang.com/", description: "主站" },
  {
    label: "XYX's Website",
    href: "https://xyx.1919810.com/",
    description: "A small website. 一个很普通的小站. ",
  },
]

const defaultSocialLinks = [
  { label: "GitHub", href: "https://github.com/MATHhahetaDEATH" },
  { label: "Bilibili", href: "https://space.bilibili.com/322168286" },
  { label: "Weixin", popup: "KASUMI和他愉快的伙伴们" },
  { label: "Zhihu", popup: "晨沐公" },
]

const renderLink = (item, className) => h("a", { class: className, href: item.href }, item.label)
const renderAnnotatedLink = (item, className) =>
  h(
    "a",
    { class: className, href: item.href },
    h("span", null, item.label),
    item.description ? h("small", null, item.description) : null,
  )

const renderSocialLink = (item) =>
  item.href
    ? h("a", { class: "ksm-social-button", href: item.href }, item.label)
    : h(
        "button",
        {
          class: "ksm-social-button ksm-social-popup-trigger",
          type: "button",
          "data-popup": item.popup ?? item.label,
          "aria-expanded": "false",
        },
        item.label,
      )

export const Footer = (userOpts = {}) => {
  const opts = {
    quickLinks: defaultQuickLinks,
    aboutLinks: defaultAboutLinks,
    links: defaultLinks,
    socialLinks: defaultSocialLinks,
    ...userOpts,
  }

  const FooterComponent = ({ displayClass }) =>
    h(
      "footer",
      { class: ["ksm-footer", displayClass].filter(Boolean).join(" ") },
      h(
        "div",
        { class: "ksm-footer-inner" },
        h(
          "section",
          { class: "ksm-footer-section ksm-footer-quick" },
          h("h2", null, "快速跳转"),
          h(
            "div",
            { class: "ksm-footer-quick-grid" },
            opts.quickLinks.map((item) =>
              h(
                "a",
                { class: "ksm-footer-quick-link", href: item.href },
                h("span", null, item.label),
                item.description ? h("small", null, item.description) : null,
              ),
            ),
          ),
        ),
        h(
          "section",
          { class: "ksm-footer-section" },
          h("h2", null, "このサイトについて"),
          h(
            "ul",
            null,
            opts.aboutLinks.map((item) => h("li", null, renderLink(item, "ksm-footer-link"))),
          ),
        ),
        h(
          "section",
          { class: "ksm-footer-section" },
          h("h2", null, "Links"),
          h(
            "ul",
            null,
            opts.links.map((item) =>
              h("li", null, renderAnnotatedLink(item, "ksm-footer-link ksm-footer-annotated-link")),
            ),
          ),
        ),
      ),
      h(
        "div",
        { class: "ksm-footer-bottom" },
        h(
          "p",
          null,
          "\u00A9 Kasumi Tang 2026 | Created with ",
          h("a", { href: "https://quartz.jzhao.xyz/" }, "Quartz v5.0.0"),
        ),
        h(
          "nav",
          { class: "ksm-social-links", "aria-label": "Social links" },
          opts.socialLinks.map((item) => renderSocialLink(item)),
        ),
      ),
    )

  FooterComponent.css = `
.ksm-footer {
  grid-area: grid-footer;
  width: 100%;
  margin-top: 3rem;
  padding: 2.4rem 2rem 1.4rem;
  box-sizing: border-box;
  background: rgb(39, 44, 47);
  color: var(--ksm-theme-accent, var(--secondary));
}

.ksm-footer a {
  color: rgb(251, 248, 248);
}

.ksm-footer a:hover {
  color: var(--tertiary);
}

.ksm-footer-inner {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(10rem, 1fr) minmax(10rem, 1fr);
  gap: 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
}

.ksm-footer-section h2 {
  margin: 0 0 0.8rem;
  color: var(--ksm-theme-accent, var(--secondary));
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1rem;
  font-weight: 400;
}

.ksm-footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ksm-footer-section li + li {
  margin-top: 0.42rem;
}

.ksm-footer-link,
.ksm-footer-quick-link,
.ksm-social-button {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-footer-annotated-link {
  display: block;
}

.ksm-footer-quick-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.ksm-footer-quick-link {
  display: block;
  padding: 0.75rem 0;
}

.ksm-footer-quick-link span {
  display: block;
  color: rgb(251, 248, 248);
  font-size: 1rem;
}

.ksm-footer-quick-link small,
.ksm-footer-annotated-link small {
  display: block;
  margin-top: 0.2rem;
  color: rgba(255, 255, 255, 0.54);
  font-family: "Cactus Classical Serif", var(--bodyFont);
  font-size: 0.76rem;
  line-height: 1.4;
}

.ksm-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.ksm-footer-bottom p {
  margin: 0;
  color: var(--ksm-theme-accent, var(--secondary));
  font-size: 0.78rem;
}

.ksm-social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  position: relative;
}

.ksm-social-button {
  display: inline-flex;
  align-items: center;
  min-height: 1.8rem;
  padding: 0 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: rgb(251, 248, 248);
  background: transparent;
  cursor: pointer;
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 0.74rem;
}

.ksm-social-popup {
  position: fixed;
  z-index: 50;
  max-width: min(16rem, calc(100vw - 2rem));
  padding: 0.55rem 0.75rem;
  border: 1px solid rgba(251, 248, 248, 0.22);
  border-radius: 0.4rem;
  background: rgb(39, 44, 47);
  color: rgb(251, 248, 248);
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 0.78rem;
  line-height: 1.45;
  box-shadow: 0 0.75rem 1.8rem rgba(0, 0, 0, 0.28);
}

@media (max-width: 800px) {
  .ksm-footer {
    padding: 2rem 1rem 1.2rem;
  }

  .ksm-footer-inner {
    grid-template-columns: 1fr;
  }

  .ksm-footer-quick-grid {
    grid-template-columns: 1fr;
  }

  .ksm-footer-bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
`

  FooterComponent.afterDOMLoaded = `
(() => {
  const attr = "data-ksm-footer-mode"
  let ticking = false
  let popup = null

  const update = () => {
    ticking = false
    const footer = document.querySelector("footer.ksm-footer")
    if (!footer) {
      document.documentElement.setAttribute(attr, "off")
      return
    }

    const rect = footer.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const active = rect.top <= viewportHeight && rect.bottom >= 0
    document.documentElement.setAttribute(attr, active ? "on" : "off")
  }

  const requestUpdate = () => {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(update)
  }

  const closePopup = () => {
    if (!popup) return
    popup.remove()
    popup = null
    document.querySelectorAll(".ksm-social-popup-trigger").forEach((button) => {
      button.setAttribute("aria-expanded", "false")
    })
  }

  const bindPopupButtons = () => {
    document.querySelectorAll(".ksm-social-popup-trigger").forEach((button) => {
      if (button.dataset.popupBound === "true") return
      button.dataset.popupBound = "true"
      button.addEventListener("click", (event) => {
        event.stopPropagation()
        closePopup()
        const text = button.dataset.popup
        if (!text) return
        popup = document.createElement("div")
        popup.className = "ksm-social-popup"
        popup.textContent = text
        document.body.appendChild(popup)
        const rect = button.getBoundingClientRect()
        const popupRect = popup.getBoundingClientRect()
        const top = Math.max(12, rect.top - popupRect.height - 8)
        const left = Math.min(
          window.innerWidth - popupRect.width - 12,
          Math.max(12, rect.left + rect.width / 2 - popupRect.width / 2),
        )
        popup.style.top = top + "px"
        popup.style.left = left + "px"
        button.setAttribute("aria-expanded", "true")
      })
    })
  }

  const bind = () => {
    update()
    bindPopupButtons()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    document.addEventListener("click", closePopup)
    window.addCleanup?.(() => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      document.removeEventListener("click", closePopup)
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind, { once: true })
  } else {
    bind()
  }
  document.addEventListener("nav", () => {
    requestUpdate()
    bindPopupButtons()
  })
  document.addEventListener("render", () => {
    requestUpdate()
    bindPopupButtons()
  })
})()
`

  return FooterComponent
}
