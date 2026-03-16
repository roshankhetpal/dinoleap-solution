import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Cookie,
  Settings,
  Eye,
  BarChart3,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CookiePolicy = () => {
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
                <Cookie className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your
              browsing experience.
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
            {/* What are Cookies */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device
                    when you visit our website. They help us provide you with a
                    better experience by remembering your preferences and
                    improving our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies like web beacons,
                    pixels, and local storage to enhance functionality, analyze
                    usage, and personalize your experience on DinoLeap's
                    website.
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6">
                    Types of Cookies We Use
                  </h2>

                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Shield className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-green-500">
                            Essential Cookies
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            These cookies are necessary for the website to
                            function properly. They cannot be disabled.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="text-sm">
                              <p className="font-medium mb-1">Examples:</p>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• Session management</li>
                                <li>• Security tokens</li>
                                <li>• Load balancing</li>
                              </ul>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium mb-1">Duration:</p>
                              <p className="text-muted-foreground">
                                Session or 24 hours
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <BarChart3 className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-blue-500">
                            Analytics Cookies
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Help us understand how visitors interact with our
                            website by collecting anonymous information.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="text-sm">
                              <p className="font-medium mb-1">Examples:</p>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• Google Analytics</li>
                                <li>• Page views tracking</li>
                                <li>• User behavior analysis</li>
                              </ul>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium mb-1">Duration:</p>
                              <p className="text-muted-foreground">
                                Up to 2 years
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Settings className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-purple-500">
                            Functional Cookies
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Enable enhanced functionality and personalization,
                            such as remembering your preferences.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="text-sm">
                              <p className="font-medium mb-1">Examples:</p>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• Language preferences</li>
                                <li>• Theme settings</li>
                                <li>• Form data</li>
                              </ul>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium mb-1">Duration:</p>
                              <p className="text-muted-foreground">
                                30 days to 1 year
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-2 rounded-lg bg-orange-500/20">
                          <Eye className="h-5 w-5 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-orange-500">
                            Marketing Cookies
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Used to track visitors across websites to display
                            relevant advertisements and measure campaign
                            effectiveness.
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="text-sm">
                              <p className="font-medium mb-1">Examples:</p>
                              <ul className="space-y-1 text-muted-foreground">
                                <li>• Social media pixels</li>
                                <li>• Remarketing tags</li>
                                <li>• Ad personalization</li>
                              </ul>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium mb-1">Duration:</p>
                              <p className="text-muted-foreground">
                                90 days to 2 years
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Third-Party Services
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We use trusted third-party services that may set their own
                    cookies. These help us provide better services and insights:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Google Analytics
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Website traffic and user behavior analysis
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Privacy Policy: google.com/policies/privacy
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Google Fonts
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Web font delivery service
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Privacy Policy: google.com/policies/privacy
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="font-semibold mb-2 text-primary">
                        Social Media
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        LinkedIn, Twitter, and other platform integrations
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Respective platform privacy policies apply
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Managing Your Cookie Preferences
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Browser Settings
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Most web browsers allow you to control cookies through
                        their settings. You can typically:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">View stored cookies</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">
                              Delete existing cookies
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">
                              Block future cookies
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">
                              Set cookie preferences
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <h3 className="font-semibold mb-2 text-amber-500">
                        Important Note
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Disabling certain cookies may affect website
                        functionality and your user experience. Essential
                        cookies cannot be disabled as they are necessary for the
                        site to work properly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Browser-Specific Instructions
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="font-medium mb-1">Chrome</h4>
                            <p className="text-xs text-muted-foreground">
                              Settings → Privacy and Security → Cookies
                            </p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="font-medium mb-1">Firefox</h4>
                            <p className="text-xs text-muted-foreground">
                              Options → Privacy & Security → Cookies
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="font-medium mb-1">Safari</h4>
                            <p className="text-xs text-muted-foreground">
                              Preferences → Privacy → Cookies and Website Data
                            </p>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <h4 className="font-medium mb-1">Edge</h4>
                            <p className="text-xs text-muted-foreground">
                              Settings → Privacy → Cookies and Site Permissions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent and Updates */}
            <div className="glass-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Consent & Policy Updates
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Your Consent
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        By using our website, you consent to our use of
                        essential cookies. For non-essential cookies, we will
                        ask for your explicit consent through our cookie banner.
                        You can withdraw your consent at any time by adjusting
                        your browser settings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">
                        Policy Updates
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may update this Cookie Policy from time to time to
                        reflect changes in our practices or legal requirements.
                        We will notify you of any significant changes by posting
                        the updated policy on our website with a new "Last
                        Updated" date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">
                Questions About Cookies
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Cookie className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">DinoLeap</p>
                    <p className="text-sm text-muted-foreground">
                      Privacy Team
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Cookie className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm">Email: hello@dinoleap.live</p>
                    <p className="text-sm text-muted-foreground">
                      Subject: Cookie Policy Inquiry
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

export default CookiePolicy;
