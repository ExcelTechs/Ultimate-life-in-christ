import heroChurch from "@/assets/hero-church.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroChurch})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-gold/50 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-body text-gold-light text-sm tracking-widest uppercase">
            Building the Kingdom of God
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="gold-shimmer">THE ULTIMATE LIFE</span>
          <br />
          <span className="text-primary-foreground">IN CHRIST</span>
          <br />
          <span className="text-primary-foreground text-3xl md:text-4xl font-semibold">
            MINISTRIES
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-body text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Transforming communities through faith, education, and sustainable development — one life at a time.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => scrollTo("#about")}
            className="px-8 py-4 gradient-gold text-navy font-display font-bold text-lg rounded-full shadow-gold hover:brightness-110 transition-all duration-200"
          >
            Discover Our Mission
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 border-2 border-gold text-gold font-display font-semibold text-lg rounded-full hover:bg-gold hover:text-navy transition-all duration-200"
          >
            Join Us Today
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-10 bg-gold/50 rounded-full" />
        <span className="font-body text-gold/60 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
