import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you provide the hardware components?",
    answer: "Yes, we provide full physical kits including all necessary sensors, microcontrollers, and custom-fabricated mechanical parts along with our blueprints. Everything is tested and verified before shipping."
  },
  {
    question: "Is the documentation university-compliant?",
    answer: "Absolutely. Our documentation is formatted to meet strict IEEE and university standards. It comes complete with circuit diagrams, algorithmic flowcharts, and the underlying theoretical background."
  },
  {
    question: "Can I request a custom feature?",
    answer: "Yes! Our engineering team can accommodate custom feature requests during the Customization phase. Simply discuss your specific requirements during your free initial consultation."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item open

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      className="responsive-section" 
      style={{ 
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px"
      }}
    >
      {/* Ambient Glow Effects */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      
      {/* Subtle Grid Pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`, pointerEvents: "none" }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{ 
            display: "inline-flex", alignItems: "center", gap: "8px",
            textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.75rem", 
            color: "#6c2bd9", fontWeight: 700, marginBottom: "16px"
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6c2bd9", boxShadow: "0 0 10px #6c2bd9" }} />
            Support & Knowledge
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Frequently Asked <span style={{ background: "linear-gradient(135deg, #6c2bd9 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Questions</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", fontWeight: 400, maxWidth: "500px", margin: "0 auto" }}>
            Everything you need to know about our engineering services, hardware kits, and support processes.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  background: isActive ? "rgba(139, 92, 246, 0.05)" : "rgba(0, 0, 0, 0.02)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: `1px solid ${isActive ? "rgba(139, 92, 246, 0.4)" : "rgba(0, 0, 0, 0.08)"}`,
                  boxShadow: isActive ? "0 20px 40px -10px rgba(139, 92, 246, 0.15)" : "none",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 32px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: isActive ? "#0f172a" : "#475569",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => { if(!isActive) e.currentTarget.style.color = "#0f172a" }}
                  onMouseLeave={(e) => { if(!isActive) e.currentTarget.style.color = "#475569" }}
                >
                  <span style={{ paddingRight: "16px" }}>{faq.question}</span>
                  
                  {/* Animated Morphing Icon */}
                  <motion.div
                    animate={{ rotate: isActive ? 135 : 0, backgroundColor: isActive ? "#6c2bd9" : "transparent" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      border: `1px solid ${isActive ? "#6c2bd9" : "rgba(0,0,0,0.15)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isActive ? "white" : "#64748b",
                      flexShrink: 0
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div style={{ 
                        padding: "0 32px 32px 32px", 
                        color: "#64748b", 
                        lineHeight: 1.7, 
                        fontSize: "0.95rem" 
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Active Neon Accent Line at the bottom */}
                {isActive && (
                  <motion.div 
                    layoutId="activeFaqAccent"
                    style={{ height: "3px", width: "100%", background: "linear-gradient(90deg, #6c2bd9, #38bdf8)" }} 
                  />
                )}
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}