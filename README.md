## **LearnIT 🔰 | First github project 🚩**

An open-source book distribution website to provide free books and syllabus to students pursuing their diplomas in Computer Science and Engineering. This site was made as a beginner project to practice HTML,CSS and Javascript. So It may crashes sometimes. If you encounter an error or anykind of problem **[just let me know](20509.vivek@gpranchi.org)**.

### **Live at: [learnit-io.vercel.app](https://learnit-io.vercel.app/)**

### **Contributors**

If you want to add new features, new resources, new book, updated syllabus and other learning stuffs then feel free to contribute. Just fork and create your own branch and leave a pull-request.

### **Project structure**

All page content and links live in JSON, and the pages are rendered from reusable components:

```
index.html, src/pages/*.html   thin page shells: <body data-page="…" data-layout="…">
src/data/site.json             shared: site name, nav links, contact email, footer/author link
src/data/<page>.json           per-page content (home, syllabus, books, questions)
src/js/app.js                  loads the JSON for the page and mounts a layout
src/js/components/             Navbar, Hero, TileGrid, Accordion, Footer
src/js/utils/                  el() DOM helper, resolveUrl(), loadJson()
src/css/main.css               imports base + one stylesheet per component
```

**Adding a resource:** edit the matching file in `src/data/` — e.g. to add a book, append `{ "label": "...", "href": "..." }` to the right semester in `books.json`. It shows up as a card in the grid; an optional `"icon"` (Boxicons class) or `"description"` can be added too. No HTML changes needed.

**Adding a nav link:** add an entry to `nav.links` in `site.json` (paths are relative to the site root) and create a page shell whose `data-page` matches the link `id`.

**Running locally:** the pages fetch JSON and use ES modules, so serve over HTTP rather than opening files directly, e.g. `python -m http.server 8000` then visit `http://localhost:8000/`.

### **Designed/Developed by - [Vivek Kumar (CSE-20509)](20509.vivek@gpranchi.org)**