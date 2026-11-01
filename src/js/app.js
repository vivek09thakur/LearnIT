import { loadJson } from "./utils/data.js";
import { el } from "./utils/dom.js";
import { Navbar } from "./components/Navbar.js";
import { Accordion } from "./components/Accordion.js";
import { TileGrid } from "./components/TileGrid.js";
import { Hero } from "./components/Hero.js";
import { Footer } from "./components/Footer.js";

const layouts = {
  home: (page) =>
    el(
      "main",
      { class: "landing" },
      Hero(page.hero),
      el(
        "section",
        { class: "features" },
        el("h2", { class: "section-title" }, page.features.heading),
        TileGrid({ items: page.features.items, variant: "feature" })
      )
    ),

  resources: (page) =>
    el(
      "main",
      { class: "main" },
      Accordion({
        items: page.sections.map(({ heading, links }) => ({
          heading,
          content: TileGrid({ items: links.map((link) => ({ icon: "bx bxs-folder", ...link })) }),
        })),
      })
    ),
};

async function main() {
  const root = document.getElementById("app");
  const { page: pageId, layout: layoutId } = document.body.dataset;

  const renderLayout = layouts[layoutId];
  if (!renderLayout) throw new Error(`Unknown layout "${layoutId}"`);

  const [site, page] = await Promise.all([loadJson("src/data/site.json"), loadJson(`src/data/${pageId}.json`)]);

  root.replaceChildren(
    Navbar({ title: page.navTitle, ...site.nav, activeId: pageId }),
    renderLayout(page, site),
    Footer({ siteName: site.name, email: site.contact.email, ...site.footer })
  );
}

main().catch((error) => {
  console.error(error);
  document
    .getElementById("app")
    .replaceChildren(el("p", { class: "load-error" }, "Failed to load page content. Please refresh the page."));
});
