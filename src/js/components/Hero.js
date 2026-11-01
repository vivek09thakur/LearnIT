import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

export function Hero({ eyebrow, headline, tagline, image, actions = [] }) {
  return el(
    "section",
    { class: "hero" },
    el(
      "div",
      { class: "hero-text" },
      eyebrow && el("span", { class: "hero-eyebrow" }, eyebrow),
      el("h1", { class: "hero-title" }, headline),
      el("p", { class: "hero-tagline" }, tagline),
      el(
        "div",
        { class: "hero-actions" },
        actions.map(({ label, href, icon, primary }) =>
          el(
            "a",
            { class: primary ? "cta cta--primary" : "cta", href: resolveUrl(href) },
            icon && el("i", { class: icon }),
            label
          )
        )
      )
    ),
    image && el("img", { class: "hero-image", src: resolveUrl(image), alt: "" })
  );
}
