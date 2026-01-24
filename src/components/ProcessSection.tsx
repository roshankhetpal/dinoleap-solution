import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
} from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Discovery & Consultation",
      duration: "1-2 Days",
      description:
        "We start with an in-depth consultation to understand your business, goals, target audience, and project requirements.",
      deliverables: [
        "Project Brief",
        "Timeline & Milestones",
        "Technical Requirements",
        "Design Preferences",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      step: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      duration: "2-3 Days",
      description:
        "Our team develops a comprehensive strategy covering design, development approach, and marketing integration.",
      deliverables: [
        "Project Roadmap",
        "Technical Architecture",
        "Design System",
        "Content Strategy",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      step: "03",
      icon: Palette,
      title: "Design & Prototyping",
      duration: "5-7 Days",
      description:
        "We create stunning, user-centered designs that reflect your brand and provide exceptional user experience.",
      deliverables: [
        "Wireframes",
        "UI/UX Design",
        "Interactive Prototype",
        "Design Approval",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      step: "04",
      icon: Code,
      title: "Development & Integration",
      duration: "7-14 Days",
      description:
        "Our developers bring the designs to life using modern technologies, ensuring performance and scalability.",
      deliverables: [
        "Frontend Development",
        "Backend Integration",
        "CMS Setup",
        "API Connections",
      ],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      step: "05",
      icon: TestTube,
      title: "Testing & Optimization",
      duration: "2-3 Days",
      description:
        "Rigorous testing across devices and browsers, performance optimization, and security implementation.",
      deliverables: [
        "Quality Assurance",
        "Performance Testing",
        "Security Audit",
        "Bug Fixes",
      ],
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      step: "06",
      icon: Rocket,
      title: "Launch & Support",
      duration: "1-2 Days + Ongoing",
      description:
        "We handle the deployment process and provide ongoing support, training, and maintenance services.",
      deliverables: [
        "Site Deployment",
        "DNS Setup",
        "Training Session",
        "Support Documentation",
      ],
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We respect deadlines and deliver projects on schedule, every time.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "You're involved in every step, with regular updates and feedback sessions.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every decision is made with your business goals and ROI in mind.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass border-primary/30">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            How We <span className="text-gradient">Bring Ideas to Life</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our proven 6-step process ensures every project is delivered on
            time, within budget, and exceeds expectations. From concept to
            launch, we're with you every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {processSteps.map((step, index) => (
            <Card
              key={step.step}
              className={`glass-card border-0 hover:scale-[1.01] transition-all duration-500 overflow-hidden ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div
                  className={`lg:flex ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="lg:flex-1 p-8 relative">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl font-bold text-gradient">
                            {step.step}
                          </div>
                          <div className="p-3 rounded-xl bg-primary/10">
                            <step.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="ml-auto flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                          Deliverables
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable) => (
                            <div
                              key={deliverable}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Visual */}
                  <div className="lg:w-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gradient mb-2">
                        {step.step}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        Step {step.step}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Our Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyChooseUs.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-card border-0 text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and create a custom roadmap for your
              success. Every great project starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/919559910647?text=Hi! I would like to schedule a free consultation for my project.",
                    "_blank"
                  )
                }
              >
                Free Consultation
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Custom project roadmap</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No hidden costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
