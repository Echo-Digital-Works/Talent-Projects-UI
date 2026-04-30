import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";



const fadeUpSpring = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 18, mass: 0.8 }
  },
};

const ambientGlowAnimation = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.15, 0.4, 0.15],
    rotate: [0, 60, 0],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" as const }
  }
};

const iconFloat = {
  rest: { y: 0, scale: 1, rotate: 0 },
  hover: {
    y: -6,
    scale: 1.15,
    rotate: 8,
    transition: { type: "spring" as const, stiffness: 400, damping: 12 }
  }
};

// Slide animation for carousel transitions
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  })
};

// --- Updated Engineering Domains Data ---
const domains = [
  {
    id: 1,
    title: "Drone Projects",
    shortTitle: "UAV",
    description: "Autonomous flight systems, custom quadcopters, and advanced telemetry integration for aerial surveys.",
    theme: { main: "#0ea5e9", light: "rgba(14, 165, 233, 0.12)", dark: "#0284c7" },
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2v4m0 12v4M4 12H2m20 0h-2m-3.5-6.5L15 7m4 10-1.5-1.5M5 5l1.5 1.5M5 19l1.5-1.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Mechanical Projects",
    shortTitle: "MECH",
    description: "FEA analysis, thermodynamic modeling, and precision mechanical assembly kits for physical engineering.",
    theme: { main: "#f97316", light: "rgba(249, 115, 22, 0.12)", dark: "#ea580c" },
    gradient: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Civil Projects",
    shortTitle: "CIVIL",
    description: "Sustainable infrastructure models, structural simulations, and urban design testing solutions.",
    theme: { main: "#10b981", light: "rgba(16, 185, 129, 0.12)", dark: "#059669" },
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        <path d="M2 21h20" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Robotics Projects",
    shortTitle: "ROBOTICS",
    description: "Kinematic modeling, robotic arm manipulation, and computer vision integration for automated tasks.",
    theme: { main: "#d946ef", light: "rgba(217, 70, 239, 0.12)", dark: "#c026d3" },
    gradient: "linear-gradient(135deg, #d946ef 0%, #6c2bd9 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    )
  },
  {
    id: 5,
    title: "EEE/ECE Projects",
    shortTitle: "ELECTRONICS",
    description: "Embedded systems, PCB design, IoT sensor networks, and advanced microcontroller programming.",
    theme: { main: "#6c2bd9", light: "rgba(108, 43, 217, 0.12)", dark: "#5b21b6" },
    gradient: "linear-gradient(135deg, #6c2bd9 0%, #6366f1 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Automation Projects",
    shortTitle: "AUTO",
    description: "PLC-based control systems, SCADA dashboards, and industrial conveyor belt automation models.",
    theme: { main: "#f43f5e", light: "rgba(244, 63, 94, 0.12)", dark: "#e11d48" },
    gradient: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="m4 10 4-4 4 4" />
        <path d="M4 14V4h16v10" />
        <path d="M2 14h20v6H2z" />
      </svg>
    )
  }
];

