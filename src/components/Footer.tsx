import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-3">
            MICK <span className="text-gold">RIDDIOUGH</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Award-winning Franchise Development Consultant &amp; Healthcare Policy Leader with 30+ years of executive experience.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/franchise", label: "Franchise Development" },
              { to: "/healthcare", label: "Healthcare Leadership" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="mailto:mick@theriddioughgroup.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={16} /> mick@theriddioughgroup.com
            </a>
            <a href="tel:3365759585" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={16} /> (336) 575-9585
            </a>
            <a href="https://www.linkedin.com/in/mickriddiough" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        &copy; {new Date().getFullYear()} Michael Riddiough. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
