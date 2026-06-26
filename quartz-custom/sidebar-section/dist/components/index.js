import { h } from "preact"

const toText = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()

const truncate = (value, maxChars = 50) => {
  const chars = Array.from(toText(value))
  if (chars.length <= maxChars) return chars.join("")
  return `${chars.slice(0, maxChars).join("")}…`
}

const pageDate = (page) => {
  const raw =
    page.frontmatter?.date ?? page.dates?.published ?? page.dates?.modified ?? page.dates?.created
  const date = raw instanceof Date ? raw : new Date(raw)
  return Number.isNaN(date.getTime()) ? undefined : date
}

const pageHref = (slug) => `/${String(slug ?? "").replace(/\/index$/, "/")}`

const pageText = (page) =>
  page.frontmatter?.description ?? page.description ?? page.text ?? page.frontmatter?.summary ?? ""

export const SidebarSection = (userOpts = {}) => {
  const opts = {
    title: "Moments",
    href: "/journal_flow/",
    folder: "journal_flow",
    showPreview: true,
    previewLabel: "最新的",
    previewChars: 50,
    ...userOpts,
  }

  const SidebarSectionComponent = ({ allFiles = [], displayClass }) => {
    const pages = allFiles
      .filter((page) => page.unlisted !== true)
      .filter((page) => typeof page.slug === "string")
      .filter((page) => page.slug.startsWith(`${opts.folder}/`))
      .filter((page) => !page.slug.endsWith("/index"))
      .map((page) => ({ page, date: pageDate(page) }))
      .filter((entry) => entry.date)
      .sort((a, b) => b.date.getTime() - a.date.getTime())

    const latest = pages[0]

    return h(
      "section",
      { class: ["ksm-sidebar-section", displayClass].filter(Boolean).join(" ") },
      h("a", { class: "ksm-sidebar-section-title", href: opts.href }, opts.title),
      opts.showPreview && latest
        ? h(
            "div",
            { class: "ksm-sidebar-section-preview" },
            h("span", { class: "ksm-sidebar-section-preview-label" }, opts.previewLabel),
            h(
              "a",
              { class: "ksm-sidebar-section-preview-link", href: pageHref(latest.page.slug) },
              h(
                "span",
                { class: "ksm-sidebar-section-preview-title" },
                latest.page.frontmatter?.title ?? latest.page.title ?? latest.page.slug,
              ),
              h(
                "small",
                { class: "ksm-sidebar-section-preview-text" },
                truncate(pageText(latest.page), opts.previewChars),
              ),
            ),
          )
        : null,
    )
  }

  SidebarSectionComponent.css = `
.ksm-sidebar-section {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-sidebar-section-title {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  color: var(--dark);
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1.05rem;
  line-height: 1.2;
}

.ksm-sidebar-section-title:hover {
  color: var(--secondary);
}

.ksm-sidebar-section-preview {
  margin-top: 0.35rem;
}

.ksm-sidebar-section-preview-label {
  display: block;
  color: var(--gray);
  font-size: 0.72rem;
  line-height: 1.2;
}

.ksm-sidebar-section-preview-link {
  display: block;
  margin-top: 0.2rem;
}

.ksm-sidebar-section-preview-title {
  display: block;
  color: var(--dark);
  font-size: 0.95rem;
  line-height: 1.3;
}

.ksm-sidebar-section-preview-text {
  display: block;
  margin-top: 0.2rem;
  color: var(--gray);
  font-family: "Cactus Classical Serif", var(--bodyFont);
  font-size: 0.8rem;
  line-height: 1.45;
}
`

  return SidebarSectionComponent
}
