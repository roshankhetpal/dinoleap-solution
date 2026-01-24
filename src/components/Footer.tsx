import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Logo from "@/images/logo/footer-logo.svg";
import {
  Linkedin,
  Twitter,
  Github,
  Globe,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const navigation = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
      { name: "AI Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Pricing", href: "#pricing" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Support", href: "#contact" },
      { name: "Documentation", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/roshan-khetpal",
      icon: Linkedin,
    },
    {
      name: "Twitter",
  href: "https://twitter.com/dinoleap",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/roshan-khetpal",
      icon: Github,
    },
    {
      name: "Website",
      href: "https://hashnode.com/@roshan",
      icon: Globe,
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("/")) {
      navigate(href);
    } else {
      window.open(href, "_blank");
    }
  };

  return (
  <footer className="relative bg-background border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute top-20 right-1/4 w-24 h-24 rounded-full bg-accent/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-5 mb-6 sm:mb-8">
          {/* DinoLeap Brand section */}
          <div className="lg:col-span-2 flex flex-col items-start justify-center mb-6 sm:mb-8">
            <div className="flex items-center mb-2 relative z-20 left--20">
              <img src={Logo} alt="DinoLeap Logo" className="w-48 h-auto" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              We craft high-impact websites & social strategies to help your brand grow online. Professional development meets creative marketing excellence.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((item) => (
                <Button
                  key={item.name}
                  variant="glass"
                  size="icon"
                  onClick={() => scrollToSection(item.href)}
                  className="hover:scale-110 transition-transform min-w-[44px] min-h-[44px] sm:min-w-[40px] sm:min-h-[40px] p-0"
                >
                  <item.icon className="h-6 w-6 sm:h-5 sm:w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-left">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-left">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left block w-full"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-left">Company</h4>
            <ul className="space-y-1 sm:space-y-2 text-left">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left block w-full"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-left">Support</h4>
            <ul className="space-y-1 sm:space-y-2 text-left">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left block w-full"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="glass-card mb-6 sm:mb-8">
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold mb-2">Stay Updated</h4>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for the latest web development tips,
              design trends, and digital marketing insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg glass border border-white/20 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} DinoLeap Solutions. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {navigation.legal.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
