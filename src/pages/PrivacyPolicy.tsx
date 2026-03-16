import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
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
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and
              protect your data.
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
            {/* Introduction */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    DinoLeap ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you visit our website or use our services. Please read this
                    privacy policy carefully.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Information We Collect
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>
                            Name and contact information (email, phone number)
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Business information and requirements</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Project specifications and preferences</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Communication history and feedback</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Automatically Collected Information
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>IP address and browser information</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Device and usage analytics</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Website navigation patterns</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>Cookies and similar technologies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    How We Use Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">
                        Service Delivery
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Provide web development services</li>
                        <li>• Execute digital marketing campaigns</li>
                        <li>• Deliver UI/UX design projects</li>
                        <li>• Manage social media strategies</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">
                        Communication
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Respond to inquiries and support</li>
                        <li>• Send project updates and reports</li>
                        <li>• Share relevant industry insights</li>
                        <li>• Provide customer service</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">
                        Improvement
                      </h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Enhance our service offerings</li>
                        <li>• Optimize website performance</li>
                        <li>• Develop new features</li>
                        <li>• Analyze user preferences</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">Legal</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Comply with legal obligations</li>
                        <li>• Protect our rights and interests</li>
                        <li>• Prevent fraud and abuse</li>
                        <li>• Enforce our terms of service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Data Protection & Security
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Encryption</h3>
                      <p className="text-sm text-muted-foreground">
                        Data encrypted in transit and at rest
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Access Control</h3>
                      <p className="text-sm text-muted-foreground">
                        Limited access on need-to-know basis
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Regular Backups</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure data backup and recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You have certain rights regarding your personal data.
                    Contact us to exercise these rights:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Access & Portability
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Request a copy of your personal data
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Correction
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Update or correct inaccurate information
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Deletion
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Request deletion of your data
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Opt-out
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Withdraw consent for data processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">DinoLeap</p>
                    <p className="text-sm text-muted-foreground">
                      Digital Growth Agency
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
                      Privacy Officer: Roshan Khetpal
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

export default PrivacyPolicy;
