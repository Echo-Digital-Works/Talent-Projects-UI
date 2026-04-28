import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Contact from "./Contact";

// Using a high-quality abstract tech background
const heroImg = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80";

// --- DATASET 1: DRONE / ELECTRICAL PROJECTS ---
const droneProjects = [
  { id: 1, title: "A Comparative Analysis of DC-DC Converters for Renewable Energy System" },
  { id: 2, title: "An Novel Isolated Multi-level DC-DC Converter for EV Applications" },
  { id: 3, title: "A Centralized Power Control and Management Method for Grid-Connected Photovoltaic(PV)-Battery Systems" },
  { id: 4, title: "Hybrid Transformer Based DC-DC Boost Converter For Photovoltaic Application" },
  { id: 5, title: "Design of High Efficiency Single Input Multiple Output Converter" },
  { id: 6, title: "Digital Controlled Based on Data Operator For High Frequency DC-DC Suitable Controller" },
  { id: 7, title: "Soft-switching DC-DC converter with a full ZVS range and reduced output filter ripple voltage applications" },
  { id: 8, title: "A PWM plus phase angle shift (PPAS) control scheme for combined multilevel dc-dc converters" },
  { id: 9, title: "Single Phase single Stage AC-DC converter for high-frequency application using buck-boost converter" },
  { id: 10, title: "Integrated full-bridge-forward DC-DC converter for a residential micro grid application" },
  { id: 11, title: "The isolated buck boost DC TO DC converter with high efficiency for higher input voltages" },
  { id: 12, title: "Design  and performance of a bidirectional isolated DC-DC converter for a battery energy storage system" },
  { id: 13, title: "Design And Implementation of Integrated Boost Resonant Full  Bridge DC-DC Converter for Photovoltaic Applications" },
  { id: 14, title: "A high-efficiency wide-input-voltage range switched  capacitor point-of-load DC-DC Converter" },
  { id: 15, title: "A high step-up three-port DC-DC converter for stand-alone PV/battery power systems" },
  { id: 16, title: "A bridgeless boost rectifier for low-voltage energy harvesting applications" },
  { id: 17, title: "Coordinated control and energy management of distributed generation inverters in a micro grid" },
  { id: 18, title: "Improved trans-z-source inverter with continuous input current and boost inversion capability" },
  { id: 19, title: "Mitigation of lower order harmonics in a grid-connected single-phase PV inverter" },
  { id: 20, title: "Design and Fabrication of Pedal powered Household Reciprocating Pump" }
];
const droneCategories = ["All", "Power Electronics", "Robotics & Mech", "IoT & Automation", "Renewables & Grid"];

// --- DATASET 2: MECHANICAL PROJECTS ---
const mechProjects = [
  { id: "UCS 001", category: "FEA Projects", title: "Design & Analysis of Poppet valve using composite materials" },
  { id: "UCS 002", category: "FEA Projects", title: "Failure Analysis and optimization of Planner machine by horizontal Mechanism" },
  { id: "UCS 003", category: "FEA Projects", title: "Design and Analysis of Pneumatic Trolley for Industrial Applications" },
  { id: "UCS 004", category: "FEA Projects", title: "FEA Analysis of Aluminum – Copper based Connecting rod" },
  { id: "UCS 005", category: "FEA Projects", title: "Modeling & Analysis of Suspension Steering System" },
];
const mechCategories = ["All", "FEA Projects", "Automation & Mechatronics", "Optimization", "Agriculture", "Thermal & Refrigeration", "Tool & Die", "Manufacturing"];

// --- DATASET 3: CIVIL PROJECTS ---
const civilProjects = [
  { id: "CIV 001", category: "Structural Design", title: "Seismic Analysis and Design of Multi-Story Commercial Building using E-TABS" },
  { id: "CIV 002", category: "Transportation", title: "Design and Optimization of Flexible Pavement for State Highways" },
  { id: "CIV 003", category: "Environmental", title: "Experimental Study on Waste Water Treatment using Bio-filtration Systems" },
  { id: "CIV 004", category: "Geotechnical", title: "Soil Stabilization and Foundation Strengthening using Fly Ash and Cement" },
  { id: "CIV 005", category: "Construction Mgmt", title: "Resource Optimization in Construction Scheduling using Primavera P6" },
];
const civilCategories = ["All", "Structural Design", "Transportation", "Environmental", "Geotechnical", "Construction Mgmt"];

