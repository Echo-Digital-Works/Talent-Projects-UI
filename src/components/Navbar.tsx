import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/#how-it-works" },
  { name: "Portfolio", path: "/#portfolio" },
  { name: "Our Story", path: "/#our-story" },
  { name: "Expertise", path: "/#expertise" },
];

export default function Navbar({ onOpenEnquiry }: { onOpenEnquiry?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
    if (path.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (path === "/" && location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* Top gradient bar */}
      <div className="nav-gradient-bar" />

      {/* Main navbar */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div style={{
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                border: "2px solid #6c2bd9",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(108, 43, 217, 0.15)",
                background: "white"
            }}>
              <img
                src="/Untitled design (12).png"
                alt="TalentProjects Logo"
                style={{ 
                  height: "100%", 
                  width: "100%", 
                  objectFit: "cover", 
                  borderRadius: "50%"
                }}
              />
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "#0f172a" }}>Talent</span>
              <span style={{ color: "#6c2bd9" }}>Projects</span>
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div
            className="nav-links-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color:
                    location.pathname === link.path ? "#6c2bd9" : "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.path)
                    (e.target as HTMLElement).style.color = "#0f172a";
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path)
                    (e.target as HTMLElement).style.color = "#64748b";
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right CTA Buttons */}
          <div
            className="nav-cta-desktop"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="nav-btn-outline"
              onClick={(e) => handleNavClick(e, "/#expertise")}
            >
              Explore Catalog
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="nav-btn-filled"
              onClick={onOpenEnquiry}
            >
              Free Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-mobile-toggle"
            style={{
              display: "none",
              padding: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#64748b",
            }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "white",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <div style={{ padding: "16px 24px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  style={{
                    display: "block",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      location.pathname === link.path ? "#6c2bd9" : "#64748b",
                    textDecoration: "none",
                    backgroundColor:
                      location.pathname === link.path
                        ? "rgba(108,43,217,0.05)"
                        : "transparent",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingTop: "12px",
                }}
              >
                <button
                  className="nav-btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={(e) => handleNavClick(e, "/#expertise")}
                >
                  Explore Catalog
                </button>
                <button className="nav-btn-filled" style={{ width: "100%", justifyContent: "center" }} onClick={() => { setIsOpen(false); onOpenEnquiry?.(); }}>
                  Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
