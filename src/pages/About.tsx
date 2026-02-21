import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, hsl(285 65% 14%) 0%, hsl(310 80% 22%) 60%, hsl(330 100% 35%) 100%)",
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-body text-white/60 text-xs tracking-[0.25em] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-black text-white text-5xl md:text-6xl mb-6">
            About Our Ministry
          </h1>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
            A Spirit-led organization committed to holistic transformation through the Gospel of Jesus Christ.
          </p>
        </div>
      </section>
      <AboutSection />
      <Footer />
    </div>
  );
}
