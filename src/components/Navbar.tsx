import { useState, useEffect } from "react";
import { Menu, X, Cross } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Programs", href: "#programs" },
  { label: "Churches", href: "#churches" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold flex-shrink-0">
            <Cross className="w-5 h-5 text-navy" />
          </div>
          <div>
            <p className="font-display text-gold font-bold text-sm leading-tight">
              THE ULTIMATE LIFE
            </p>
            <p className="font-display text-primary-foreground text-xs leading-tight">
              IN CHRIST MINISTRIES
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="font-body text-sm text-primary-foreground/85 hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 bg-gold text-navy font-body font-bold text-sm rounded-full hover:bg-gold-light transition-colors duration-200 shadow-gold"
          >
            Partner With Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left font-body text-primary-foreground/85 hover:text-gold py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 px-5 py-2 bg-gold text-navy font-bold text-sm rounded-full"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
