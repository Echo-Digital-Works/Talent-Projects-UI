import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time project support",
    desc: "24/7 dedicated technical assistance for your critical deployments.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="10" />
         <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: "Comprehensive Documentation",
    desc: "Industrial-grade schematics, wiring diagrams, and setup guides.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
         <polyline points="14 2 14 8 20 8" />
         <line x1="16" y1="13" x2="8" y2="13" />
         <line x1="16" y1="17" x2="8" y2="17" />
         <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "Source code provided",
    desc: "Fully commented, production-ready codebase for all hardware.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
         <polyline points="16 18 22 12 16 6" />
         <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: "Live demo guidance",
    desc: "One-on-one virtual walkthroughs to ensure perfect execution.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
         <line x1="8" y1="21" x2="16" y2="21" />
         <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } }
};

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .expertise-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .expertise-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 0, 0, 0.1);
        }
        .orbit-ring-solid {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(139, 92, 246, 0.3);
        }
      `}</style>

      <section style={{ 
        background: "#f5f3ff",
        color: "#0f172a",
        position: "relative",
        overflow: "hidden",
        padding: "120px 20px"
      }}>
        {/* Ambient Breathing Background Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "0%", left: "-10%", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)", pointerEvents: "none" }} 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 60%)", pointerEvents: "none" }} 
        />
        
        <div className="expertise-layout" style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          
          {/* Left Content - Typography & Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.span 
              variants={fadeRight}
              style={{ display: "inline-block", color: "#6c2bd9", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "16px" }}
            >
              The Talent Advantage
            </motion.span>
            
            <motion.h2 
              variants={fadeRight}
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}
            >
              Why Choose Our<br/>
              <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Expertise?
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeRight}
              style={{ color: "#64748b", fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.6, marginBottom: "48px", maxWidth: "500px" }}
            >
              We don't just sell components; we provide a full-spectrum
              engineering ecosystem to ensure your project's success from concept to execution.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeRight}
                  whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(139,92,246,0.05)", borderColor: "rgba(139, 92, 246, 0.3)" }}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "20px",
                    background: "rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "20px 24px",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    cursor: "default",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "16px", 
                    background: "linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%)", 
                    color: "#e879f9",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: "inset 0 0 12px rgba(139,92,246,0.1)",
                    flexShrink: 0
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.4 }}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Abstract Animated "System Core" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div style={{ 
              width: "100%", 
              maxWidth: "520px", 
              aspectRatio: "1 / 1", 
              background: "linear-gradient(145deg, rgba(139,92,246,0.05) 0%, rgba(0,0,0,0.02) 100%)", 
              borderRadius: "40px",
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(20px)"
            }}>
              
              {/* Dynamic Grid Background inside the glass */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

              {/* Animated Telemetry Rings */}
              <motion.div className="orbit-ring" style={{ width: "85%", height: "85%" }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
              <motion.div className="orbit-ring-solid" style={{ width: "65%", height: "65%" }} animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
              <motion.div className="orbit-ring" style={{ width: "45%", height: "45%", borderStyle: "dotted" }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

              {/* Center Pulsing Core */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 20px #c026d3", "0 0 60px #c026d3", "0 0 20px #c026d3"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: "100px", height: "100px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #a78bfa 0%, #c026d3 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", zIndex: 10
                }}
              >
                <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>

              {/* Floating Data Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "15%", left: "10%", background: "rgba(255,255,255,0.9)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(139, 92, 246, 0.2)", display: "flex", alignItems: "center", gap: "8px", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
              >
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0f172a", letterSpacing: "0.05em" }}>SYSTEM ONLINE</span>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: "20%", right: "5%", background: "rgba(255,255,255,0.9)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(217, 70, 239, 0.2)", display: "flex", alignItems: "center", gap: "8px", backdropFilter: "blur(10px)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
              >
                <svg width="14" height="14" fill="none" stroke="#f472b6" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0f172a", letterSpacing: "0.05em" }}>100% TESTED</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}