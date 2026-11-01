import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

export function HomeContent({ headline, images, subheadline, contactNote, email }) {
  return el(
    "div",
    { class: "content" },
    el("div", { class: "content-heading-1" }, el("h1", {}, headline)),
    images.map((src) => el("img", { class: "content-inside-images", src: resolveUrl(src), alt: "" })),
    el("div", { class: "content-heading-2" }, el("h1", {}, subheadline)),
    el(
      "p",
      { class: "content-inside-2" },
      `${contactNote} `,
      el("a", { class: "content-link", href: `mailto:${email}` }, email)
    )
  );
}
