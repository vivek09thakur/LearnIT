import { loadJson } from "./utils/data.js";
import { el } from "./utils/dom.js";
import { Navbar } from "./components/Navbar.js";
import { Accordion } from "./components/Accordion.js";
import { LinkList } from "./components/LinkList.js";
import { HomeContent } from "./components/HomeContent.js";

const layouts = {
  home: (page, site) => HomeContent({ ...page, email: site.contact.email }),

  resources: (page) =>
    el(
      "div",
      { class: "main" },
      Accordion({
        items: page.sections.map(({ heading, links }) => ({ heading, content: LinkList({ links }) })),
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
    renderLayout(page, site)
  );
}

main().catch((error) => {
  console.error(error);
  document
    .getElementById("app")
    .replaceChildren(el("p", { class: "load-error" }, "Failed to load page content. Please refresh the page."));
});
