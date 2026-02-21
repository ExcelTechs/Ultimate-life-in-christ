import Navbar from "@/components/Navbar";
import OurWorkSection from "@/components/OurWorkSection";
import Footer from "@/components/Footer";

export default function OurWork() {
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
            What We Do
          </p>
          <h1 className="font-display font-black text-white text-5xl md:text-6xl mb-6">
            Our Work
          </h1>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
            Serving communities across spiritual, educational, and economic dimensions — reflecting the holistic Gospel of Christ.
          </p>
        </div>
      </section>
      <OurWorkSection />
      <Footer />
    </div>
  );
}
