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
const droneCategories = ["All"];

// --- DATASET 2: MECHANICAL PROJECTS ---
const mechProjects = [
  { id: 1, title: "Design & Analysis of Poppet valve using composite materials" },
  { id: 2, title: "Failure Analysis and optimization of Planner machine by horizontal Mechanism" },
  { id: 3, title: "Design and Analysis of Pneumatic Trolley for Industrial Applications" },
  { id: 4, title: "FEA Analysis of Aluminum - Copper based Connecting rod" },
  { id: 5, title: "Modeling & Analysis of Suspension Steering System" },
  { id: 6, title: "Tribological analysis on Disc Brake Pad to reduce wear" },
  { id: 7, title: "FEA and Wear rate analysis of Nano coated HSS tools for industrial applications" },
  { id: 8, title: "FEA Analysis of Cam shaft using composite material" },
  { id: 9, title: "FEA and structural analysis on Aircraft wing by using ANSYS and CFD" },
  { id: 10, title: "Design and analysis of scissor jack for Automotive Vehicles" },
  { id: 11, title: "Design & analysis of composite gear wheel" },
  { id: 12, title: "Analysis and Implementation of Impeller using Composite" },
  { id: 13, title: "Design, modeling and analysis of a 3 stage Epi cyclic planetary reduction gear for Aircraft Applications" },
  { id: 14, title: "Design and analysis of rocker arm using composite material" },
  { id: 15, title: "Design and analysis of composite over bridge coupling" },
  { id: 16, title: "Finite element analysis and natural frequency optimization of engine bracket" },
  { id: 17, title: "Analysis of helical coil compression spring for three wheeler automotive front suspension" },
  { id: 18, title: "Fatigue analysis of aluminum alloy wheel under Different Load" },
  { id: 19, title: "Design and analysis of connecting rod using Aluminum alloy" },
  { id: 20, title: "Finite element analysis and optimization of piston for automotive vehicle" }
];
const mechCategories = ["All"];

