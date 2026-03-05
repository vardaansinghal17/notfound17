import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl tracking-widest text-foreground mb-4">
              NOTFOUND17
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              For those who were never meant to fit in. Limited drops. Identity-driven denim.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/products", label: "Products" },
                { to: "/about", label: "About" },
                { to: "/story", label: "Story" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Join the Circle
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="bg-secondary text-foreground px-4 py-3 text-sm font-body flex-1 border border-border focus:outline-none focus:border-foreground transition-colors"
              />
              <button className="bg-foreground text-primary-foreground px-6 py-3 text-sm font-body tracking-wider uppercase hover:bg-muted-foreground transition-colors">
                Join
              </button>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
              <span className="font-body text-xs tracking-wider uppercase">@notfound17</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © 2026 NOTFOUND17. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
