import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    projectType: "",
    specifications: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `📩 *New Enquiry from Website*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Mobile:* ${formData.mobile}\n` +
      `${formData.alternateMobile ? `📱 *Alt Mobile:* ${formData.alternateMobile}\n` : ""}` +
      `🏷️ *Project Type:* ${formData.projectType}\n\n` +
      `💬 *Specifications:*\n${formData.specifications}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=917904075373&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <style>{`
        /* Industrial Standard Form Inputs */
        .tech-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8);
          color: #0f172a;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        .tech-input::placeholder {
          color: #475569;
        }
        .tech-input:focus {
          border-color: #6c2bd9;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0 0 4px rgba(108, 43, 217, 0.1);
        }
        
        /* Dropdown styling */
        .tech-select option {
          background: #ffffff;
          color: #0f172a;
        }

        .tech-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Responsive Grid */
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .contact-split {
          display: flex;
          gap: 40px;
        }
        .contact-info {
          flex: 0 0 35%;
        }
        .contact-form {
          flex: 1;
        }

        @media (max-width: 992px) {
          .contact-split {
            flex-direction: column;
          }
          .contact-info {
            flex: none;
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="contact" style={{
        background: "#f5f3ff",
        position: "relative",
        overflow: "hidden",
        padding: "120px 20px"
      }}>
        {/* Ambient Tech Glows */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        {/* Subtle Engineering Grid Overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`, pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.75rem",
              color: "#6c2bd9", fontWeight: 700, marginBottom: "16px"
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6c2bd9", boxShadow: "0 0 10px rgba(108,43,217,0.4)" }} />
              Project Initiation
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Book an <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6c2bd9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Expert Consultation</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Connect with our senior engineers to define scope, hardware requirements, and deployment timelines for your next innovation.
            </p>
          </motion.div>

          {/* Industrial Split Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-split"
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "32px",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              padding: "clamp(24px, 5vw, 48px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)",
              marginBottom: "80px"
            }}
          >
            {/* Left Panel: Contact Info & Status */}
            <div className="contact-info">
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                Direct Channel
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "40px" }}>
                Submit your project specifications. Our automated routing system will assign the most qualified engineer to your case.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: "8px" }}>Headquarters</h4>
                  <p style={{ color: "#0f172a", fontSize: "1rem", fontWeight: 500 }}>
                    Echo Digital Works<br />123 Porur<br />Chennai - 600028
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", marginBottom: "8px" }}>Comm Links</h4>
                  <p style={{ color: "#0f172a", fontSize: "1rem", fontWeight: 500, marginBottom: "4px" }}>+91 79040 75373</p>
                  <p style={{ color: "#0f172a", fontSize: "1rem", fontWeight: 500 }}>talentprojects22@gmail.com</p>
                </div>
              </div>


            </div>

            {/* Right Panel: The Form */}
            <div className="contact-form">
              <form style={{ display: "flex", flexDirection: "column", gap: "24px" }} onSubmit={handleSubmit}>

                {/* Row 1: Name & Email */}
                <div className="form-grid-2">
                  <div>
                    <label className="tech-label">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="tech-input" placeholder="e.g. Alan Turing" required />
                  </div>
                  <div>
                    <label className="tech-label">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="tech-input" placeholder="alan@example.com" required />
                  </div>
                </div>

                {/* Row 2: Contact Numbers (NEW) */}
                <div className="form-grid-2">
                  <div>
                    <label className="tech-label">Primary Contact Number</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="tech-input" placeholder="+91 00000 00000" required />
                  </div>
                  <div>
                    <label className="tech-label">Alternate Number (Optional)</label>
                    <input type="tel" name="alternateMobile" value={formData.alternateMobile} onChange={handleChange} className="tech-input" placeholder="+91 00000 00000" />
                  </div>
                </div>

                {/* Row 3: Project Type */}
                <div>
                  <label className="tech-label">Hardware / Project Type</label>
                  <div style={{ position: "relative" }}>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="tech-input tech-select" style={{ appearance: "none", cursor: "pointer" }} required>
                      <option value="" disabled>Select technological domain...</option>
                      <option value="drone">Drone & UAV Systems</option>
                      <option value="robotics">Robotics & AI</option>
                      <option value="embedded">Embedded Systems (IoT)</option>
                      <option value="civil">Civil / Structural Engineering</option>
                      <option value="other">Other Commercial Project</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#64748b" }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="tech-label">Project Specifications / Payload</label>
                  <textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    className="tech-input"
                    rows={5}
                    placeholder="Provide details about your components, timeline, and specific engineering requirements..."
                    style={{ resize: "vertical" }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    marginTop: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease"
                  }}
                >
                  Initialize Request
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>


        </div>
      </section>
    </>
  );
}