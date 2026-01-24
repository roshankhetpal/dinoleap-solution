import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Send,
  Phone,
  MessageSquare,
  Linkedin,
  Twitter,
  Globe,
  Clock,
  MapPin,
} from "lucide-react";
import successSound from "@/audio/level-up-191997.mp3";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });

  // Function to play success sound
  const playSuccessSound = () => {
    try {
      const audio = new Audio(successSound);
      audio.volume = 0.5; // Set volume to 50%
      audio.play().catch(console.error);
    } catch (error) {
      console.error("Error playing success sound:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const params = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, params, { publicKey });

      // Play success sound
      playSuccessSound();

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We’ll reply within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Couldn’t send message",
        description: "Please try again in a minute or email us directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9559910647",
      link: "tel:+919559910647",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919559910647",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with us",
      link: "https://linkedin.com/in/roshan-khetpal",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "@dinoleap",
      link: "https://twitter.com/dinoleap",
    },
  ];

  return (
    <section
      id="contact"
      className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full px-0">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up px-0">
          <Badge
            variant="outline"
            className="mb-3 sm:mb-4 glass border-primary/30"
          >
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 px-0">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-0">
            Ready to transform your digital presence? Get in touch and let's
            discuss how we can help your business blossom online.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 w-full px-0">
          {/* Contact Form */}
          <div className="animate-fade-in-up w-full max-w-full">
            <Card className="glass-card border-0 w-full max-w-full overflow-hidden">
              <CardContent className="p-3 sm:p-4 lg:p-6 xl:p-8 w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
                  Send us a message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4 lg:space-y-6 w-full"
                  autoComplete="off"
                >
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-white/20 w-full text-sm sm:text-base"
                        placeholder="John Doe"
                        autoComplete="off"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-white/20 w-full text-sm sm:text-base"
                        placeholder="john@example.com"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="glass border-white/20 w-full text-sm sm:text-base"
                        placeholder="+1 (555) 123-4567"
                        autoComplete="off"
                        pattern="[0-9+\-\s\(\)]*"
                        onInput={(e) => {
                          // Only allow numbers, spaces, parentheses, dashes, and plus sign
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(
                            /[^0-9+\-\s\(\)]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="businessName"
                        className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                      >
                        Business Name
                      </label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="glass border-white/20 w-full text-sm sm:text-base"
                        placeholder="Your Company"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="glass border-white/20 resize-none w-full text-sm sm:text-base"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className={`w-full group text-sm sm:text-base transition-all duration-300 ${isSending ? "animate-pulse" : ""
                      }`}
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    <Send
                      className={`ml-2 h-4 w-4 transition-all duration-300 ${isSending
                          ? "scale-110 opacity-70"
                          : "group-hover:translate-x-1 group-hover:scale-110"
                        }`}
                    />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-full">
            <Card className="glass-card border-0 w-full max-w-full overflow-hidden">
              <CardContent className="p-3 sm:p-4 lg:p-6 xl:p-8 w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl glass hover:bg-white/5 transition-all duration-300 group w-full max-w-full"
                    >
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <p className="font-medium text-xs sm:text-sm lg:text-base">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors text-xs sm:text-sm truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 w-full max-w-full overflow-hidden">
              <CardContent className="p-3 sm:p-4 lg:p-6 xl:p-8 w-full">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
                  Why Choose DinoLeap?
                </h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 w-full">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      24-hour response guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Serving clients worldwide
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Based in India, Global reach
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
