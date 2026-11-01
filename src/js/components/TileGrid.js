import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

const isExternal = (href) => /^https?:\/\//i.test(href);

export function Tile({ label, href, icon, description }) {
  const url = resolveUrl(href);
  return el(
    "a",
    {
      class: "tile",
      href: url,
      target: isExternal(href) ? "_blank" : null,
      rel: isExternal(href) ? "noopener noreferrer" : null,
    },
    icon && el("i", { class: `tile-icon ${icon}` }),
    el(
      "span",
      { class: "tile-body" },
      el("span", { class: "tile-label" }, label),
      description && el("span", { class: "tile-description" }, description)
    ),
    el("i", { class: "tile-arrow bx bx-right-arrow-alt" })
  );
}

export function TileGrid({ items, variant = "compact" }) {
  return el("div", { class: `tile-grid tile-grid--${variant}` }, items.map(Tile));
}
