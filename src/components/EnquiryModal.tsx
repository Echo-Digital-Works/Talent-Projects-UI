import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto-close the modal after 3.5 seconds
    setTimeout(() => {
      handleClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(2, 6, 23, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(145deg, #0f172a, #020617)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                cursor: "pointer",
                transition: "all 0.2s",
                zIndex: 10
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div style={{ padding: "40px 32px", minHeight: "450px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ marginBottom: "32px" }}>
                      <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f8fafc", marginBottom: "8px" }}>
                        Free Consultation
                      </h3>
                      <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                        Fill out the form below and our experts will get in touch with you shortly.
                      </p>
                    </div>

                    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
                      
                      {/* Embedded Styles for Inputs */}
                      <style>{`
                        .modal-input {
                          width: 100%;
                          padding: 14px 18px;
                          border-radius: 12px;
                          border: 1px solid rgba(255, 255, 255, 0.1);
                          background: rgba(15, 23, 42, 0.6);
                          color: #f8fafc;
                          font-size: 0.95rem;
                          outline: none;
                          transition: all 0.3s ease;
                          box-sizing: border-box;
                        }
                        .modal-input:focus {
                          border-color: #38bdf8;
                          background: rgba(15, 23, 42, 0.9);
                          box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
                        }
                        .modal-label {
                          display: block;
                          font-size: 0.75rem;
                          font-weight: 700;
                          color: #94a3b8;
                          margin-bottom: 8px;
                          text-transform: uppercase;
                          letter-spacing: 0.05em;
                        }
                        .modal-grid-2 {
                          display: grid;
                          grid-template-columns: 1fr 1fr;
                          gap: 16px;
                        }
                        @media (max-width: 640px) {
                          .modal-grid-2 { grid-template-columns: 1fr; }
                        }
                      `}</style>

                      <div>
                        <label className="modal-label">Full Name</label>
                        <input type="text" className="modal-input" placeholder="Enter your full name" required />
                      </div>

                      <div>
                        <label className="modal-label">Email Address</label>
                        <input type="email" className="modal-input" placeholder="Enter your email" required />
                      </div>

                      <div className="modal-grid-2">
                        <div>
                          <label className="modal-label">Mobile Number</label>
                          <input type="tel" className="modal-input" placeholder="+91 00000 00000" required />
                        </div>
                        <div>
                          <label className="modal-label">Alternate Mobile</label>
                          <input type="tel" className="modal-input" placeholder="+91 00000 00000" />
                        </div>
                      </div>

                      <div>
                        <label className="modal-label">Domain</label>
                        <div style={{ position: "relative" }}>
                          <select className="modal-input" style={{ appearance: "none", cursor: "pointer" }} required defaultValue="">
                            <option value="" disabled>Select a domain...</option>
                            <option value="drone">Drone & UAV</option>
                            <option value="robotics">Robotics & AI</option>
                            <option value="electronics">EEE / ECE</option>
                            <option value="civil">Civil</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="other">Other</option>
                          </select>
                          <div style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#64748b" }}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="modal-label">Your Query</label>
                        <textarea 
                          className="modal-input" 
                          rows={4} 
                          placeholder="Provide brief details about your requirement..."
                          style={{ resize: "vertical" }}
                          required
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                          width: "100%",
                          padding: "16px",
                          background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          fontWeight: 800,
                          fontSize: "1.05rem",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          marginTop: "8px",
                          transition: "all 0.3s ease"
                        }}
                      >
                        Submit Request
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}
                  >
                    {/* Unique Animated Checkmark */}
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "rgba(16, 185, 129, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #10b981",
                        boxShadow: "0 0 40px rgba(16, 185, 129, 0.2)"
                      }}
                    >
                      <svg width="44" height="44" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981", margin: "0 0 12px 0" }}
                      >
                        Request Received!
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: "340px", margin: "0 auto", lineHeight: 1.6 }}
                      >
                        Our top engineers are reviewing your specifications. We'll open a comm-link with you shortly.
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
