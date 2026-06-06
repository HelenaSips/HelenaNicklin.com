import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/helenasips-logo-new.png";

const navLinks = [
  { label: "About Helena", href: "/about" },
  { label: "Work With Helena", href: "/events" },
  { label: "Upcoming Events", href: "/upcoming-events" },
  { label: "Brand Partnerships", href: "/brand-partnerships" },
  { label: "Podcast", href: "/podcast" },
  { label: "In The Press", href: "/press" },
  { label: "Magazine", href: "/magazine" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-primary"
      }`}
    >
      {/* Top bar with logo + hamburger */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src={logoWhite} alt="HelenaSips" className="h-14 md:h-20 w-auto" />
        </Link>

        {/* Hamburger button — visible on mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-primary-foreground/80 hover:text-accent transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop navigation — hidden on mobile */}
      <nav className="hidden md:block border-t border-primary-foreground/10">
        <div className="flex items-center justify-center gap-3 md:gap-7 px-4 py-2 md:py-2.5 max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-font whitespace-nowrap text-sm tracking-wide transition-colors duration-300 ${
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

      {/* Mobile menu overlay */}
      {menuOpen && (
        <nav className="md:hidden fixed inset-0 top-20 bg-primary z-40 overflow-y-auto">
          <div className="flex flex-col items-center gap-1 py-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-4 text-lg font-heading tracking-wider transition-colors duration-300 border-b border-primary-foreground/10 ${
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
      )}
    </header>
  );
};

export default Navbar;
