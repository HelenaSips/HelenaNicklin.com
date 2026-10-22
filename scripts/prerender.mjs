// Runs after the normal build. Writes each page as ready-made HTML so search
// engines and AI tools can read it without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const server = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const { render, PAGE_META, SITEMAP_ROUTES, PERSON_SCHEMA, SITE_URL, FAQS } = server;
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const route of Object.keys(PAGE_META)) {
  const { title, description } = PAGE_META[route];
  const body = await render(route);
  const canonical = SITE_URL + (route === "/" ? "/" : route);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}">`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}">`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}">`)
    .replace("</head>", `  <link rel="canonical" href="${canonical}">\n  <meta property="og:url" content="${canonical}">\n` +
      (route === "/" || route === "/about" ? `  <script type="application/ld+json">${JSON.stringify(PERSON_SCHEMA)}</script>\n` : "") +
      (FAQS[route] ? `  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS[route].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}</script>\n` : "") +
      "</head>")
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${route} (${body.length} chars)`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = SITEMAP_ROUTES.map((r) => `  <url><loc>${SITE_URL}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`).join("\n");
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
console.log("sitemap.xml written");
