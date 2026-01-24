import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, MessageSquare, ExternalLink } from "lucide-react";
import Logo from "@/images/logo/DinoLeap-logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [navigationLocked, setNavigationLocked] = useState(false);
  const [lastClickedSection, setLastClickedSection] = useState("");
  // A token to identify the latest scroll request so new clicks cancel older ones
  const scrollRequestId = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (!isMainPage || isScrolling) return; // Pause while programmatic scrolling

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update during programmatic scrolling
        if (isScrolling) return;

        // Debounce the updates even more
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          // Still not navigating
          if (isScrolling) return;

          // Find the section with the largest intersection ratio
          let maxRatio = 0;
          let activeEntry = null;

          entries.forEach((entry) => {
            // Check if intersecting and has a better ratio than current max
            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= maxRatio
            ) {
              maxRatio = entry.intersectionRatio;
              activeEntry = entry;
            }
          });

          if (activeEntry) {
            const sectionId = activeEntry.target.id;

            // Map section IDs to navigation items
            const sectionMap: { [key: string]: string } = {
              hero: "home",
              about: "about",
              services: "services",
              portfolio: "portfolio",
              process: "process",
              testimonials: "testimonials",
              contact: "contact",
            };

            const mappedSection = sectionMap[sectionId] || sectionId;
            setActiveSection(mappedSection);
          }
        }, 200);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        rootMargin: "-10% 0px -45% 0px",
      }
    );

    // Observe all sections with a delay to ensure DOM is ready
    setTimeout(() => {
      if (!isScrolling) {
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));
      }
    }, 200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isMainPage, isScrolling]);

  const navigationItems = [
    { name: "Home", href: "#hero", section: "home" },
    { name: "About", href: "#about", section: "about" },
    { name: "Services", href: "#services", section: "services" },
    { name: "Portfolio", href: "#portfolio", section: "portfolio" },
    { name: "Process", href: "#process", section: "process" },
    { name: "Testimonials", href: "#testimonials", section: "testimonials" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  const scrollToSection = (href: string, event?: React.MouseEvent) => {
    // Prevent ALL event propagation IMMEDIATELY
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      // Also prevent double-click and other events
      event.nativeEvent.stopImmediatePropagation();
    }

    // Extract section name early for checks
    const sectionName = href.replace("#", "");
    const sectionMap: { [key: string]: string } = {
      hero: "home",
      about: "about",
      services: "services",
      portfolio: "portfolio",
      process: "process",
      testimonials: "testimonials",
      contact: "contact",
    };
    const mappedSection = sectionMap[sectionName] || sectionName;

    // If already on this section and not moving, ignore redundant click
    if (mappedSection === activeSection && !isScrolling && !navigationLocked) {
      return;
    }
    // Short debounce to ignore accidental double taps
    const now = Date.now();
    if (now - lastClickTime < 250) {
      return;
    }

    // New click overrides any current scroll
    setLastClickTime(now);
    const myRequest = ++scrollRequestId.current;

    // Set active section immediately and disable observer
    setActiveSection(mappedSection);
    setIsScrolling(true);

    // Custom smooth scroll with easing
    const smoothScrollTo = (startY: number, targetY: number, duration: number = 1000) => {
      const difference = targetY - startY;
      const startTime = performance.now();

      // Temporarily disable CSS smooth scroll to prevent conflicts
      const html = document.documentElement;
      const originalScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';

      // Ease-in-out cubic for very smooth animation
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        // If a newer click started, abort this animation
        if (myRequest !== scrollRequestId.current) {
          html.style.scrollBehavior = originalScrollBehavior;
          return;
        }

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + difference * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          // Restore CSS scroll behavior
          html.style.scrollBehavior = originalScrollBehavior;
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    // Capture current scroll position IMMEDIATELY before any async operations
    const currentScrollY = window.scrollY;

    if (isMainPage) {
      // On main page, scroll to section using precise offset
      const element = document.querySelector(href) as HTMLElement | null;
      const header = document.querySelector("nav") as HTMLElement | null;
      if (element) {
        const headerHeight = header ? header.offsetHeight : 0;
        const rect = element.getBoundingClientRect();
        // Target Y relative to document top minus header height and a tiny padding
        const targetY = Math.max(
          0,
          currentScrollY + rect.top - headerHeight - 8
        );
        smoothScrollTo(currentScrollY, targetY, 1000);
      } else {
        console.error("Element not found for:", href);
        setIsScrolling(false);
      }
    } else {
      // On other pages, navigate to main page with hash
      navigate(`/${href}`);
      setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (isMainPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-0" : "py-0.5"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div
          className={`glass backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-0.5 sm:py-1.5 lg:py-2 transition-all duration-300 ${scrolled ? "shadow-2xl shadow-primary/10" : "shadow-lg shadow-primary/5"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Container for left alignment */}
            <div className="flex items-center min-w-[5rem] h-[3rem]">
              <a href="/" className="flex items-center justify-center w-[5rem] h-[3rem] sm:w-[7rem] sm:h-[3.5rem] lg:w-[8rem] lg:h-[4rem]" tabIndex={0} aria-label="Go to home">
                <img
                  src={Logo}
                  alt="Logo"
                  className="object-contain w-full h-full"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.section;
                return (
                  <button
                    key={item.name}
                    onClick={(e) => scrollToSection(item.href, e)}
                    onMouseDown={(e) => e.preventDefault()}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-primary relative group ${isActive ? "text-primary bg-white/5" : ""
                      }`}
                  >
                    {item.name}
                    <div
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 ${isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="glass"
                size="sm"
                onClick={() => window.open("tel:+919559910647", "_blank")}
                className="group"
              >
                <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                Call Now
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                <MessageSquare className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 sm:p-3 rounded-lg glass hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                  <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 sm:mt-4 glass backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden animate-fade-in">
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.section;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-primary ${isActive
                        ? "bg-white/10 text-primary border border-primary/20"
                        : ""
                        }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="border-t border-white/10 pt-4 space-y-3">
                <Button
                  variant="glass"
                  className="w-full justify-center group"
                  onClick={() => {
                    window.open("tel:+919559910647", "_blank");
                    setIsOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                  Call +91 9559910647
                </Button>
                <Button
                  variant="hero"
                  className="w-full justify-center group"
                  onClick={() => scrollToSection("#contact")}
                >
                  <MessageSquare className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get Free Quote
                </Button>
              </div>

              {/* Quick Links */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {/* <Badge
                    variant="outline"
                    className="glass border-primary/20 text-xs"
                  >
                    🚀 Fast Delivery
                  </Badge>
                  <Badge
                    variant="outline"
                    className="glass border-primary/20 text-xs"
                  >
                    💎 Premium Quality
                  </Badge>
                  <Badge
                    variant="outline"
                    className="glass border-primary/20 text-xs"
                  >
                    🌟 5-Star Service
                  </Badge> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;