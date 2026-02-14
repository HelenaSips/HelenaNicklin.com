import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "@/assets/helenasips-logo-white.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Salons & Events", href: "/events" },
  { label: "Content Creation", href: "/content-creation" },
  { label: "Podcast", href: "/podcast" },
  { label: "In The Press", href: "/press" },
  { label: "Magazine", href: "/magazine" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-primary"
      }`}
    >
      {/* Top bar with logo */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-center h-14 md:h-16">
        <Link to="/" className="flex items-center">
          <img src={logoWhite} alt="HelenaSips" className="h-8 md:h-11 w-auto" />
        </Link>
      </div>

      {/* Navigation links — always visible, horizontally scrollable on mobile */}
      <nav className="border-t border-primary-foreground/10">
        <div className="flex items-center justify-center gap-3 md:gap-7 px-4 py-2 md:py-2.5 overflow-x-auto scrollbar-hide max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-font whitespace-nowrap text-[11px] md:text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
