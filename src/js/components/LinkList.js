import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

export function LinkList({ links }) {
  return el(
    "ul",
    { class: "resource-list" },
    links.map(({ label, href }) =>
      el("li", { class: "resource-item" }, el("a", { class: "resource-link", href: resolveUrl(href) }, label))
    )
  );
}
