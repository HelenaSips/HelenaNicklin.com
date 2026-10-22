import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor, SITE_URL } from "@/seo";

// Keeps the tab title and description in step as visitors move between pages.
const PageMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const { title, description } = metaFor(path);
    document.title = title;
    const set = (sel: string, attr: string, val: string) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('link[rel="canonical"]', "href", SITE_URL + (path === "/" ? "/" : path));
  }, [pathname]);
  return null;
};

export default PageMeta;
