import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Quote,
  MessageCircle,
  Repeat2,
  Heart,
  Zap,
  Gem,
} from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mohammed A.",
      role: "Entrepreneur",
      location: "Dubai, UAE",
      content:
        "BrandBlossom built us a sleek, responsive website that attracted more clients immediately. The attention to detail and modern design exceeded our expectations.",
      rating: 5,
      avatar: "M",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily C.",
      role: "Marketing Head",
      location: "California, USA",
      content:
        "Their social media strategy helped our US business grow consistently. ROI increased by 300% within 3 months. Truly professional service!",
      rating: 5,
      avatar: "E",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "James W.",
      role: "Co-Founder",
      location: "London, UK",
      content:
        "Our redesign was elegant, smooth, and ahead of schedule. The team's technical expertise and communication throughout the project was outstanding.",
      rating: 5,
      avatar: "J",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Sneha V.",
      role: "Business Owner",
      location: "Mumbai, India",
      content:
        "Our e-commerce site now feels premium and loads instantly. Sales increased by 45% in the first month after launch. Highly recommended!",
      rating: 5,
      avatar: "S",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Rachel T.",
      role: "Director",
      location: "Singapore",
      content:
        "Thanks to BrandBlossom, our corporate website and social media presence are now world-class. The results speak for themselves.",
      rating: 5,
      avatar: "R",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  // Triple the testimonials for smooth infinite loop
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 0.5; // pixels per frame

  useEffect(() => {
    if (containerRef.current) {
      const measure = () => {
        const totalWidth = containerRef.current?.scrollWidth || 0;
        // Divide by 3 because we tripled the items
        setContentWidth(totalWidth / 3);
      };

      // Measure immediately and after a short delay
      measure();
      const timer = setTimeout(measure, 100);

      window.addEventListener("resize", measure);
      return () => {
        window.removeEventListener("resize", measure);
        clearTimeout(timer);
      };
    }
  }, [testimonials]);

  useAnimationFrame(() => {
    if (!isDragging && contentWidth > 0) {
      x.set(x.get() - speed);
    }
  });

  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth > 0) {
      if (latest <= -contentWidth) {
        x.set(latest + contentWidth);
      } else if (latest > 0) {
        x.set(latest - contentWidth);
      }
    }
  });

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass border-primary/30">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Here's what business owners and
            entrepreneurs worldwide say about working with BrandBlossom.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="glass-card text-center hover:scale-105 transition-transform duration-300 p-4">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
              4.9/5
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Average Rating
            </div>
          </div>
          <div className="glass-card text-center hover:scale-105 transition-transform duration-300 p-4">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
              50+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Happy Clients
            </div>
          </div>
          <div className="glass-card text-center hover:scale-105 transition-transform duration-300 p-4">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Project Success
            </div>
          </div>
          <div className="glass-card text-center hover:scale-105 transition-transform duration-300 p-4">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
              24h
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Avg Response
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Draggable Carousel */}
      <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          ref={containerRef}
          className="flex gap-4 md:gap-6 w-fit pl-4"
          style={{ x }}
          drag="x"
          dragConstraints={{ top: 0, bottom: 0 }}
          // dragElastic={0.05}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
            >
              <div className="h-full p-1">
                <Card className="glass-card border-0 h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 select-none">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardContent className="p-6 sm:p-8 relative h-full flex flex-col">
                    {/* Large Quote Icon */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow mb-6">
                      <p className="text-base text-muted-foreground mb-4 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary font-medium text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Tweet-style interactions */}
                    <div className="flex items-center space-x-6 mt-6 text-muted-foreground border-t border-border/50 pt-4">
                      <MessageCircle className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
                      <Repeat2 className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
                      <Heart className="h-4 w-4 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* CTA */}
        <div className="text-center animate-fade-in-up mt-12 sm:mt-16">
          <div className="glass-card max-w-2xl mx-auto relative overflow-hidden p-6 sm:p-8">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl transform translate-x-8 -translate-y-8" />

            <div className="relative">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Ready to Join Our{" "}
                <span className="text-gradient">Success Stories?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                Let's create something amazing together. Your success story
                could be next!
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
                {[
                  {
                    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                    text: "Fast Delivery",
                    gradient: "from-blue-500 via-cyan-400 to-blue-600",
                    shadow: "shadow-cyan-500/20",
                  },
                  {
                    icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />,
                    text: "Premium Quality",
                    gradient: "from-purple-500 via-pink-400 to-purple-600",
                    shadow: "shadow-purple-500/20",
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
                      <span className="filter drop-shadow-md">
                        {feature.icon}
                      </span>
                      <span className="font-semibold tracking-wide text-sm sm:text-base">
                        {feature.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
