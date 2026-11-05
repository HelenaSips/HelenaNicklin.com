import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Pages load lazily, so the target section may not exist yet.
    // Keep looking for it for a few seconds, then scroll to it.
    const id = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempts++ < 30) {
        timer = setTimeout(tryScroll, 100);
      }
    };

    timer = setTimeout(tryScroll, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
