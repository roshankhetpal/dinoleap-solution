import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Scale,
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 right-1/3 w-24 h-24 rounded-full bg-accent/10 blur-3xl" />

        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate("/");
            }}
            className="mb-8 hover:bg-white/5 flex items-center justify-center gap-2 cursor-pointer"
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 glass">
                <Scale className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear terms for our professional services. Your roadmap to a
              successful partnership.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Agreement */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Agreement to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using DinoLeap's services, you accept
                    and agree to be bound by these Terms of Service. If you do
                    not agree to abide by the above, please do not use our
                    services. These terms apply to all visitors, users, and
                    others who access or use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    DinoLeap provides comprehensive digital solutions to
                    help your business grow online. Our services include:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary">
                            Web Development
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Custom websites, web applications, and e-commerce
                            solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary">
                            UI/UX Design
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            User interface and experience design services
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary">
                            Digital Marketing
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            SEO, content marketing, and online advertising
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary">
                            Social Media Management
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Strategy, content creation, and community management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Client Responsibilities
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    To ensure successful project delivery, clients agree to:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Content & Materials
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          • Provide accurate and timely content, images, and
                          materials
                        </li>
                        <li>
                          • Ensure all provided content is original or properly
                          licensed
                        </li>
                        <li>
                          • Review and approve deliverables within agreed
                          timeframes
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Communication
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          • Respond to requests for information within 48 hours
                        </li>
                        <li>
                          • Designate a primary point of contact for the project
                        </li>
                        <li>• Participate in scheduled meetings and reviews</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Technical Requirements
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          • Provide necessary access to hosting, domains, and
                          platforms
                        </li>
                        <li>• Maintain current backups of existing systems</li>
                        <li>
                          • Ensure compliance with industry standards and
                          regulations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Project-Based Services
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• 50% deposit required to begin work</li>
                        <li>• Remaining balance due upon completion</li>
                        <li>• Payment terms: Net 15 days</li>
                        <li>• Late payments subject to 1.5% monthly fee</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Ongoing Services
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Monthly retainer due in advance</li>
                        <li>• Auto-renewal unless 30 days notice given</li>
                        <li>• Payment via invoice or automated billing</li>
                        <li>• Services suspended for non-payment</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <h3 className="font-semibold mb-2 text-accent">
                      Accepted Payment Methods
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bank transfer, UPI, credit cards, and digital wallets. All
                      payments processed securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Intellectual Property
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Client Ownership
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Upon full payment, clients receive ownership of
                        custom-developed websites, designs, and content created
                        specifically for their project. This includes source
                        code, design files, and documented processes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        DinoLeap Ownership
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We retain rights to our proprietary methodologies,
                        frameworks, and general business processes. We also
                        reserve the right to showcase completed work in our
                        portfolio and marketing materials.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Third-Party Components
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Projects may include third-party software, plugins, or
                        services subject to their respective licenses. Clients
                        are responsible for ongoing license compliance and fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Limitation of Liability
                  </h2>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      DinoLeap's total liability for any claims arising from
                      our services shall not exceed the total amount paid by the
                      client for the specific service in question.
                    </p>

                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <h3 className="font-semibold mb-2 text-amber-500">
                        Important Disclaimers
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• No guarantee of specific results or rankings</li>
                        <li>
                          • Third-party platform changes beyond our control
                        </li>
                        <li>
                          • Client responsible for data backups and security
                        </li>
                        <li>• Force majeure events exclude liability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        By Client
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• 30 days written notice for ongoing services</li>
                        <li>• Payment due for work completed to date</li>
                        <li>• Deliverables provided for paid milestones</li>
                        <li>• No refund for advance payments</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        By DinoLeap
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Immediate termination for non-payment</li>
                        <li>• Breach of terms or abusive behavior</li>
                        <li>• Illegal or unethical requests</li>
                        <li>• 30 days notice for other reasons</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">Questions About Terms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">DinoLeap</p>
                    <p className="text-sm text-muted-foreground">
                      Legal Department
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm">Email: hello@dinoleap.live</p>
                    <p className="text-sm text-muted-foreground">
                      Phone: +91 9559910647
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
