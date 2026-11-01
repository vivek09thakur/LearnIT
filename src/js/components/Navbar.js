import { el } from "../utils/dom.js";
import { resolveUrl } from "../utils/data.js";

const menuIcon = () => el("i", { class: "bx bx-menu menu-icon" });

function NavItem({ label, icon, href }, { active = false, linkClass = "" } = {}) {
  return el(
    "li",
    { class: "list" },
    el(
      "a",
      { href: resolveUrl(href), class: ["nav-link", active && "active-link"].filter(Boolean).join(" ") },
      el("i", { class: `${icon} icon` }),
      el("span", { class: ["link", linkClass].filter(Boolean).join(" ") }, label)
    )
  );
}

export function Navbar({ title, sidebarTitle, links, home, activeId }) {
  const nav = el(
    "nav",
    {},
    el(
      "div",
      { class: "logo" },
      menuIcon(),
      el("span", { class: "logo-name" }, title),
      el(
        "div",
        { class: "head" },
        el("h3", { class: "head-links" }, el("a", { class: "head-link", href: resolveUrl(home.href) }, home.label))
      )
    ),
    el(
      "div",
      { class: "sidebar" },
      el("div", { class: "logo" }, menuIcon(), el("span", { class: "logo-name" }, sidebarTitle)),
      el(
        "div",
        { class: "sidebar-content" },
        el(
          "ul",
          { class: "lists" },
          links.map((link) => NavItem(link, { active: link.id === activeId }))
        ),
        el("ul", { class: "bottom-content" }, NavItem(home, { linkClass: "sidebar-links" }))
      )
    )
  );

  const overlay = el("section", { class: "overlay" });

  nav.querySelectorAll(".menu-icon").forEach((button) => {
    button.addEventListener("click", () => nav.classList.toggle("open"));
  });
  overlay.addEventListener("click", () => nav.classList.remove("open"));

  const fragment = document.createDocumentFragment();
  fragment.append(nav, overlay);
  return fragment;
}
