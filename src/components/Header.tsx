import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/franchise", label: "Franchise" },
  { to: "/healthcare", label: "Healthcare" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/methodology", label: "Methodology" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-navy-light/30">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl font-bold text-primary-foreground tracking-wide">
          MICK <span className="text-gold">RIDDIOUGH</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-primary border-t border-navy-light/30 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium tracking-wide transition-colors ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
