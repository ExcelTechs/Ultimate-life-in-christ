import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Header */}
      <div className="relative pt-24">
        <div className="gradient-navy py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
              We'd Love To Hear From You
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto">
              Contact Us
            </h1>
            <p className="font-body text-primary-foreground/70 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              Reach out to partner, volunteer, or learn more about our mission. Together we can transform lives and communities.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
