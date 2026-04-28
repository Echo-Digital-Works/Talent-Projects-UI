import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Helper function to extract YouTube ID
const getYouTubeId = (url: any) => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Mock data for Reels/Shorts
const videoReels = [
  {
    id: 1,
    title: "Autonomous Drone Flight Test",
    category: "AEROSPACE",
    views: "12.5K",
    likes: "2.3K",
    duration: "0:45",
    theme: "#0ea5e9",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #0284c7 100%)",
    videoUrl: "https://www.instagram.com/reel/CqnJPufjRv6/?igsh=MWo4Y3lwMWh0bzBiaw==",
    thumbUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    creator: "DroneTech Labs"
  },
  {
    id: 2,
    title: "RoboArm 6X Assembly Timelapse",
    category: "ROBOTICS",
    views: "8.2K",
    likes: "1.2K",
    duration: "0:59",
    theme: "#f97316",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #c2410c 100%)",
    videoUrl: "https://youtube.com/shorts/1vYvU4aJebQ",
    creator: "Robotics Hub"
  },
  {
    id: 3,
    title: "Smart Grid Load Simulation",
    category: "ENERGY",
    views: "15K",
    likes: "3.1K",
    duration: "0:30",
    theme: "#10b981",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #047857 100%)",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Energy Innovations"
  },
  {
    id: 4,
    title: "AI Computer Vision Object Tracking",
    category: "SOFTWARE",
    views: "22K",
    likes: "4.5K",
    duration: "0:55",
    theme: "#8b5cf6",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #6d28d9 100%)",
    videoUrl: "https://youtube.com/shorts/9bZkp7q19f0",
    creator: "AI Research"
  },
  {
    id: 5,
    title: "3D Printing Custom UAV Parts",
    category: "MANUFACTURING",
    views: "9.1K",
    likes: "1.8K",
    duration: "0:40",
    theme: "#ec4899",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #be185d 100%)",
    videoUrl: "/watch/3d-printing",
    creator: "MakeLab"
  },
  {
    id: 6,
    title: "Industrial IoT Dashboard Demo",
    category: "AUTOMATION",
    views: "11K",
    likes: "2.1K",
    duration: "0:50",
    theme: "#eab308",
    thumbnailGrad: "linear-gradient(180deg, #0f172a 0%, #a16207 100%)",
    videoUrl: "/watch/iot-dashboard",
    creator: "IoT Solutions"
  }
];