// --- DATASET 3: CIVIL PROJECTS ---
const civilProjects = [
  // Embedded Systems
  { id: 1, category: "Embedded Systems", title: "Human health monitoring mobile phone application by using the wireless nano sensor based embedded system" },
  { id: 2, category: "Embedded Systems", title: "Petrol Bunk Automation with prepaid cards and GSM Communication identification" },
  { id: 3, category: "Embedded Systems", title: "Water management system using dynamic IP based Embedded Web server in real time" },
  { id: 4, category: "Embedded Systems", title: "Real time vehicle monitoring and tracking system based on embedded and android application" },
  { id: 5, category: "Embedded Systems", title: "Embedded Micro controller-based Robots for weather forecasting" },

  // IoT Based Projects
  { id: 6, category: "IoT Based Projects", title: "Smart Safety Monitoring System for Sewage Workers with Two Way Communication" },
  { id: 7, category: "IoT Based Projects", title: "Health Monitoring System for Elderly and Disabled People" },
  { id: 8, category: "IoT Based Projects", title: "Cultivation of Cash Crops under Automated Greenhouse using Internet of Things (IoT)" },
  { id: 9, category: "IoT Based Projects", title: "Forest Fire Alerting System with GPS Co-ordinates Using IoT" },
  { id: 10, category: "IoT Based Projects", title: "IoT-based Intelligent Waste Bin" },

  // Robotics Projects
  { id: 11, category: "Robotics Projects", title: "Infrared Light tracing Robot (TV Remote controlled)" },
  { id: 12, category: "Robotics Projects", title: "Embedded Micro controller-based Robots for weather forecasting" },
  { id: 13, category: "Robotics Projects", title: "Self-Guided Advanced Robotic Wheel Chair for Emergency patient Transportation system for present locations" },
  { id: 14, category: "Robotics Projects", title: "Remote controlled Flying Machine to fertilize fields and conduct aerial surveillances" },
  { id: 15, category: "Robotics Projects", title: "Realization of intelligence monitoring system based on remote sensor technology" },

  // Raspberry Pi
  { id: 16, category: "Raspberry Pi", title: "Smart Agriculture Using Internet of Things with Raspberry Pi" },
  { id: 17, category: "Raspberry Pi", title: "An Efficient Car Parking Management System using raspberry-pi" },
  { id: 18, category: "Raspberry Pi", title: "Road Sign Recognition System for Autonomous Vehicle using Raspberry Pi" },
  { id: 19, category: "Raspberry Pi", title: "Traffic Management by Monitoring Weather Parameters and Pollutants Remotely using Raspberry Pi" },
  { id: 20, category: "Raspberry Pi", title: "Raspberry pi based Remote Virtual Lab Access and capturing physical image of laboratory" },

  // Image Processing
  { id: 21, category: "Image Processing", title: "An Efficient MSB Prediction-Based Method for High-Capacity Reversible Data Hiding in Encrypted Images" },
  { id: 22, category: "Image Processing", title: "Efficient Quantum Information Hiding for Remote Medical Image Sharing" },
  { id: 23, category: "Image Processing", title: "Deep Convolutional Neural Networks for Human Action Recognition Using Depth Maps and Postures" },
  { id: 24, category: "Image Processing", title: "Conceptual view of the IRIS recognition systems in the biometric world using image processing techniques" },
  { id: 25, category: "Image Processing", title: "Lung lesion extraction using a toboggan based growing automatic segmentation approach" },

  // Biomedical Projects
  { id: 26, category: "Biomedical Projects", title: "Realtime patient specific classification by 1_D convolution neural networks" },
  { id: 27, category: "Biomedical Projects", title: "Medical image synthesis with deep convolution adversarial networks" },
  { id: 28, category: "Biomedical Projects", title: "Computer Aided Diagnosis of label free3_D optical coherence microscopy images of human cervical tissue" },
  { id: 29, category: "Biomedical Projects", title: "Ohmic and Electronic Health Record Big Data Analytics for Precision Medicine" },
  { id: 30, category: "Biomedical Projects", title: "Glucose Monitoring Individuals with Diabetes Using Long Term Implanted Sensor/ Telemetry System and Model" },

  // Power Electronics
  { id: 31, category: "Power Electronics", title: "Implementation of a Novel Hybrid UPQC Topology Endowed with an Isolated Bidirectional DC–DC Converter at DC link" },
  { id: 32, category: "Power Electronics", title: "LQR Control of Single-Phase Grid-Tied PUC5 Inverter with LCL Filter" },
  { id: 33, category: "Power Electronics", title: "A Cooperative Adaptive Droop Based Energy Management and Optimal Voltage Regulation Scheme for DC Microgrids" },
  { id: 34, category: "Power Electronics", title: "Solar PV Energy Generation System Interfaced to Three Phase Grid with Improved Power Quality" },
  { id: 35, category: "Power Electronics", title: "An Inductive-Power-Transfer Converter with High Efficiency Throughout Battery-Charging Process" },

  // MATLAB Projects
  { id: 36, category: "MATLAB Projects", title: "Portable Camera Based Text Reading of Objects for Blind Persons" },
  { id: 37, category: "MATLAB Projects", title: "Automatic Classification of Intracardiac Tumor and Thrombi in Echocardiography Based on Sparse Representation" },
  { id: 38, category: "MATLAB Projects", title: "Fast and Adaptive Detection of Pulmonary Nodules in Thoracic CT Images Using a Hierarchical Vector Quantization Scheme" },
  { id: 39, category: "MATLAB Projects", title: "Cloth And Pattern Recognition for Visually Impaired People" }
];
const civilCategories = ["All", "Embedded Systems", "IoT Based Projects", "Robotics Projects", "Raspberry Pi", "Image Processing", "Biomedical Projects", "Power Electronics", "MATLAB Projects"];

