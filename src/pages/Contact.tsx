import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
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
            We'd Love To Hear From You
          </p>
          <h1 className="font-display font-black text-white text-5xl md:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
            Reach out to partner, volunteer, or learn more about our mission. Together we can transform lives and communities.
          </p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