export default function Expertise() {
  const [isMobile, setIsMobile] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const autoPlayRef = useRef<any>(null);
  const touchStartRef = useRef<any>(null);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pagination Logic
  // Changed itemsPerPage to 6 on desktop so it displays a 3x2 grid.
  const itemsPerPage = isMobile ? 1 : 6;
  const totalPages = Math.ceil(domains.length / itemsPerPage);

  // Reset page index if resize causes out-of-bounds
  useEffect(() => {
    if (pageIndex >= totalPages) setPageIndex(0);
  }, [totalPages, pageIndex]);

  const currentItems = domains.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return; // Disable autoplay if everything fits on one page
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, totalPages]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  const nextSlide = () => {
    if (totalPages <= 1) return;
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % totalPages);
    resetAutoPlay();
  };

  const prevSlide = () => {
    if (totalPages <= 1) return;
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    setDirection(index > pageIndex ? 1 : -1);
    setPageIndex(index);
    resetAutoPlay();
  };

  // Swipe handling for mobile
  const handleTouchStart = (e: any) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: any) => {
    if (!touchStartRef.current) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    } else {
      setIsAutoPlaying(true);
    }
    touchStartRef.current = null;
  };

  // Reusable Card Component
  const ExpertiseCard = ({ domain }: { domain: any }) => (
    <motion.div
      variants={fadeUpSpring}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onHoverStart={() => setHoveredCard(domain.id)}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        background: hoveredCard === domain.id
          ? `linear-gradient(135deg, #ffffff 0%, ${domain.theme.light} 100%)`
          : "#ffffff",
        borderRadius: "24px",
        padding: "32px 24px",
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${hoveredCard === domain.id ? domain.theme.main : "#e2e8f0"}`,
        boxShadow: hoveredCard === domain.id ? "0 20px 40px -10px rgba(0,0,0,0.1)" : "0 8px 24px rgba(0,0,0,0.06)",
        transform: hoveredCard === domain.id ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Corner Accent */}
      <motion.div
        animate={{
          width: hoveredCard === domain.id ? "80px" : "40px",
          height: hoveredCard === domain.id ? "80px" : "40px",
        }}
        style={{ position: "absolute", top: 0, right: 0, background: domain.gradient, opacity: 0.12, borderRadius: "0 0 0 40px", transition: "all 0.3s ease" }}
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <motion.div
          variants={iconFloat}
          style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: `linear-gradient(135deg, ${domain.theme.light} 0%, rgba(255,255,255,0.8) 100%)`,
            border: `1px solid ${domain.theme.light}`,
            color: domain.theme.main,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", zIndex: 1
          }}
        >
          {domain.icon}
        </motion.div>

        <motion.span
          animate={{
            backgroundColor: hoveredCard === domain.id ? domain.theme.light : "#f1f5f9",
            color: hoveredCard === domain.id ? domain.theme.dark : "#64748b"
          }}
          style={{ fontSize: "0.7rem", fontWeight: 700, padding: "6px 12px", borderRadius: "20px", letterSpacing: "0.5px", transition: "all 0.3s ease" }}
        >
          {domain.shortTitle}
        </motion.span>
      </div>

      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.01em" }}>
        {domain.title}
      </h3>

      <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginBottom: "24px", flex: 1 }}>
        {domain.description}
      </p>

      <motion.div
        animate={{
          width: hoveredCard === domain.id ? "100%" : "40px",
          backgroundColor: hoveredCard === domain.id ? domain.theme.main : "#e2e8f0"
        }}
        style={{ height: "2px", borderRadius: "2px", marginBottom: "20px", transition: "all 0.3s ease" }}
      />

      <Link
        to={`/domain/${encodeURIComponent(domain.title)}`}
        style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: hoveredCard === domain.id ? domain.theme.main : "#64748b", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", transition: "all 0.3s ease" }}
      >
        <span>Explore Domain</span>
        <motion.svg
          animate={{ x: hoveredCard === domain.id ? 4 : 0 }}
          width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  );

  return (
    <section
      id="expertise"
      style={{
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px"
      }}
    >
      {/* Ambient Background Glows */}
      <motion.div variants={ambientGlowAnimation} animate="animate" style={{ position: "absolute", top: "-10%", right: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)", filter: "blur(70px)", zIndex: 0, pointerEvents: "none" }} />
      <motion.div variants={ambientGlowAnimation} animate="animate" transition={{ delay: 3 }} style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)", filter: "blur(70px)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              display: "inline-block", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem",
              background: "linear-gradient(135deg, #0ea5e9, #6c2bd9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontWeight: 800, marginBottom: "16px"
            }}
          >
            Core Capabilities
          </motion.span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Engineering{" "}
            <span style={{ background: "linear-gradient(135deg, #0ea5e9, #6c2bd9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Excellence
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Specialized expertise across critical engineering domains ensuring cutting-edge implementations.
          </p>
        </motion.div>

        {/* Dynamic View Container - Increased minHeight for Desktop to handle 2 rows */}
        <div
          style={{ position: "relative", minHeight: isMobile ? "380px" : "800px" }}
          onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
          onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={pageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "32px",
                width: "100%",
                position: "absolute",
                top: 0, left: 0, right: 0
              }}
            >
              {currentItems.map((domain) => (
                <ExpertiseCard key={domain.id} domain={domain} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Universal Pagination Controls (Arrows + Dots) - Hidden if everything fits on one page */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", marginTop: "32px" }}>
            <button
              onClick={prevSlide}
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748b", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", transition: "all 0.3s" }}
              onMouseOver={e => { e.currentTarget.style.color = "#0ea5e9"; e.currentTarget.style.borderColor = "#0ea5e9"; }}
              onMouseOut={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div style={{ display: "flex", gap: "10px" }}>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  style={{
                    width: idx === pageIndex ? "32px" : "8px", height: "8px", borderRadius: "4px",
                    background: idx === pageIndex ? "linear-gradient(135deg, #0ea5e9, #6c2bd9)" : "#cbd5e1",
                    border: "none", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748b", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", transition: "all 0.3s" }}
              onMouseOver={e => { e.currentTarget.style.color = "#0ea5e9"; e.currentTarget.style.borderColor = "#0ea5e9"; }}
              onMouseOut={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}