// --- DATASET 4: ROBOTICS PROJECTS ---
const roboticsProjects = [
  { id: 1, category: "Embedded Systems", title: "Human health monitoring mobile phone application by using the wireless nano sensor based embedded system" },
  { id: 2, category: "Embedded Systems", title: "Petrol Bunk Automation with prepaid cards and GSM Communication identification" },
  { id: 3, category: "Embedded Systems", title: "Water management system using dynamic IP based Embedded Web server in real time" },
  { id: 4, category: "Embedded Systems", title: "Real time vehicle monitoring and tracking system based on embedded and android application" },
  { id: 5, category: "Embedded Systems", title: "Embedded Micro controller-based Robots for weather forecasting" },

  // IoT Based Projects
  { id: 6, category: "IoT Based Projects", title: "Smart Safety Monitoring System for Sewage Workers with Two Way Communication" },
  { id: 7, category: "IoT Based Projects", title: "Health Monitoring System for Elderly and Disabled People" },
  { id: 8, category: "IoT Based Projects", title: "Cultivation of Cash Crops under Automated Greenhouse using Internet of Things (IoT)" },
  { id: 9, category: "IoT Based Projects", title: "Forest Fire Alerting System with GPS Co-ordinates Using IoT" },
  { id: 10, category: "IoT Based Projects", title: "IoT-based Intelligent Waste Bin" },

  // Robotics Projects
  { id: 11, category: "Robotics Projects", title: "Infrared Light tracing Robot (TV Remote controlled)" },
  { id: 12, category: "Robotics Projects", title: "Embedded Micro controller-based Robots for weather forecasting" },
  { id: 13, category: "Robotics Projects", title: "Self-Guided Advanced Robotic Wheel Chair for Emergency patient Transportation system for present locations" },
  { id: 14, category: "Robotics Projects", title: "Remote controlled Flying Machine to fertilize fields and conduct aerial surveillances" },
  { id: 15, category: "Robotics Projects", title: "Realization of intelligence monitoring system based on remote sensor technology" },

  // Raspberry Pi
  { id: 16, category: "Raspberry Pi", title: "Smart Agriculture Using Internet of Things with Raspberry Pi" },
  { id: 17, category: "Raspberry Pi", title: "An Efficient Car Parking Management System using raspberry-pi" },
  { id: 18, category: "Raspberry Pi", title: "Road Sign Recognition System for Autonomous Vehicle using Raspberry Pi" },
  { id: 19, category: "Raspberry Pi", title: "Traffic Management by Monitoring Weather Parameters and Pollutants Remotely using Raspberry Pi" },
  { id: 20, category: "Raspberry Pi", title: "Raspberry pi based Remote Virtual Lab Access and capturing physical image of laboratory" },

  // Image Processing
  { id: 21, category: "Image Processing", title: "An Efficient MSB Prediction-Based Method for High-Capacity Reversible Data Hiding in Encrypted Images" },
  { id: 22, category: "Image Processing", title: "Efficient Quantum Information Hiding for Remote Medical Image Sharing" },
  { id: 23, category: "Image Processing", title: "Deep Convolutional Neural Networks for Human Action Recognition Using Depth Maps and Postures" },
  { id: 24, category: "Image Processing", title: "Conceptual view of the IRIS recognition systems in the biometric world using image processing techniques" },
  { id: 25, category: "Image Processing", title: "Lung lesion extraction using a toboggan based growing automatic segmentation approach" },

  // Biomedical Projects
  { id: 26, category: "Biomedical Projects", title: "Realtime patient specific classification by 1_D convolution neural networks" },
  { id: 27, category: "Biomedical Projects", title: "Medical image synthesis with deep convolution adversarial networks" },
  { id: 28, category: "Biomedical Projects", title: "Computer Aided Diagnosis of label free3_D optical coherence microscopy images of human cervical tissue" },
  { id: 29, category: "Biomedical Projects", title: "Ohmic and Electronic Health Record Big Data Analytics for Precision Medicine" },
  { id: 30, category: "Biomedical Projects", title: "Glucose Monitoring Individuals with Diabetes Using Long Term Implanted Sensor/ Telemetry System and Model" },

  // Power Electronics
  { id: 31, category: "Power Electronics", title: "Implementation of a Novel Hybrid UPQC Topology Endowed with an Isolated Bidirectional DC–DC Converter at DC link" },
  { id: 32, category: "Power Electronics", title: "LQR Control of Single-Phase Grid-Tied PUC5 Inverter with LCL Filter" },
  { id: 33, category: "Power Electronics", title: "A Cooperative Adaptive Droop Based Energy Management and Optimal Voltage Regulation Scheme for DC Microgrids" },
  { id: 34, category: "Power Electronics", title: "Solar PV Energy Generation System Interfaced to Three Phase Grid with Improved Power Quality" },
  { id: 35, category: "Power Electronics", title: "An Inductive-Power-Transfer Converter with High Efficiency Throughout Battery-Charging Process" },

  // MATLAB Projects
  { id: 36, category: "MATLAB Projects", title: "Portable Camera Based Text Reading of Objects for Blind Persons" },
  { id: 37, category: "MATLAB Projects", title: "Automatic Classification of Intracardiac Tumor and Thrombi in Echocardiography Based on Sparse Representation" },
  { id: 38, category: "MATLAB Projects", title: "Fast and Adaptive Detection of Pulmonary Nodules in Thoracic CT Images Using a Hierarchical Vector Quantization Scheme" },
  { id: 39, category: "MATLAB Projects", title: "Cloth And Pattern Recognition for Visually Impaired People" }
];
const roboticsCategories = ["All", "Embedded Systems", "IoT Based Projects", "Robotics Projects", "Raspberry Pi", "Image Processing", "Biomedical Projects", "Power Electronics", "MATLAB Projects"];

