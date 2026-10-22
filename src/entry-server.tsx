import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import { AppShell } from "./App";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
      final(cb) { resolve(html); cb(); },
    });
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}><AppShell /></StaticRouter>,
      { onAllReady() { pipe(sink); }, onError(err) { reject(err); } },
    );
  });
}
export { PAGE_META, SITEMAP_ROUTES, PERSON_SCHEMA, SITE_URL, metaFor, FAQS } from "./seo";
