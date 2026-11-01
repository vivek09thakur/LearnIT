import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

export function PageHeader({ title, description, image }) {
  return el(
    "header",
    { class: "page-header" },
    el(
      "div",
      { class: "page-header-text" },
      el("h1", { class: "page-header-title" }, title),
      description && el("p", { class: "page-header-description" }, description)
    ),
    image && el("img", { class: "page-header-image", src: resolveUrl(image), alt: "" })
  );
}
