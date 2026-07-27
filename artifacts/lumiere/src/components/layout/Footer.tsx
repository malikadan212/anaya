import { Link } from 'wouter';
import { Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-light tracking-wider mb-4">Lumière</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Jewels That Hold Your Story
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Collections
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                About
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">Follow</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-light text-center">
            © {currentYear} Lumière. Handcrafted in Paris, refined in Tokyo.
          </p>
        </div>
      </div>
    </footer>
  );
}
