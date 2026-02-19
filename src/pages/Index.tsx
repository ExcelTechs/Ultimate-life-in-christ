import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurWorkSection from "@/components/OurWorkSection";
import ProgramsSection from "@/components/ProgramsSection";
import ChurchesSection from "@/components/ChurchesSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import ImageScrollStrip from "@/components/ImageScrollStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurWorkSection />
      <ProgramsSection />
      <ChurchesSection />
      <ContactSection />
      <BlogSection />
      <ImageScrollStrip />
      <Footer />
    </div>
  );
};

export default Index;
