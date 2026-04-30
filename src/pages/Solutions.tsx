import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    num: "1",
    title: "Choose Domain",
    desc: "Pick your engineering field of interest.",
    details: [
      "Artificial Intelligence & Machine Learning",
      "Embedded Systems & IoT",
      "VLSI & Chip Design",
      "Web & Mobile Application Development",
      "Power Electronics & Drives",
      "Robotics & Automation"
    ]
  },
  {
    num: "2",
    title: "Select Project",
    desc: "Browse through 500+ curated project ideas.",
    details: [
      "Extensive library of 500+ pre-validated project titles.",
      "Filter by technology stack or specific engineering branch.",
      "Access previous year execution abstracts.",
      "Consult with our experts to finalize the best fit for your academic requirements."
    ]
  },
  {
    num: "3",
    title: "Customize",
    desc: "Add your unique features or requirements.",
    details: [
      "Tailor hardware specifications to fit your budget.",
      "Add custom software features or algorithms.",
      "Select desired programming languages (Python, C++, JS, etc.).",
      "Incorporate specific sensors or modern modules into existing conceptual designs."
    ]
  },
  {
    num: "4",
    title: "Delivery",
    desc: "Get your project kit with full support.",
    details: [
      "Secure delivery of complete hardware prototype kits.",
      "Full source code access with setup documentation.",
      "Live demonstration and explanation sessions.",
      "Plagiarism-free documentation and baseline PPTs provided.",
      "30-day technical support post-delivery."
    ]
  },
];

export default function Solutions() {
  const [activeStep, setActiveStep] = useState<typeof steps[0] | null>(null);

  // Close modal if clicked outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      setActiveStep(null);
    }
  };

  return (
    <section id="how-it-works" className="responsive-section" style={{ background: "#f5f3ff", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center", position: "relative" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "80px" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#6c2bd9",
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}
          >
            How It Works
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", fontWeight: 500 }}>
            Seamless transition from idea to submission
          </p>
        </motion.div>

        <div
          className="solutions-grid-container" // Hook this into index.css later if needed
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            position: "relative",
          }}
        >
          {/* Desktop continuous moving arrow */}
          {/* We use a CSS class to handle hiding this on mobile. We'll add this class to index.css if not there, or just use media query. */}
          <style>{`
              @media (max-width: 1024px) {
                .desktop-moving-arrow { display: none !important; }
                .mobile-moving-arrow { display: block !important; }
              }
              @media (min-width: 1025px) {
                .mobile-moving-arrow { display: none !important; }
              }
            `}</style>

          {/* Mobile continuous moving arrow */}
          <motion.div
            className="mobile-moving-arrow"
            style={{
              position: "absolute",
              top: "46px", 
              bottom: "100px", // Roughly the center of the last badge
              left: "50%",
              width: "2px",
              marginLeft: "-1px",
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            {/* Background dashed line */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "100%", background: "repeating-linear-gradient(180deg, #cbd5e1 0px, #cbd5e1 8px, transparent 8px, transparent 16px)" }} />

            {/* Growing Green Line Segment */}
            <motion.div
              animate={{
                height: ["0%", "33.33%", "66.66%", "100%", "0%"],
                opacity: [1, 1, 1, 1, 0] // Start visible, fade out at end
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.33, 0.66, 0.95, 1]
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                background: "#10b981", // Emerald green
                boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" // Green glow
              }}
            />

            {/* The animating arrow */}
            <motion.div
              animate={{
                top: ["0%", "33.33%", "66.66%", "100%", "0%"],
                opacity: [1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.33, 0.66, 0.95, 1]
              }}
              style={{
                position: "absolute",
                left: "50%", 
                marginLeft: "-15px", // Center the 30px SVG
                marginTop: "-15px", // Vertically center on the mark
                color: "#10b981" 
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(90deg)" }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            className="desktop-moving-arrow"
            style={{
              position: "absolute",
              top: "46px", // Vertically aligned with the center of the 60px badges (30px) + the container padding (16px)
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            {/* Background dashed line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "repeating-linear-gradient(90deg, #cbd5e1 0px, #cbd5e1 8px, transparent 8px, transparent 16px)" }} />

            {/* Growing Green Line Segment */}
            <motion.div
              animate={{
                width: ["0%", "33.33%", "66.66%", "100%", "0%"],
                opacity: [1, 1, 1, 1, 0] // Start visible, fade out at end
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.33, 0.66, 0.95, 1]
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: "#10b981", // Emerald green
                boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" // Green glow
              }}
            />

            {/* The animating arrow */}
            <motion.div
              animate={{
                left: ["0%", "33.33%", "66.66%", "100%", "0%"],
                opacity: [1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.33, 0.66, 0.95, 1]
              }}
              style={{
                position: "absolute",
                top: "-15px", // Center the 30px SVG
                marginLeft: "-15px",
                color: "#10b981" // Match the green line
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </motion.div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveStep(step)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                cursor: "pointer",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              {/* Purple number badge */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "24px",
                  boxShadow: "0 10px 25px rgba(108, 43, 217, 0.3)",
                  border: "4px solid #f5f3ff", // to cut out the dashed line behind
                }}
              >
                {step.num}
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", marginBottom: "12px", background: "#f5f3ff", padding: "0 8px" }}>
                {step.title}
              </h3>

              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, maxWidth: "220px", background: "#f5f3ff", padding: "0 8px" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Overlay using AnimatePresence */}
      <AnimatePresence>
        {activeStep && (
          <motion.div
            id="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(8px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "40px",
                maxWidth: "500px",
                width: "100%",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                position: "relative",
                textAlign: "left"
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveStep(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(100, 116, 139, 0.1)",
                  border: "none",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#64748b",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(100, 116, 139, 0.2)"; e.currentTarget.style.color = "#1e293b"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(100, 116, 139, 0.1)"; e.currentTarget.style.color = "#64748b"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}>
                  {activeStep.num}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", margin: 0 }}>
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {activeStep.details.map((detail, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "12px", color: "#475569", fontSize: "1rem", lineHeight: 1.5 }}>
                    <svg style={{ flexShrink: 0, marginTop: "4px" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveStep(null)}
                style={{
                  marginTop: "32px",
                  width: "100%",
                  padding: "14px",
                  background: "#f1f5f9",
                  color: "#475569",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "#e2e8f0"}
                onMouseOut={(e) => e.currentTarget.style.background = "#f1f5f9"}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