// --- DATASET 5: EEE/ECE PROJECTS ---
const eceProjects = [
  { id: 1, title: "Material Handling Robot with Obstacle Detection" },
  { id: 2, title: "Fuel level monitoring in internal combustion engines" },
  { id: 3, title: "Design and Construction of Solar Power-Based Lighting System and light controller with post" },
  { id: 4, title: "Fabrication of six legged robot for climbing irregular surface six legged robot for climbing over steps" },
  { id: 5, title: "Towards an isochronous wireless communication system for industrial automation" },
  { id: 6, title: "Design and Analysis of Full Bridge LLC Resonant Converter for Wireless Power Transfer Applications" },
  { id: 7, title: "Fault-Fuzzy Control Strategies for T-Type Three-Level Inverters Considering Neutral-Point Voltage Oscillations" },
  { id: 8, title: "A High Step-Up Dual-Source Three-Phase Inverter Topology With Decoupled and Reliable Control Algorithm" },
  { id: 9, title: "An Effective Sliding Mode Control Design for a Grid-Connected Multilevel Inverter" },
  { id: 10, title: "LQR Control of Single-Phase Grid-Tied Inverter With LCL Filter" },
  { id: 11, title: "Modulated Model Predictive Control for Four-Leg Inverters With Online Duty Ratio Optimization" },
  { id: 12, title: "Variable Speed Operation of Brushless Doubly Fed Reluctance Machine Drive Using Model Predictive Current Control Technique" },
  { id: 13, title: "Robust Current Control of Grid-Tied Inverters Affected by LCL Filter" },
  { id: 14, title: "Frequency Adaptive Grid Voltage Sensorless Control of LCL-Filtered Inverter Based on controller" },
  { id: 15, title: "A Simple Method of Current Controlled Grid-Connected Inverters" },
  { id: 16, title: "Two-Mode Controlled Single/Dual-Input DC-AC Inverter with Wide-range DC Input" },
  { id: 17, title: "Generalized Cockcroft-Walton Multiplier Voltage Z-Source Inverters" },
  { id: 18, title: "Control of LC-Filtered Voltage Source Inverters With Optimal Switching Sequence" },
  { id: 19, title: "Analysis of Single-Phase Grid-Tied Inverter With PDM MPPT-Controlled Converter" },
  { id: 20, title: "Controller Design and Implementation of Solar Panel Companion Inverters" },
  { id: 21, title: "A Controller for Cascaded Inverters in Grid-Connected Applications" },
  { id: 22, title: "Controller for LCL-Filtered Grid-Tied Inverter With Minimum Sensors" },
  { id: 23, title: "AC Current Control for a Single-Stage Current Source Inverter in Motor Drive Application" }
];
const eceCategories = ["All"];

