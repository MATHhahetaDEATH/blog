import { h } from "preact"

export const SiteMapLink = (userOpts = {}) => {
  const opts = { label: "Site Map", href: "/index/", ...userOpts }

  const Link = ({ displayClass }) =>
    h(
      "nav",
      {
        class: ["ksm-site-map-link", displayClass].filter(Boolean).join(" "),
        "aria-label": opts.label,
      },
      h("a", { class: "ksm-sidebar-button", href: opts.href }, opts.label),
    )

  Link.css = `
.ksm-site-map-link {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-sidebar-button {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  color: var(--dark);
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1rem;
  line-height: 1.2;
}

.ksm-sidebar-button:hover {
  color: var(--secondary);
}
`

  return Link
}
