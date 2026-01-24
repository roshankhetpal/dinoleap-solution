import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Palette,
  Zap,
  Wrench,
  TrendingUp,
} from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Bella Vie – Modern Beauty Brand",
      category: "Web Development",
      description: "Marketing website with elegant UI and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite"],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
      color: "from-rose-500/20 to-pink-500/20",
      liveUrl: "https://bella-vie-preview.netlify.app/",
    },
    {
      title: "Fab Fit – Fitness & Lifestyle",
      category: "Web Development",
      description:
        "Landing experience focused on conversion and mobile performance.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      color: "from-indigo-500/20 to-purple-500/20",
      liveUrl: "https://fab-fit-pre.netlify.app/",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Modern e-commerce solution with advanced filtering, secure payments, and admin dashboard.",
      technologies: ["React", "TypeScript", "Stripe", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Restaurant Chain Website",
      category: "Web & Mobile",
      description:
        "Multi-location restaurant website with online ordering and companion mobile app.",
      technologies: ["Next.js", "Tailwind", "CMS", "React Native"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Tech Startup Landing",
      category: "UI/UX + Development",
      description:
        "High-converting landing page for B2B SaaS startup with interactive elements.",
      technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Healthcare Platform",
      category: "Full Stack Development",
      description:
        "Patient management system with appointment booking and telemedicine features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Real Estate Portal",
      category: "Web Development + Marketing",
      description:
        "Property listing platform with advanced search and social media integration.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Fashion E-Store",
      category: "E-Commerce + SMMA",
      description:
        "Luxury fashion store with AR try-on features and comprehensive social strategy.",
      technologies: ["Shopify", "React", "AR.js", "Instagram API"],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-40 left-4 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass border-primary/30">
            Our Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Projects That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Every project is crafted with precision, creativity, and a focus on
            achieving measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-0 hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-52 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="glass text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6 relative">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs glass border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="glass"
                      size="sm"
                      className="flex-1 group/btn"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // @ts-ignore
                        if (
                          e.nativeEvent &&
                          e.nativeEvent.stopImmediatePropagation
                        ) {
                          // @ts-ignore
                          e.nativeEvent.stopImmediatePropagation();
                        }
                        if (project.liveUrl) {
                          window.open(project.liveUrl, "_blank");
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      <span className="hidden sm:inline">View Live</span>
                      <span className="sm:hidden">Live</span>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass border-primary/20 px-3"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // @ts-ignore
                          if (
                            e.nativeEvent &&
                            e.nativeEvent.stopImmediatePropagation
                          ) {
                            // @ts-ignore
                            e.nativeEvent.stopImmediatePropagation();
                          }
                          window.open(project.githubUrl as string, "_blank");
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="glass-card max-w-4xl mx-auto mb-6 sm:mb-8 p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Industries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                  24h
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Avg Response Time
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss your vision and create something extraordinary
              together. Every great project starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="group w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                View All Work
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
            {[
              {
                icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                text: "Custom Design",
                gradient: "from-pink-500 via-rose-400 to-pink-600",
                shadow: "shadow-pink-500/20",
              },
              {
                icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                text: "Fast Delivery",
                gradient: "from-blue-500 via-cyan-400 to-blue-600",
                shadow: "shadow-cyan-500/20",
              },
              {
                icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                text: "Ongoing Support",
                gradient: "from-green-500 via-emerald-400 to-green-600",
                shadow: "shadow-emerald-500/20",
              },
              {
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                text: "Growth Focused",
                gradient: "from-amber-400 via-orange-300 to-amber-500",
                shadow: "shadow-amber-500/20",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`relative group px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${feature.shadow} shadow-lg hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}
                />
                <div className="flex items-center gap-3 relative z-10 text-white">
                  <span className="filter drop-shadow-md">{feature.icon}</span>
                  <span className="font-semibold tracking-wide text-sm sm:text-base">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
