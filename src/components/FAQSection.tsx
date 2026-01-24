import { useState } from "react";
import { ChevronDown } from "lucide-react";

// FAQ data
const faqData = [
  {
    id: "faq-1",
    question: "What services does DinoLeap offer?",
    answer:
      "We offer web development, mobile app development, AI solutions, UI/UX design, and digital marketing strategies tailored to your business needs."
  },
  {
    id: "faq-2",
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary based on complexity, but most websites are delivered within 2-4 weeks after requirements are finalized."
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer maintenance, updates, and support packages to keep your site running smoothly."
  },
  {
    id: "faq-4",
    question: "Can you help with branding and design?",
    answer:
      "Absolutely. Our team specializes in branding, logo design, and creating a cohesive visual identity for your business."
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or email, and we'll schedule a free consultation to discuss your project goals."
  }
];

// FAQ Item component
const FAQItem = ({ 
  faq, 
  isOpen, 
  toggleFAQ 
}: { 
  faq: typeof faqData[0]; 
  isOpen: boolean; 
  toggleFAQ: () => void;
}) => {
  // Prevent any event bubbling or default behavior
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFAQ();
  };

  return (
    <div className="mb-4">
      <div 
        className={`rounded-xl border border-primary/20 bg-background/80 shadow-lg transition-all duration-300 ${
          isOpen ? "ring-2 ring-primary/40" : ""
        }`}
      >
        {/* Question header */}
        <div 
          className="px-6 py-5 flex justify-between items-center cursor-pointer"
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {faq.question}
          </h3>
          <ChevronDown 
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
            size={20}
          />
        </div>
        
        {/* Answer content */}
        {isOpen && (
          <div className="px-6 pb-5 text-muted-foreground animate-fade-in">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main FAQ Section component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-white">Frequently Asked </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        
        <div>
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              toggleFAQ={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;