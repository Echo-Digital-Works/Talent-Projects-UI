import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import OurStory from "./OurStory";
import Solutions from "./Solutions";
import Expertise from "./Expertise";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import Contact from "./Contact";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home({ onOpenEnquiry }: { onOpenEnquiry?: () => void }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top: y, behavior: "smooth" });
          // Clear hash from URL so refresh stays at the top
          window.history.replaceState(null, "", window.location.pathname);
        }, 100);
      }
    } else {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  }, [location]);
  return (
    <div style={{ position: "relative" }}>
      {/* Gradient edge accent */}
      <div className="gradient-edge" />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          background: "#f5f3ff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "90px",
          paddingBottom: "60px",
          paddingLeft: "clamp(16px, 6vw, 120px)",
          paddingRight: "clamp(16px, 6vw, 120px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glows */}
        <div style={{ position: "absolute", top: "10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(108,43,217,0.08) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", right: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(108,43,217,0.12) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />

        <div
          className="responsive-grid-2col"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            gap: "48px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left — Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="hero-text-mobile"
            style={{ maxWidth: "540px" }}
          >
            {/* Badge */}
            <motion.div variants={fadeRight}>
              <span className="badge">
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                ISO 9001:2015 CERTIFIED PARTNER
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="hero-heading"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                marginTop: "32px",
                marginBottom: "28px",
              }}
            >
              Build Your
              <br />
              Engineering
              <br />
              Project With <span className="highlight">Industry</span>
              <br />
              <span className="highlight">Experts</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "#64748b",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "460px",
              }}
            >
              High-quality, ready-to-submit projects designed by senior
              engineers. From complex robotics to civil blueprints, we deliver
              excellence tailored to academic and industrial standards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="hero-cta-row"
              style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                onClick={() => {
                  const element = document.getElementById("expertise");
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY - 60;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Explore Catalog
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
                onClick={onOpenEnquiry}
              >
                Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "560px" }}>
              {/* Main image card */}
              <div className="glass-dark" style={{ padding: "8px" }}>
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "cover",
                    borderRadius: "1.25rem",
                    display: "block",
                  }}
                />
              </div>

              {/* Live Status Card — overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                }}
              >
                <div className="status-card">
                  <div>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#6c2bd9",
                        marginBottom: "4px",
                      }}
                    >
                      Live Status
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      Next–Gen UAV Assembly
                    </p>
                  </div>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#6c2bd9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(108, 43, 217, 0.4)",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.607 2.296.07 2.573-1.066z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <OurStory />

      {/* ===== HOW IT WORKS SECTION ===== */}
      <Solutions />

      {/* ===== PORTFOLIO SECTION ===== */}
      <Expertise />


      {/* ===== EXPERTISE SECTION ===== */}
      <Portfolio />

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <Testimonials />


      {/* ===== TESTIMONIALS SECTION ===== */}
      <WhyChooseUs />

      {/* ===== FAQ SECTION ===== */}
      <FAQ />

      {/* ===== CONTACT SECTION ===== */}
      <Contact />


    </div>
  );
}
