import { Button } from "@/components/ui/button";

import { ArrowRight, Play } from "lucide-react";
import ColorBends from "./ColorBends";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] h-[100svh] overflow-hidden"
    >
      {/* Fluid Mesh Background */}
      {/* ColorBends Background */}
      <div className="absolute inset-0">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={false}
          autoRotate={0}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 blur-xl animate-float" />
      <div
        className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/10 blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-4 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/15 blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-6">
        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto text-center animate-fade-in-up pt-0 sm:pt-20 lg:pt-24 px-1.5 sm:px-4 flex flex-col justify-center min-h-[calc(100svh-64px)] sm:min-h-auto pb-1.5">
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 sm:mb-4 leading-snug px-2">
            <span className="text-gradient">DinoLeap</span>
            <br />
            <span className="text-foreground/90">Smarter Solutions.</span>
            <br />
            <span className="text-foreground/90">Faster Growth.</span>
          </h1>

          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 sm:mb-5 max-w-3xl mx-auto leading-relaxed px-3 sm:px-6">
            We craft high-impact websites & social strategies to help your brand
            blossom online. Professional development meets creative marketing
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-2 sm:mb-5 lg:mb-6 px-3 sm:px-6">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="group w-full sm:w-auto max-w-xs sm:max-w-none text-sm py-3 sm:text-base sm:py-4"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              onClick={() => scrollToSection("portfolio")}
              className="group w-full sm:w-auto max-w-xs sm:max-w-none text-sm py-3 sm:text-base sm:py-4"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-4 lg:gap-6 max-w-lg mx-auto px-2.5 sm:px-6">
            <div className="glass-card text-center p-2 sm:p-4 lg:p-4 rounded-lg">
              <div className="text-base sm:text-2xl lg:text-2xl font-bold text-gradient mb-0.5">
                50+
              </div>
              <div className="text-[10px] sm:text-sm text-muted-foreground leading-tight">
                Projects Delivered
              </div>
            </div>
            <div className="glass-card text-center p-2 sm:p-4 lg:p-4 rounded-lg">
              <div className="text-base sm:text-2xl lg:text-2xl font-bold text-gradient mb-0.5">
                98%
              </div>
              <div className="text-[10px] sm:text-sm text-muted-foreground leading-tight">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