// --- DATASET 4: ROBOTICS PROJECTS ---
const roboticsProjects = [
  { id: "ROB 001", category: "Autonomous Systems", title: "Path Planning and Obstacle Avoidance for Autonomous Rovers" },
  { id: "ROB 002", category: "Manipulators", title: "Kinematic Modeling of a 6-DOF Industrial Robotic Arm" },
  { id: "ROB 003", category: "Computer Vision", title: "Object Tracking and Sorting using OpenCV and Raspberry Pi" },
  { id: "ROB 004", category: "Drones & UAVs", title: "Swarm Intelligence in Quadcopters for Area Mapping" },
];
const roboticsCategories = ["All", "Autonomous Systems", "Manipulators", "Computer Vision", "Drones & UAVs"];

// --- DATASET 5: EEE/ECE PROJECTS ---
const eceProjects = [
  { id: "ECE 001", category: "Embedded Systems", title: "Design of a Smart Health Monitoring System using Microcontrollers" },
  { id: "ECE 002", category: "Power Systems", title: "Grid Fault Detection and Isolation using Microgrid Technologies" },
  { id: "ECE 003", category: "IoT", title: "LoRaWAN based Smart Agriculture Monitoring System" },
  { id: "ECE 004", category: "VLSI Design", title: "Area Efficient and High-Speed Multiplier Design using FPGA" },
];
const eceCategories = ["All", "Embedded Systems", "Power Systems", "IoT", "VLSI Design", "Signal Processing"];

// --- DATASET 6: AUTOMATION PROJECTS ---
const automationProjects = [
  { id: "AUT 001", category: "PLC & SCADA", title: "Automated Liquid Mixing and Bottling Plant using Siemens PLC" },
  { id: "AUT 002", category: "Industrial IoT", title: "Real-time Machine Condition Monitoring using NodeMCU and MQTT" },
  { id: "AUT 003", category: "Process Control", title: "PID Temperature Control System for Industrial Furnaces" },
  { id: "AUT 004", category: "Pneumatics", title: "Electro-Pneumatic Sorting and Rejecting Station" },
];
const automationCategories = ["All", "PLC & SCADA", "Industrial IoT", "Process Control", "Pneumatics", "Robotic Automation"];