// --- DATASET 6: AUTOMATION PROJECTS ---
const automationProjects = [
  { id: 1, category: "Embedded Systems", title: "Human health monitoring mobile phone application by using the wireless nano sensor based embedded system" },
  { id: 2, category: "Embedded Systems", title: "Petrol Bunk Automation with prepaid cards and GSM Communication identification" },
  { id: 3, category: "Embedded Systems", title: "Water management system using dynamic IP based Embedded Web server in real time" },
  { id: 4, category: "Embedded Systems", title: "Real time vehicle monitoring and tracking system based on embedded and android application" },
  { id: 5, category: "Embedded Systems", title: "Embedded Micro controller-based Robots for weather forecasting" },

  // IoT Based Projects
  { id: 6, category: "IoT Based Projects", title: "Smart Safety Monitoring System for Sewage Workers with Two Way Communication" },
  { id: 7, category: "IoT Based Projects", title: "Health Monitoring System for Elderly and Disabled People" },
  { id: 8, category: "IoT Based Projects", title: "Cultivation of Cash Crops under Automated Greenhouse using Internet of Things (IoT)" },
  { id: 9, category: "IoT Based Projects", title: "Forest Fire Alerting System with GPS Co-ordinates Using IoT" },
  { id: 10, category: "IoT Based Projects", title: "IoT-based Intelligent Waste Bin" },

  // Robotics Projects
  { id: 11, category: "Robotics Projects", title: "Infrared Light tracing Robot (TV Remote controlled)" },
  { id: 12, category: "Robotics Projects", title: "Embedded Micro controller-based Robots for weather forecasting" },
  { id: 13, category: "Robotics Projects", title: "Self-Guided Advanced Robotic Wheel Chair for Emergency patient Transportation system for present locations" },
  { id: 14, category: "Robotics Projects", title: "Remote controlled Flying Machine to fertilize fields and conduct aerial surveillances" },
  { id: 15, category: "Robotics Projects", title: "Realization of intelligence monitoring system based on remote sensor technology" },

  // Raspberry Pi
  { id: 16, category: "Raspberry Pi", title: "Smart Agriculture Using Internet of Things with Raspberry Pi" },
  { id: 17, category: "Raspberry Pi", title: "An Efficient Car Parking Management System using raspberry-pi" },
  { id: 18, category: "Raspberry Pi", title: "Road Sign Recognition System for Autonomous Vehicle using Raspberry Pi" },
  { id: 19, category: "Raspberry Pi", title: "Traffic Management by Monitoring Weather Parameters and Pollutants Remotely using Raspberry Pi" },
  { id: 20, category: "Raspberry Pi", title: "Raspberry pi based Remote Virtual Lab Access and capturing physical image of laboratory" },

  // Image Processing
  { id: 21, category: "Image Processing", title: "An Efficient MSB Prediction-Based Method for High-Capacity Reversible Data Hiding in Encrypted Images" },
  { id: 22, category: "Image Processing", title: "Efficient Quantum Information Hiding for Remote Medical Image Sharing" },
  { id: 23, category: "Image Processing", title: "Deep Convolutional Neural Networks for Human Action Recognition Using Depth Maps and Postures" },
  { id: 24, category: "Image Processing", title: "Conceptual view of the IRIS recognition systems in the biometric world using image processing techniques" },
  { id: 25, category: "Image Processing", title: "Lung lesion extraction using a toboggan based growing automatic segmentation approach" },

  // Biomedical Projects
  { id: 26, category: "Biomedical Projects", title: "Realtime patient specific classification by 1_D convolution neural networks" },
  { id: 27, category: "Biomedical Projects", title: "Medical image synthesis with deep convolution adversarial networks" },
  { id: 28, category: "Biomedical Projects", title: "Computer Aided Diagnosis of label free3_D optical coherence microscopy images of human cervical tissue" },
  { id: 29, category: "Biomedical Projects", title: "Ohmic and Electronic Health Record Big Data Analytics for Precision Medicine" },
  { id: 30, category: "Biomedical Projects", title: "Glucose Monitoring Individuals with Diabetes Using Long Term Implanted Sensor/ Telemetry System and Model" },

  // Power Electronics
  { id: 31, category: "Power Electronics", title: "Implementation of a Novel Hybrid UPQC Topology Endowed with an Isolated Bidirectional DC–DC Converter at DC link" },
  { id: 32, category: "Power Electronics", title: "LQR Control of Single-Phase Grid-Tied PUC5 Inverter with LCL Filter" },
  { id: 33, category: "Power Electronics", title: "A Cooperative Adaptive Droop Based Energy Management and Optimal Voltage Regulation Scheme for DC Microgrids" },
  { id: 34, category: "Power Electronics", title: "Solar PV Energy Generation System Interfaced to Three Phase Grid with Improved Power Quality" },
  { id: 35, category: "Power Electronics", title: "An Inductive-Power-Transfer Converter with High Efficiency Throughout Battery-Charging Process" },

  // MATLAB Projects
  { id: 36, category: "MATLAB Projects", title: "Portable Camera Based Text Reading of Objects for Blind Persons" },
  { id: 37, category: "MATLAB Projects", title: "Automatic Classification of Intracardiac Tumor and Thrombi in Echocardiography Based on Sparse Representation" },
  { id: 38, category: "MATLAB Projects", title: "Fast and Adaptive Detection of Pulmonary Nodules in Thoracic CT Images Using a Hierarchical Vector Quantization Scheme" },
  { id: 39, category: "MATLAB Projects", title: "Cloth And Pattern Recognition for Visually Impaired People" }
];
const automationCategories = ["All", "Embedded Systems", "IoT Based Projects", "Robotics Projects", "Raspberry Pi", "Image Processing", "Biomedical Projects", "Power Electronics", "MATLAB Projects"];


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
    <div style={{ background: "#ffffff", width: "100%", minHeight: "100vh" }}>

      {/* 1. Domain Hero Section */}
      <section className="domain-hero" style={{
        position: "relative",
        background: "#ffffff",
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
          background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(139,92,246,0.1) 100%)",
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
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "#0f172a",
            marginBottom: "24px", letterSpacing: "-0.02em", lineHeight: 1.1
          }}>
            {domainTitle}
          </h1>

          <p style={{ color: "#475569", fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "650px", lineHeight: 1.6, marginBottom: "48px" }}>
            Innovation is Life. We provide comprehensive project solutions across PLC, HMI, SCADA, VFD, IoT, Embedded Systems, and PCB Design for final year college students.
          </p>

          {/* Hero Contact Info */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+917904075373" style={{
              display: "flex", alignItems: "center", gap: "12px", background: "white", color: "#0f172a",
              padding: "16px 32px", borderRadius: "100px", fontWeight: 800, textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)", transition: "transform 0.2s"
            }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91 79040 75373
            </a>
            <a href="mailto:talentprojects22@gmail.com" style={{
              display: "flex", alignItems: "center", gap: "12px", background: "rgba(0,0,0,0.02)", color: "#0f172a",
              padding: "16px 32px", borderRadius: "100px", fontWeight: 700, textDecoration: "none", border: "1px solid rgba(0,0,0,0.08)",
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
                background: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.08)",
                padding: "8px 20px",
                borderRadius: "100px",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#0f172a"; e.currentTarget.style.background = "rgba(0,0,0,0.05)"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              Back
            </button>
          </div>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Master Project <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6c2bd9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Database</span>
            </h2>
            <p style={{ color: "#475569", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
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
                  border: `1px solid ${activeCategory === cat ? "rgba(56, 189, 248, 0.5)" : "rgba(0,0,0,0.08)"}`,
                  color: activeCategory === cat ? "#38bdf8" : "#64748b",
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
            background: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "20px",
            padding: "clamp(12px, 3vw, 20px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            backdropFilter: "blur(20px)",
            overflowX: "auto"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "left", color: "#64748b", fontSize: "0.9rem", fontWeight: 600, whiteSpace: "nowrap" }}>Project ID</th>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "left", color: "#64748b", fontSize: "0.9rem", fontWeight: 600 }}>Title</th>
                  <th style={{ padding: "clamp(12px, 2vw, 16px)", textAlign: "right", color: "#64748b", fontSize: "0.9rem", fontWeight: 600, whiteSpace: "nowrap" }}>Action</th>
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
                        style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
                      >
                        <td style={{ padding: "clamp(12px, 2vw, 20px) clamp(8px, 2vw, 16px)", verticalAlign: "top", whiteSpace: "nowrap" }}>
                          <span style={{
                            color: "#475569", fontFamily: "monospace", fontSize: "0.85rem", letterSpacing: "0.05em",
                            background: "rgba(0,0,0,0.04)", padding: "4px 8px", borderRadius: "6px", fontWeight: 700
                          }}>
                            {displayId}
                          </span>
                        </td>
                        <td style={{ padding: "clamp(12px, 2vw, 20px) clamp(8px, 2vw, 16px)", color: "#1e293b", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", fontWeight: 500, lineHeight: 1.5, wordBreak: "break-word", verticalAlign: "top" }}>
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