// Reusable Cinematic Reel Card
const ReelCard = ({ reel, isActive, onHover, isMobile }: { reel: any, isActive: boolean, onHover?: any, isMobile: boolean }) => {
  const ytId = getYouTubeId(reel.videoUrl);
  const thumbUrl = reel.thumbUrl || (ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : null);

  return (
    <motion.div
      onHoverStart={() => onHover?.(reel.id)}
      onHoverEnd={() => onHover?.(null)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: isMobile ? "320px" : "280px",
        aspectRatio: "9 / 16",
        borderRadius: "24px",
        backgroundColor: "#0f172a",
        border: `1px solid ${isActive ? reel.theme : "rgba(255,255,255,0.15)"}`,
        transform: isActive ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: isActive ? `0 20px 40px -12px ${reel.theme}80` : "0 10px 20px -10px rgba(0,0,0,0.3)",
        margin: "0 auto"
      }}
    >
      {/* Glowing Stage Reflection Effect */}
      <div style={{
        position: "absolute",
        bottom: "-15px", left: "10%", right: "10%", height: "15px",
        background: reel.theme,
        filter: "blur(20px)",
        opacity: isActive ? 0.6 : 0,
        transition: "opacity 0.4s ease",
        zIndex: -1
      }} />

      <a
        href={reel.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          display: "block",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* FULL COVER THUMBNAIL */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}>
          {thumbUrl ? (
            <img
              src={thumbUrl}
              alt={reel.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transform: isActive ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          ) : (
            <div style={{
              width: "100%",
              height: "100%",
              background: reel.thumbnailGrad
            }} />
          )}
        </div>

        {/* Cinematic Overlays */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(2,6,23,0.4) 0%, rgba(2,6,23,0) 30%, rgba(2,6,23,0.9) 100%)",
          pointerEvents: "none",
          zIndex: 1
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: reel.theme,
          mixBlendMode: "overlay",
          opacity: thumbUrl ? 0.2 : 0,
          pointerEvents: "none",
          zIndex: 1
        }} />

        {/* Top Info Bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "16px" : "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 2
        }}>
          <span style={{
            background: reel.theme,
            padding: "4px 10px",
            borderRadius: "100px",
            fontSize: isMobile ? "0.65rem" : "0.6rem",
            fontWeight: 800,
            color: "white",
            letterSpacing: "0.05em"
          }}>
            {reel.category}
          </span>

          <div style={{
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(12px)",
            padding: "4px 8px",
            borderRadius: "100px",
            color: "white",
            fontSize: isMobile ? "0.7rem" : "0.65rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: "5px", height: "5px", background: "#ef4444", borderRadius: "50%", boxShadow: "0 0 6px #ef4444" }}
            />
            {reel.duration}
          </div>
        </div>

        {/* Sonar Play Button */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2
        }}>
          {isActive && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: isMobile ? "64px" : "50px",
                height: isMobile ? "64px" : "50px",
                borderRadius: "50%",
                background: reel.theme
              }}
            />
          )}
          <motion.div
            animate={{ scale: isActive ? 1.05 : 1, backgroundColor: isActive ? reel.theme : "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              width: isMobile ? "56px" : "44px",
              height: isMobile ? "56px" : "44px",
              borderRadius: "50%",
              backdropFilter: "blur(12px)",
              border: `2px solid ${isActive ? reel.theme : "rgba(255,255,255,0.3)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
            }}
          >
            <svg width={isMobile ? "24" : "20"} height={isMobile ? "24" : "20"} fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: "4px" }}>
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom Content Area */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "20px 16px" : "16px",
          pointerEvents: "none",
          zIndex: 2
        }}>
          <h3 style={{
            color: "white",
            fontSize: isMobile ? "0.95rem" : "0.9rem",
            fontWeight: 800,
            marginBottom: "6px",
            lineHeight: 1.3,
            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {reel.title}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "0.65rem", marginBottom: "10px", fontWeight: 500 }}>
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            {reel.creator}
          </div>

          <div style={{ display: "flex", gap: "12px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#f8fafc", fontSize: "0.65rem", fontWeight: 700 }}>
              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {reel.views}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#f8fafc", fontSize: "0.65rem", fontWeight: 700 }}>
              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {reel.likes}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default function ReelsShowcase() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const autoPlayRef = useRef<any>(null);
  const touchStartRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(videoReels.length / itemsPerPage);
  const currentItems = videoReels.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Auto Rotation: 5s timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (isMobile) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % videoReels.length);
      }, 5000);
    } else {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isMobile, totalPages]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  const nextSlide = () => {
    if (isMobile) { setDirection(1); setActiveIndex((prev) => (prev + 1) % videoReels.length); }
    else { setCurrentPage((prev) => (prev + 1) % totalPages); }
    resetAutoPlay();
  };

  const prevSlide = () => {
    if (isMobile) { setDirection(-1); setActiveIndex((prev) => (prev - 1 + videoReels.length) % videoReels.length); }
    else { setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages); }
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    if (isMobile) { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }
    else { setCurrentPage(index); }
    resetAutoPlay();
  };

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
      diffX > 0 ? nextSlide() : prevSlide();
    } else {
      setIsAutoPlaying(true);
    }
    touchStartRef.current = null;
  };

  return (
    <section
      id="portfolio"
      style={{
        background: "#020617",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "40px 16px 60px 16px" : "60px 20px"
      }}
    >
      {/* Cinematic Grid Pattern Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.15,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: isMobile ? "30px" : "40px" }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: isMobile ? "0.7rem" : "0.75rem",
            color: "#38bdf8",
            fontWeight: 700,
            marginBottom: "12px"
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }} />
            {isMobile ? "Vertical Shorts" : "Innovation Reels"}
          </span>
          <h2 style={{
            fontSize: isMobile ? "clamp(1.6rem, 5vw, 2rem)" : "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
            marginBottom: "8px"
          }}>
            Engineering <span style={{ color: "#818cf8" }}>in Action</span>
          </h2>
          <p style={{
            color: "#94a3b8",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.5,
            padding: "0 16px"
          }}>
            Watch our latest engineering breakthroughs in short-form vertical videos.
          </p>
        </motion.div>

        {/* Desktop View: 3 Cards Grid */}
        {!isMobile && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", overflow: "visible", padding: "10px 0" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "28px",
                    width: "100%",
                    flexWrap: "wrap"
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {currentItems.map((reel) => (
                    <ReelCard
                      key={reel.id}
                      reel={reel}
                      isActive={hoveredCard === reel.id}
                      onHover={setHoveredCard}
                      isMobile={false}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Pagination Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "32px", marginTop: "32px" }}>
              <button
                onClick={prevSlide}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  transition: "all 0.3s"
                }}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div style={{ display: "flex", gap: "12px" }}>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    style={{
                      width: idx === currentPage ? "40px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: idx === currentPage ? "#818cf8" : "rgba(255,255,255,0.2)",
                      boxShadow: idx === currentPage ? "0 0 12px rgba(129, 140, 248, 0.6)" : "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  transition: "all 0.3s"
                }}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile View: Single Card Swipe Carousel - FIXED ALIGNMENT */}
        {isMobile && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}>
            {/* Carousel Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
              onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
            >
              {/* Navigation Arrows - Positioned absolutely relative to container */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 20,
                  color: "white"
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 20,
                  color: "white"
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>

              {/* Current Card */}
              <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    initial={{ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <ReelCard reel={videoReels[activeIndex]} isActive={true} isMobile={true} onHover={() => {}} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dots Indicator */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              padding: "0 10px"
            }}>
              {videoReels.map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => goToSlide(idx)}
                  style={{
                    width: idx === activeIndex ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: idx === activeIndex
                      ? videoReels[activeIndex].theme
                      : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Auto-play status */}

      </div>
    </section>
  );
}