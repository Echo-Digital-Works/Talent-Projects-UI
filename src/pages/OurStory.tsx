import { motion } from "framer-motion";
import { useState, useRef } from "react";

// --- Enhanced Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpSpring = {
  hidden: { opacity: 0, y: 75, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 70, damping: 15, mass: 1 } 
  },
};

const ambientGlowAnimation = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.3, 0.8, 0.3],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
  }
};

// floatingIcons and pulseRing removed (unused)

export default function OurStory() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef(null);

  return (
    <>
      {/* This style block controls the grid and perfectly syncs 
        the mobile single-column stack with the visual re-ordering. 
      */}
      <style>{`
        .ecosystem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px; /* Reduced gap */
          align-items: stretch;
        }
        @media (max-width: 992px) {
          .ecosystem-grid {
            grid-template-columns: 1fr;
          }
          .mobile-swap-down { order: 4; }
          .mobile-swap-up { order: 3; }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="our-story"
        style={{
          background: "radial-gradient(circle at 0% 0%, #f8faff 0%, #fafcff 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "100px 20px",
        }}
      >
        {/* Ambient Background Glows */}
        <motion.div 
          variants={ambientGlowAnimation} 
          animate="animate"
          style={{ 
            position: "absolute", 
            top: "-20%", 
            left: "-10%", 
            width: "60vw", 
            height: "60vw", 
            background: "radial-gradient(circle, rgba(108, 43, 217, 0.08) 0%, rgba(108, 43, 217, 0.02) 50%, transparent 70%)", 
            filter: "blur(100px)", 
            zIndex: 0, 
            pointerEvents: "none" 
          }} 
        />
        <motion.div 
          variants={ambientGlowAnimation} 
          animate="animate" 
          transition={{ delay: 4 }}
          style={{ 
            position: "absolute", 
            bottom: "-20%", 
            right: "-10%", 
            width: "60vw", 
            height: "60vw", 
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 50%, transparent 70%)", 
            filter: "blur(100px)", 
            zIndex: 0, 
            pointerEvents: "none" 
          }} 
        />
        
        {/* Animated Grid Pattern Overlay */}
        <motion.div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236c2bd9' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            opacity: 0.5,
            pointerEvents: "none"
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", marginBottom: "80px", position: "relative" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ 
                textTransform: "uppercase", 
                letterSpacing: "0.3em", 
                fontSize: "0.85rem", 
                background: "linear-gradient(135deg, #6c2bd9 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 800,
                display: "inline-block"
              }}
            >
              Our Architecture
            </motion.span>
            
            <motion.h2 
              style={{ 
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)", 
                fontWeight: 800, 
                color: "#0f172a", 
                letterSpacing: "-0.04em", 
                marginTop: "16px",
                lineHeight: 1.1
              }}
            >
              The{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #6c2bd9 0%, #06b6d4 100%)", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block"
              }}>
                Ecosystem
                <motion.div 
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ 
                    position: "absolute", 
                    bottom: -10, 
                    left: 0, 
                    right: 0, 
                    height: 3, 
                    background: "linear-gradient(90deg, transparent, #6c2bd9, #06b6d4, transparent)",
                    transformOrigin: "left"
                  }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ 
                color: "#64748b", 
                fontSize: "1.1rem", 
                marginTop: "24px", 
                maxWidth: "650px", 
                margin: "24px auto 0", 
                lineHeight: 1.7 
              }}
            >
              Bridging the gap between theoretical learning and industrial application through cutting-edge design and engineering.
            </motion.p>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              style={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #6c2bd9, #06b6d4)",
                borderRadius: 2,
                margin: "30px auto 0"
              }}
            />
          </motion.div>

          {/* Staggered Grid Container */}
          <motion.div 
            className="ecosystem-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Row 1, Col 1: Echo Digital Works Logo */}
            <motion.div 
              variants={fadeUpSpring} 
              style={{ 
                position: "relative", 
                cursor: "pointer", 
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px"
              }} 
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard("echo")}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div style={{ position: "relative" }}>
                {/* Circular Card */}
                <div style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: hoveredCard === "echo" 
                    ? "0 30px 60px -15px rgba(108, 43, 217, 0.4)" 
                    : "0 20px 40px -10px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden"
                }}>
                  <img 
                    src="/echo-black-logo.png" 
                    alt="Echo Digital Works Logo" 
                    style={{ 
                      width: "75%", 
                      height: "75%", 
                      objectFit: "contain",
                    }} 
                  />
                </div>

              {/* Social Media Pill */}
              <motion.div 
                initial={false}
                animate={{
                  left: hoveredCard === "echo" ? "100%" : "50%",
                  x: hoveredCard === "echo" ? "calc(-100% - 12px)" : "-50%",
                  bottom: hoveredCard === "echo" ? 0 : -20, 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  position: "absolute", 
                  background: "rgba(255, 255, 255, 0.95)", 
                  backdropFilter: "blur(24px)",
                  padding: "12px 24px",
                  borderRadius: "100px",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  display: "flex", 
                  gap: "20px",
                  border: "1px solid rgba(255,255,255,1)",
                  zIndex: 10
              }}>
                 {["linkedin", "youtube", "instagram", "facebook"].map((social, idx) => (
                   <motion.a 
                     key={social}
                     href="#" 
                     whileHover={{ y: -3 }}
                     whileTap={{ scale: 0.95 }}
                     custom={idx}
                     style={{ 
                       color: "#475569", 
                       transition: "all 0.3s ease",
                       position: "relative"
                     }}
                     onMouseOver={(e) => {
                       const colors: Record<string, string> = { linkedin: "#0a66c2", youtube: "#FF0000", instagram: "#e1306c", facebook: "#1877F2" };
                       e.currentTarget.style.color = colors[social] || "#0a66c2";
                     }}
                     onMouseOut={(e) => e.currentTarget.style.color = "#475569"}
                   >
                     {social === "linkedin" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                       </svg>
                     )}
                     {social === "youtube" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                       </svg>
                     )}
                     {social === "instagram" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     )}
                     {social === "facebook" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                       </svg>
                     )}
                   </motion.a>
                 ))}
              </motion.div>
              </div>
            </motion.div>

            {/* Row 1, Col 2: About Echo Digital Works */}
            <motion.div 
              variants={fadeUpSpring} 
              whileHover={{ 
                y: -5, 
                boxShadow: "0 30px 60px -15px rgba(108, 43, 217, 0.15)",
                transition: { duration: 0.3 }
              }}
              style={{
                background: "rgba(255, 255, 255, 0.7)", 
                backdropFilter: "blur(40px)",
                borderRadius: "32px", 
                padding: "40px", 
                height: "100%",
                minHeight: "300px",
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255, 255, 255, 0.9)", 
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden"
              }}>
              <motion.div 
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{ 
                  position: "absolute", 
                  top: -50, 
                  right: -50, 
                  width: 200, 
                  height: 200, 
                  background: "radial-gradient(circle, rgba(108, 43, 217, 0.05) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none"
                }}
              />
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ color: "#0f172a", fontSize: "1.75rem", fontWeight: 800, marginBottom: "16px" }}
              >
                About Echo Digital Works
              </motion.h3>
              
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "60px" }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} 
                style={{ height: "3px", background: "linear-gradient(90deg, #6c2bd9, #a855f7)", marginBottom: "24px", borderRadius: "2px" }} 
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7 }}
              >
                Focusing on software engineering excellence and commercial implementations. 
                We handle cutting-edge corporate projects, from high-performance backend systems to 
                complex front-end architectures that power modern enterprises forward into the future.
              </motion.p>
              
              <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 8, gap: "14px" }}
                  style={{ 
                    color: "#6c2bd9", 
                    fontWeight: 700, 
                    textDecoration: "none", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    fontSize: "0.95rem"
                  }}
                >
                  Discover our services 
                  <motion.svg 
                    width="16" 
                    height="16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Row 2, Col 1: About Talent Projects (SWAPPED DOWN ON MOBILE) */}
            <motion.div 
              className="mobile-swap-down"
              variants={fadeUpSpring} 
              whileHover={{ 
                y: -5, 
                boxShadow: "0 30px 60px -15px rgba(6, 182, 212, 0.15)",
                transition: { duration: 0.3 }
              }}
              style={{
                background: "rgba(255, 255, 255, 0.7)", 
                backdropFilter: "blur(40px)",
                borderRadius: "32px", 
                padding: "40px",
                height: "100%", 
                minHeight: "300px",
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255, 255, 255, 0.9)", 
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden"
              }}>
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                style={{ 
                  position: "absolute", 
                  bottom: -50, 
                  left: -50, 
                  width: 200, 
                  height: 200, 
                  background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none"
                }}
              />
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ color: "#0f172a", fontSize: "1.75rem", fontWeight: 800, marginBottom: "16px" }}
              >
                About Talent Projects
              </motion.h3>
              
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "60px" }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} 
                style={{ height: "3px", background: "linear-gradient(90deg, #0ea5e9, #06b6d4)", marginBottom: "24px", borderRadius: "2px" }} 
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7 }}
              >
                Bridging the gap between academic theory and practical execution. 
                This division specializes in guiding students and professionals strictly 
                through hands-on engineering experiences, prototyping, and technical problem-solving.
              </motion.p>
              
              <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 8, gap: "14px" }}
                  style={{ 
                    color: "#0ea5e9", 
                    fontWeight: 700, 
                    textDecoration: "none", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    fontSize: "0.95rem"
                  }}
                >
                  Explore opportunities 
                  <motion.svg 
                    width="16" 
                    height="16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Row 2, Col 2: Talent Projects Logo (SWAPPED UP ON MOBILE) */}
            <motion.div 
              className="mobile-swap-up"
              variants={fadeUpSpring} 
              style={{ 
                position: "relative", 
                cursor: "pointer", 
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px"
              }} 
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard("talent")}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div style={{ position: "relative" }}>
                {/* Circular Card */}
                <div style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  backgroundColor: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: hoveredCard === "talent" 
                    ? "0 30px 60px -15px rgba(6, 182, 212, 0.4)" 
                    : "0 20px 40px -10px rgba(2, 132, 199, 0.3)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden"
                }}>
                  <img 
                    src="/logo.jpeg" 
                    alt="Talent Projects Logo" 
                    style={{ 
                      width: "75%", 
                      height: "75%", 
                      objectFit: "contain",
                    }} 
                  />
                </div>

              {/* Social Media Pill */}
              <motion.div 
                initial={false}
                animate={{
                  left: hoveredCard === "talent" ? "100%" : "50%",
                  x: hoveredCard === "talent" ? "calc(-100% - 12px)" : "-50%",
                  bottom: hoveredCard === "talent" ? 0 : -20, 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  position: "absolute", 
                  background: "rgba(255, 255, 255, 0.95)", 
                  backdropFilter: "blur(24px)",
                  padding: "12px 24px",
                  borderRadius: "100px",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  display: "flex", 
                  gap: "20px", 
                  border: "1px solid rgba(255,255,255,1)",
                  zIndex: 10
              }}>
                 {["linkedin", "youtube", "instagram", "facebook"].map((social, idx) => (
                   <motion.a 
                     key={social}
                     href="#" 
                     whileHover={{ y: -3 }}
                     whileTap={{ scale: 0.95 }}
                     custom={idx}
                     style={{ 
                       color: "#475569", 
                       transition: "all 0.3s ease",
                       position: "relative"
                     }}
                     onMouseOver={(e) => {
                       const colors: Record<string, string> = { linkedin: "#0a66c2", youtube: "#FF0000", instagram: "#e1306c", facebook: "#1877F2" };
                       e.currentTarget.style.color = colors[social] || "#0a66c2";
                     }}
                     onMouseOut={(e) => e.currentTarget.style.color = "#475569"}
                   >
                     {social === "linkedin" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                       </svg>
                     )}
                     {social === "youtube" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                       </svg>
                     )}
                     {social === "instagram" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     )}
                     {social === "facebook" && (
                       <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                       </svg>
                     )}
                   </motion.a>
                 ))}
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}