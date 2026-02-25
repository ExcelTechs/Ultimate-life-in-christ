import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurWorkSection from "@/components/OurWorkSection";
import ProgramsSection from "@/components/ProgramsSection";
import ChurchesSection from "@/components/ChurchesSection";
import ContactSection from "@/components/ContactSection";
import ImageScrollStrip from "@/components/ImageScrollStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OurWorkSection />
      <ProgramsSection />
      <ChurchesSection />
      <ContactSection />
      <ImageScrollStrip />
      <Footer />
    </div>
  );
};

export default Index;
