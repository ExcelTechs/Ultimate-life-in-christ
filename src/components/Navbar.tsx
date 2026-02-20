import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Programs", href: "/programs", section: null },
  { label: "About ministry", href: "/", section: "#about" },
  { label: "Our Work", href: "/", section: "#work" },
  { label: "Blog", href: "/blog", section: null },
  { label: "Contact", href: "/contact", section: null },
];

interface NavbarProps {
  onPartnerClick?: () => void;
}

export default function Navbar({ onPartnerClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, section: string | null) => {
    setOpen(false);
    if (section) {
      if (location.pathname === "/") {
        document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
        setTimeout(() => {
          document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePartner = () => {
    setOpen(false);
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string, section: string | null) => {
    if (section) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Floating pill navbar — pre-scroll */}
      {!scrolled ? (
        <div className="px-4 md:px-8 pt-4">
          <div
            className="container mx-auto flex items-center justify-between px-4 py-3 rounded-full"
            style={{
              background: "hsl(var(--primary) / 0.18)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid hsl(var(--gold) / 0.25)",
              boxShadow: "0 4px 32px hsl(var(--primary) / 0.18)",
            }}
          >
            {/* Logo */}
            <button onClick={() => handleNav("/", null)} className="flex items-center flex-shrink-0">
              <img src={logoImg} alt="The Ultimate Life In Christ Ministries" className="h-10 w-auto brightness-0 invert" />
            </button>

            {/* Desktop Nav — centered pill */}
            <nav className="hidden lg:flex items-center gap-1 px-6 py-2 rounded-full"
              style={{ background: "hsl(0 0% 100% / 0.12)" }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.section)}
                  className="font-body text-sm px-4 py-1.5 rounded-full transition-all duration-200 tracking-wide text-white/85 hover:text-white hover:bg-white/15"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Partner CTA */}
              <button
                onClick={handlePartner}
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-white font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-gold flex-shrink-0"
              >
                Partner With Us
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Tablet/Mobile Toggle */}
              <button
                className="lg:hidden text-white p-2 rounded-full hover:bg-white/15 transition-colors"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Dropdown */}
          {open && (
            <div
              className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl overflow-hidden"
              style={{
                background: "hsl(var(--primary) / 0.92)",
                backdropFilter: "blur(20px)",
                border: "1px solid hsl(var(--gold) / 0.2)",
              }}
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link.href, link.section)}
                    className="text-left font-body text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={handlePartner}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gold text-white font-bold text-sm rounded-full"
                >
                  Partner With Us <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Scrolled — solid white bar */
        <div className="bg-white shadow-md transition-all duration-300">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNav("/", null)} className="flex items-center flex-shrink-0">
              <img src={logoImg} alt="The Ultimate Life In Christ Ministries" className="h-10 w-auto" />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.section)}
                  className={`font-body text-sm transition-colors duration-200 tracking-wide ${
                    isActive(link.href, link.section) && link.label !== "Home"
                      ? "text-gold font-semibold"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePartner}
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-white font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-gold flex-shrink-0"
              >
                Partner With Us
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Tablet/Mobile Toggle */}
              <button
                className="lg:hidden text-foreground p-2 rounded-full hover:bg-muted transition-colors"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Dropdown */}
          {open && (
            <div className="lg:hidden bg-white border-t border-border shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link.href, link.section)}
                    className="text-left font-body text-foreground/70 hover:text-foreground py-3 border-b border-border/50 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={handlePartner}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gold text-white font-bold text-sm rounded-full"
                >
                  Partner With Us <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}


