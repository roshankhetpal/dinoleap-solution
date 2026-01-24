import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Smartphone,
  Zap,
  Shield,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      subtitle: "Modern, Fast & Responsive",
      description:
        "Custom websites built with React, TypeScript, and modern frameworks. Optimized for performance, SEO, and user experience.",
      features: [
        "React & TypeScript",
        "Mobile-First Design",
        "SEO Optimized",
        "Fast Loading",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Cross‑platform iOS & Android",
      description:
        "High-quality mobile applications using modern stacks and best practices. Built for scalability and great UX.",
      features: [
        "React Native / Flutter",
        "Offline First",
        "App Store / Play Store Ready",
        "Analytics & Crash Reporting",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "AI Solutions",
      subtitle: "Voice Agents & AI Integrations",
      description:
        "Integrate AI into your product: voice calling agents, chatbots, automation, and custom model integrations.",
      features: [
        "Voice/Phone Agents",
        "RAG & Chatbots",
        "Workflow Automation",
        "Third‑party AI APIs",
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass border-primary/30">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Web, Mobile</span> & AI Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We build high‑performance websites, cross‑platform mobile apps, and
            practical AI systems that move your business forward.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card border-0 hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 sm:p-8 relative">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 mb-4 sm:mb-0 sm:mr-4 self-start">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="glass"
                    onClick={scrollToContact}
                    className="group/btn w-full sm:w-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized for speed with 99+ PageSpeed scores",
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              description: "Enterprise-grade security and 99.9% uptime",
            },
            {
              icon: TrendingUp,
              title: "Growth Focused",
              description: "Built to scale with your business success",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card text-center group hover:scale-105 transition-all duration-300 p-6"
            >
              <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
