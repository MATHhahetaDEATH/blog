import { h } from "preact"

export const SidebarDivider = () => {
  const Divider = ({ displayClass }) =>
    h("div", {
      class: ["ksm-sidebar-divider", displayClass].filter(Boolean).join(" "),
      "aria-hidden": "true",
    })

  Divider.css = `
.ksm-sidebar-divider {
  width: 100%;
  border-top: 1px dashed color-mix(in srgb, var(--gray) 72%, transparent);
  margin: 0.25rem 0;
}
`

  return Divider
}
