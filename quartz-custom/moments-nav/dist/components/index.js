import { h } from "preact"

export const MomentsNav = (userOpts = {}) => {
  const opts = {
    title: "Moments",
    href: "/journal_flow/",
    subtitle: "Lorem ipsum",
    ...userOpts,
  }

  const Moments = ({ displayClass }) =>
    h(
      "nav",
      {
        class: ["ksm-moments-nav", displayClass].filter(Boolean).join(" "),
        "aria-label": opts.title,
      },
      h("a", { class: "ksm-nav-button", href: opts.href }, opts.title),
      opts.subtitle ? h("p", { class: "ksm-nav-subtitle" }, opts.subtitle) : null,
    )

  Moments.css = `
.ksm-moments-nav {
  font-family: "Kiwi Maru", var(--bodyFont);
}

.ksm-nav-button {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  color: var(--dark);
  background: transparent;
  font-family: "Kiwi Maru", var(--bodyFont);
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.2;
}

.ksm-nav-button:hover {
  color: var(--secondary);
}

.ksm-nav-subtitle {
  margin: 0.35rem 0 0;
  color: var(--gray);
  font-size: 0.86rem;
  line-height: 1.35;
}
`

  return Moments
}
