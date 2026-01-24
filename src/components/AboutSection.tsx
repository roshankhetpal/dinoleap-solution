import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Cutting-edge development using the latest technologies and best practices.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Lightning-fast websites optimized for speed, SEO, and user experience.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships, not just websites.",
    },
    {
      icon: Target,
      title: "Growth Focused",
      description:
        "Every project is designed to drive measurable business growth and conversions.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass border-primary/30">
            About BrandBlossom
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Building <span className="text-gradient">Web, Mobile</span> & AI
            Products
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            BrandBlossom crafts high‑performance websites, cross‑platform mobile
            applications, and practical AI solutions like voice calling agents
            and intelligent integrations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              At BrandBlossom, we believe your brand deserves to shine. We
              combine technical expertise with creative vision to build digital
              experiences that not only look stunning but drive real business
              results.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              We focus on shipping reliable software—fast websites, robust
              mobile apps, and AI that actually helps your users.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge variant="secondary" className="glass text-xs sm:text-sm">
                Frontend Development
              </Badge>
              <Badge variant="secondary" className="glass text-xs sm:text-sm">
                Mobile App Development
              </Badge>
              <Badge variant="secondary" className="glass text-xs sm:text-sm">
                UI/UX Design
              </Badge>
              <Badge variant="secondary" className="glass text-xs sm:text-sm">
                AI Integrations
              </Badge>
              <Badge variant="secondary" className="glass text-xs sm:text-sm">
                Voice Agents
              </Badge>
            </div>
          </div>

          <div className="glass-card animate-fade-in-up p-6 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient">
              Meet Our Founder
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-base sm:text-lg">
                  Roshan Khetpal
                </h5>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Frontend Developer • SMMA Specialist
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                "I'm passionate about creating digital experiences that make a
                difference. Every line of code, every design decision, and every
                marketing strategy is crafted with your success in mind."
              </p>
              <div className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>•</span>
                <span>Technical Writer & Open-Source Enthusiast</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="glass-card border-0 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <value.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
