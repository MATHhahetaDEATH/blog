import { h } from "preact"

export const GiscusComments = (userOpts = {}) => {
  const opts = {
    repo: "MATHhahetaDEATH/blog",
    repoId: "R_kgDOTEoNZw",
    category: "General",
    categoryId: "DIC_kwDOTEoNZ84C_6-T",
    mapping: "pathname",
    strict: false,
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: "bottom",
    theme: "preferred_color_scheme",
    lang: "zh-CN",
    ...userOpts,
  }

  const Comments = ({ displayClass, fileData }) => {
    const commentsOverride = fileData.frontmatter?.comments
    if (commentsOverride === false || commentsOverride === "false") {
      return h("div", null)
    }

    return h("div", {
      class: ["giscus", displayClass].filter(Boolean).join(" "),
      "data-repo": opts.repo,
      "data-repo-id": opts.repoId,
      "data-category": opts.category,
      "data-category-id": opts.categoryId,
      "data-mapping": opts.mapping,
      "data-strict": opts.strict ? "1" : "0",
      "data-reactions-enabled": opts.reactionsEnabled ? "1" : "0",
      "data-emit-metadata": opts.emitMetadata ? "1" : "0",
      "data-input-position": opts.inputPosition,
      "data-theme": opts.theme,
      "data-lang": opts.lang,
    })
  }

  Comments.afterDOMLoaded = `
(() => {
  const init = () => {
    document.querySelectorAll(".giscus").forEach((root) => {
      if (root.dataset.loaded === "true") return
      root.dataset.loaded = "true"
      root.replaceChildren()
      const script = document.createElement("script")
      script.src = "https://giscus.app/client.js"
      script.async = true
      script.crossOrigin = "anonymous"
      script.setAttribute("data-repo", root.dataset.repo)
      script.setAttribute("data-repo-id", root.dataset.repoId)
      script.setAttribute("data-category", root.dataset.category)
      script.setAttribute("data-category-id", root.dataset.categoryId)
      script.setAttribute("data-mapping", root.dataset.mapping)
      script.setAttribute("data-strict", root.dataset.strict)
      script.setAttribute("data-reactions-enabled", root.dataset.reactionsEnabled)
      script.setAttribute("data-emit-metadata", root.dataset.emitMetadata ?? "0")
      script.setAttribute("data-input-position", root.dataset.inputPosition)
      script.setAttribute("data-lang", root.dataset.lang)
      if (root.dataset.theme) {
        script.setAttribute("data-theme", root.dataset.theme)
      }
      root.appendChild(script)
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

  return Comments
}
