import { el } from "../utils/dom.js";

export function Footer({ siteName, author, contactNote, email }) {
  return el(
    "footer",
    { class: "site-footer" },
    el("p", {}, `${contactNote} `, el("a", { href: `mailto:${email}` }, email)),
    el(
      "p",
      {},
      `© ${new Date().getFullYear()} ${siteName} · Designed & developed by `,
      el("a", { href: author.href, target: "_blank", rel: "noopener noreferrer" }, author.name)
    )
  );
}
