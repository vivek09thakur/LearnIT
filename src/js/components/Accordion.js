import { el } from "../utils/dom.js";

export function Accordion({ items, openIndex = 0 }) {
  const setOpen = (item, isOpen) => {
    item.classList.toggle("open", isOpen);
    item.classList.toggle("close", !isOpen);
  };

  const elements = items.map(({ heading, content }, index) => {
    const headingEl = el("h2", { class: "accordionItemHeading" }, heading);
    const item = el(
      "div",
      { class: "accordionItem" },
      headingEl,
      el("div", { class: "accordionItemContent" }, el("div", { class: "textWrapper" }, content))
    );
    setOpen(item, index === openIndex);

    headingEl.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      elements.forEach((other) => setOpen(other, false));
      if (!wasOpen) setOpen(item, true);
    });

    return item;
  });

  return el("div", { class: "accordionWrapper" }, elements);
}
