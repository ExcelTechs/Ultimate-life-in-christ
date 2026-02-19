import { Cross, Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Programs", href: "#programs" },
  { label: "Churches & Centres", href: "#churches" },
  { label: "Contact", href: "#contact" },
];

const ministryAreas = [
  "Church Establishment",
  "Farming Projects",
  "Schools & Education",
  "Skills Training",
  "Leadership Development",
  "Entrepreneurship Academy",
  "Church Network Coordination",
];

export default function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold flex-shrink-0">
                <Cross className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-display text-gold font-bold text-sm leading-tight">THE ULTIMATE LIFE</p>
                <p className="font-display text-primary-foreground/80 text-xs leading-tight">IN CHRIST MINISTRIES</p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/65 text-sm leading-relaxed mb-6">
              Transforming communities through faith, education, and sustainable development — empowering lives for God's glory.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[Facebook, Youtube, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200 text-primary-foreground/70"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gold mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm text-primary-foreground/65 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministry Areas */}
          <div>
            <h4 className="font-display font-bold text-gold mb-5">Ministry Areas</h4>
            <ul className="space-y-2">
              {ministryAreas.map((area) => (
                <li key={area}>
                  <span className="font-body text-sm text-primary-foreground/65 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-gold mb-5">Stay Connected</h4>
            <p className="font-body text-sm text-primary-foreground/65 mb-4">
              Subscribe to receive updates on our ministry, programs, and prayer requests.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-primary-foreground placeholder:text-primary-foreground/35 font-body text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 gradient-gold text-navy font-display font-bold text-sm rounded-full shadow-gold hover:brightness-110 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-primary-foreground/45 text-center md:text-left">
            © {new Date().getFullYear()} The Ultimate Life In Christ Ministries. All rights reserved.
          </p>
          <p className="font-display text-xs italic text-gold/60">
            "To Him be glory in the church and in Christ Jesus throughout all generations." — Ephesians 3:21
          </p>
        </div>
      </div>
    </footer>
  );
}