export default function DomainPage({ onOpenEnquiry }: { onOpenEnquiry?: () => void }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const domainTitle = id ? decodeURIComponent(id) : "Engineering Master Catalog";

  // 1. Determine which dataset to use based on the URL parameter (domainTitle)
  let activeProjects: { id: number | string; title: string; category?: string }[] = droneProjects;
  let activeCategories: string[] = droneCategories;

  const lowerCaseTitle = domainTitle.toLowerCase();

  if (lowerCaseTitle.includes("mech")) {
    activeProjects = mechProjects;
    activeCategories = mechCategories;
  } else if (lowerCaseTitle.includes("civil")) {
    activeProjects = civilProjects;
    activeCategories = civilCategories;
  } else if (lowerCaseTitle.includes("robotics")) {
    activeProjects = roboticsProjects;
    activeCategories = roboticsCategories;
  } else if (lowerCaseTitle.includes("ece") || lowerCaseTitle.includes("eee") || lowerCaseTitle.includes("electronic")) {
    activeProjects = eceProjects;
    activeCategories = eceCategories;
  } else if (lowerCaseTitle.includes("auto")) {
    activeProjects = automationProjects;
    activeCategories = automationCategories;
  }

  const [activeCategory, setActiveCategory] = useState("All");

  // Reset category filter if the user navigates to a different domain
  useEffect(() => {
    setActiveCategory("All");
  }, [domainTitle]);

  const filteredProjects = activeCategory === "All"
    ? activeProjects
    : activeProjects.filter((p: any) => p.category === activeCategory);

  return (
    <div style={{ background: "#020617", width: "100%", minHeight: "100vh" }}>

      {/* 1. Domain Hero Section */}
      <section className="domain-hero" style={{
        position: "relative",
        background: "#0f172a",
        padding: "180px clamp(16px, 5vw, 80px) 140px",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.2, mixBlendMode: "luminosity"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.7) 50%, rgba(108,43,217,0.2) 100%)",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <div style={{ marginBottom: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <span style={{
              background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", padding: "6px 16px", border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase"
            }}>
              Talent Projects
            </span>
            <span style={{
              background: "rgba(167, 139, 250, 0.1)", color: "#a78bfa", padding: "6px 16px", border: "1px solid rgba(167, 139, 250, 0.2)",
              borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase"
            }}>
              Diploma & Engineering
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "white",
            marginBottom: "24px", letterSpacing: "-0.02em", lineHeight: 1.1
          }}>
            {domainTitle}
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "650px", lineHeight: 1.6, marginBottom: "48px" }}>
            Innovation is Life. We provide comprehensive project solutions across PLC, HMI, SCADA, VFD, IoT, Embedded Systems, and PCB Design for final year college students.
          </p>

          {/* Hero Contact Info */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+918248287016" style={{
              display: "flex", alignItems: "center", gap: "12px", background: "white", color: "#0f172a",
              padding: "16px 32px", borderRadius: "100px", fontWeight: 800, textDecoration: "none",
              boxShadow: "0 10px 25px rgba(255,255,255,0.1)", transition: "transform 0.2s"
            }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91 82482 87016
            </a>
            <a href="mailto:talentprojects22@gmail.com" style={{
              display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.05)", color: "white",
              padding: "16px 32px", borderRadius: "100px", fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)", transition: "background 0.2s"
            }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              talentprojects22@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* 2. Database Section */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) 20px", position: "relative" }}>

        {/* Ambient Tech Glows */}
        <div style={{ position: "absolute", top: "10%", left: "0%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "0%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Custom Back Button */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#94a3b8",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "8px 20px",
                borderRadius: "100px",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              Back
            </button>
          </div>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Master Project <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Database</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Explore our complete collection of advanced engineering projects extracted directly from the official catalog.
            </p>
          </div>

          {/* Interactive Filter Tabs (Dynamically rendering the correct categories) */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  border: `1px solid ${activeCategory === cat ? "rgba(56, 189, 248, 0.5)" : "rgba(255,255,255,0.1)"}`,
                  color: activeCategory === cat ? "#38bdf8" : "#94a3b8",
                  padding: "10px 24px",
                  borderRadius: "100px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)"
                }}
              >
                {cat} ({cat === "All" ? activeProjects.length : activeProjects.filter((p: any) => p.category === cat).length})
              </button>
            ))}
          </div>

          {/* Table Layout - Optimized for Mobile */}
          <div style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "clamp(12px, 3vw, 20px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            backdropFilter: "blur(20px)",
            overflowX: "auto"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "left", color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600, whiteSpace: "nowrap" }}>Project ID</th>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "left", color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600 }}>Title</th>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "right", color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600, whiteSpace: "nowrap" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {filteredProjects.map((project) => {
                    // Logic to format ID based on whether it is a number or string
                    const displayId = typeof project.id === 'number'
                      ? `PROJ-${String(project.id).padStart(3, '0')}`
                      : project.id;

                    return (
                      <motion.tr
                        key={project.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        <td style={{ padding: "clamp(12px, 2vw, 20px) clamp(8px, 2vw, 16px)", verticalAlign: "top", whiteSpace: "nowrap" }}>
                          <span style={{
                            color: "#e2e8f0", fontFamily: "monospace", fontSize: "0.85rem", letterSpacing: "0.05em",
                            background: "rgba(255,255,255,0.05)", padding: "4px 8px", borderRadius: "6px", fontWeight: 700
                          }}>
                            {displayId}
                          </span>
                        </td>
                        <td style={{ padding: "clamp(12px, 2vw, 20px) clamp(8px, 2vw, 16px)", color: "#f8fafc", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", fontWeight: 500, lineHeight: 1.5, wordBreak: "break-word", verticalAlign: "top" }}>
                          {project.title}
                        </td>
                        <td style={{ padding: "clamp(12px, 2vw, 20px) clamp(8px, 2vw, 16px)", textAlign: "right", verticalAlign: "top", whiteSpace: "nowrap" }}>
                          <button
                            onClick={onOpenEnquiry}
                            style={{
                              background: "transparent", color: "#38bdf8", border: "none", padding: "0",
                              fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                              display: "inline-flex", alignItems: "center", gap: "6px", justifyContent: "flex-end"
                            }}>
                            <span className="hide-on-mobile">Request</span>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* FAQ (Reused/Assumed existing) */}
      <Contact />

      <style>{`
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}