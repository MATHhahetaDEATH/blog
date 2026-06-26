import { h } from "preact"

export const SiteLogo = (userOpts = {}) => {
  const opts = {
    href: "/",
    src: "https://img.ksmtang.com/logo.svg",
    alt: "Kasumi Tang",
    width: 240,
    height: 80,
    ...userOpts,
  }

  const Logo = ({ displayClass }) =>
    h(
      "a",
      { class: ["ksm-site-logo", displayClass].filter(Boolean).join(" "), href: opts.href },
      h("img", {
        src: opts.src,
        alt: opts.alt,
        width: opts.width,
        height: opts.height,
        loading: "eager",
        decoding: "async",
      }),
    )

  Logo.css = `
.ksm-site-logo {
  display: block;
  width: min(100%, 240px);
  line-height: 0;
}

.ksm-site-logo img {
  width: 100%;
  max-width: 240px;
  height: auto;
  aspect-ratio: 3 / 1;
  object-fit: contain;
  margin: 0;
  border-radius: 0;
}
`

  return Logo
}
