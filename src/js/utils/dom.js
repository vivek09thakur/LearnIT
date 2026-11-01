export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);

  for (const [name, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    node.setAttribute(name, value);
  }

  node.append(...children.flat(Infinity).filter((child) => child != null && child !== false));
  return node;
}
