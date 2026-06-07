import { Link } from "react-router-dom";
import logoWhite from "@/assets/helenasips-logo-new.png";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Work With Helena", href: "/work-with-helena" },
  { label: "Podcast", href: "/podcast" },
  { label: "In The Press", href: "/press" },
  { label: "Magazine", href: "/magazine" },
  { label: "Media Kit", href: "/media-kit" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <img src={logoWhite} alt="HelenaSips" className="h-24 w-auto mb-4" />
            <p className="font-heading text-lg text-primary-foreground/70 italic">
              Drinks Expert. Writer.<br />Broadcaster & Host.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-medium tracking-wider mb-6 text-accent">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-lg font-medium tracking-wider mb-6 text-accent">Connect</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <a href="mailto:helena@helenasips.com" className="hover:text-accent transition-colors">
                helena@helenasips.com
              </a>
              <a href="https://instagram.com/helenasips" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                @helenasips
              </a>
              <Link to="/magazine" className="mt-4 inline-block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all text-center font-heading tracking-wider text-sm">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 HelenaSips. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
