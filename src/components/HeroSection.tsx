import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(120deg, hsl(330 100% 42%) 0%, hsl(310 80% 30%) 35%, hsl(285 65% 22%) 60%, hsl(240 30% 20%) 100%)",
      }}
    >
      {/* Subtle noise/texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Small label */}
          <p
            className="font-body text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase mb-6 animate-fade-in"
          >
            {/* Building the Kingdom of God */}
          </p>

          {/* Main headline */}
          <h1
            className="font-display font-black text-white leading-[1.05] mb-6 animate-fade-up"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", animationDelay: "0.1s" }}
          >
            The Ultimate Life In Christ<br />
            <span className="text-white/90 whitespace-nowrap">ministries</span>
           
          </h1>

          {/* Subtitle */}
            <p
            className="font-display font-bold text-white/90 text-lg md:text-[35px] leading-relaxed max-w-lg mx-auto mb-2 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
            >
            Our Vision
            </p>
            <p
            className="font-body text-white/75 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
            >
            Empowering people, changing lives
            </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollTo("#about")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground font-display font-bold text-base rounded-sm hover:bg-white/90 transition-all duration-200"
            >
              Discover Our Mission
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-display font-semibold text-base rounded-sm hover:border-white/70 hover:bg-white/10 transition-all duration-200"
            >
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

