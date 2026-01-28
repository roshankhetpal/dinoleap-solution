import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle navigation with hash when coming from other pages
    if (location.hash && location.hash !== "#faq") {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure page is loaded
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
