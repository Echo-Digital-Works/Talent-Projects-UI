import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "The documentation was perfect. My professors were really impressed with the level of detail. Exceeded all expectations.",
    name: "Rahul Sharma",
    role: "Mechanical Graduate",
    company: "IIT Bombay",
    rating: 5,
    tag: "ENGINEERING"
  },
  {
    id: 2,
    quote: "Excellent support! They helped me debug my drone setup even at 10 PM. Highly recommend for anyone serious about engineering.",
    name: "Priya Das",
    role: "ECE Engineering",
    company: "BITS Pilani",
    rating: 5,
    tag: "AEROSPACE"
  },
  {
    id: 3,
    quote: "The code structure was very clean. I learned more by studying their code than in my classes! Truly industry-standard practices.",
    name: "Anu K.",
    role: "Computer Science",
    company: "DTU",
    rating: 5,
    tag: "SOFTWARE"
  },
  {
    id: 4,
    quote: "The hardware quality is exceptional. Built my entire thesis project using their components. Worth every penny.",
    name: "Vikram Singh",
    role: "PhD Researcher",
    company: "IISc",
    rating: 5,
    tag: "HARDWARE"
  },
  {
    id: 5,
    quote: "Transformative learning experience. The mentorship program helped me land my dream job at a top tech firm.",
    name: "Neha Gupta",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
    tag: "MENTORSHIP"
  },
  {
    id: 6,
    quote: "The industrial training program gave me hands-on experience that no classroom could provide. Highly recommended!",
    name: "Arjun Reddy",
    role: "Automation Engineer",
    company: "Siemens",
    rating: 5,
    tag: "TRAINING"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [isPaused]);

  // Orbit Configuration
  const CONTAINER_SIZE = 380;
  const CENTER = CONTAINER_SIZE / 2;
  const R_OUTER = 150;
  const R_INNER = 90;

  // Calculate X/Y coordinates for avatars on the rings
  const getAvatarPosition = (index: number) => {
    // 6 items = 60 degrees apart. -90 offsets to start at the top.
    const angle = (index * 60 - 90) * (Math.PI / 180);
    // Alternate between outer and inner rings for the scattered look
    const radius = index % 2 === 0 ? R_OUTER : R_INNER;
    
    return {
      x: CENTER + Math.cos(angle) * radius,
      y: CENTER + Math.sin(angle) * radius
    };
  };

  const activePos = getAvatarPosition(activeIndex);

  return (
    <section 
      id="testimonials"
      style={{
        background: "#111111", // Deep dark background
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Background Ambient Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "20%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none"
      }}/>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "80px", zIndex: 1 }}
      >
        <h3 style={{ 
          color: "#d97706", // Golden amber
          textTransform: "uppercase", 
          letterSpacing: "0.4em", 
          fontSize: "0.8rem",
          fontWeight: 700
        }}>
          Voices of Trust
        </h3>
      </motion.div>

      {/* Main Layout Grid */}
      <div style={{
        maxWidth: "1100px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "60px",
        alignItems: "center",
        zIndex: 1
      }}>
        
        {/* LEFT SIDE: Orbital Diagram */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center",
            position: "relative"
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div style={{ 
            width: CONTAINER_SIZE, 
            height: CONTAINER_SIZE, 
            position: "relative" 
          }}>
            
            {/* Background Rings */}
            <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", inset: "60px", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }} />
            
            {/* SVG Connecting Line */}
            <svg width={CONTAINER_SIZE} height={CONTAINER_SIZE} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
              <motion.line
                x1={CENTER}
                y1={CENTER}
                animate={{ x2: activePos.x, y2: activePos.y }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                stroke="#d97706"
                strokeWidth="1.5"
              />
            </svg>

            {/* Center Golden Dot */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: "12px", height: "12px",
              background: "#d97706",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 20px rgba(217, 119, 6, 0.5)"
            }}/>

            {/* Avatars */}
            {testimonials.map((test, idx) => {
              const pos = getAvatarPosition(idx);
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={test.id}
                  onClick={() => { setActiveIndex(idx); setIsPaused(true); setTimeout(() => setIsPaused(false), 5000); }}
                  style={{
                    position: "absolute",
                    top: pos.y,
                    left: pos.x,
                    width: isActive ? "64px" : "54px",
                    height: isActive ? "64px" : "54px",
                    marginTop: isActive ? "-32px" : "-27px",
                    marginLeft: isActive ? "-32px" : "-27px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    padding: "3px",
                    border: isActive ? "2px solid #d97706" : "2px solid transparent",
                    background: isActive ? "rgba(217, 119, 6, 0.1)" : "transparent",
                    transition: "all 0.3s ease",
                    zIndex: isActive ? 10 : 1
                  }}
                >
                  <div style={{
                    width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                    opacity: isActive ? 1 : 0.4,
                    transition: "all 0.3s ease",
                    background: "#262626", // Fallback color
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#a3a3a3", fontWeight: 700, fontSize: "1.2rem"
                  }}>
                    {/* Placeholder image using pravatar - you can swap this for real images */}
                    <img 
                      src={`https://i.pravatar.cc/150?img=${idx + 11}`} 
                      alt={test.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px"
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Top Quote Mark & Tag */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <span style={{ fontSize: "3rem", fontFamily: "serif", color: "#d97706", lineHeight: 0, marginTop: "20px" }}>“</span>
                <span style={{
                  border: "1px solid rgba(217, 119, 6, 0.5)",
                  color: "#d97706",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}>
                  {testimonials[activeIndex].tag}
                </span>
              </div>

              {/* The Quote */}
              <p style={{
                color: "#f3f4f6",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                lineHeight: 1.4,
                fontWeight: 300,
                marginBottom: "40px",
                letterSpacing: "-0.01em"
              }}>
                {testimonials[activeIndex].quote}
              </p>

              {/* Author Block */}
              <div style={{
                borderLeft: "3px solid #d97706",
                paddingLeft: "20px"
              }}>
                <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>
                  {testimonials[activeIndex].name}
                </h4>
                <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "12px" }}>
                  {testimonials[activeIndex].role}
                </p>
                
                {/* Golden Stars */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" fill="#d97706" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}