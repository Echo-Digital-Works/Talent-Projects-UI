import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
  };

  return (
    <footer style={{ background: "#f8f9fa", paddingTop: "80px", paddingBottom: "40px", borderTop: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(32px, 6vw, 120px)" }}>

        {/* Main Grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "48px",
          marginBottom: "80px"
        }}>

          {/* Brand Column (Wider) */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", color: "#6c2bd9" }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                TalentProjects
              </span>
            </div>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Empowering engineering students with industry-grade project solutions and technical mentorship.
            </p>
          </div>

          {/* Domains Column */}
          <div>
            <h4 style={{ color: "#1e293b", fontWeight: 800, fontSize: "1.05rem", marginBottom: "24px" }}>
              Domains
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Drone", path: "/domain/Drone" },
                { name: "Mechanical", path: "/domain/Mechanical" },
                { name: "Civil", path: "/domain/Civil" },
                { name: "Robotics", path: "/domain/Robotics" },
                { name: "EE/ECE", path: "/domain/ECE" },
                { name: "Automation", path: "/domain/Automation" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} style={{ color: "#64748b", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#6c2bd9"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#64748b"}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ color: "#1e293b", fontWeight: 800, fontSize: "1.05rem", marginBottom: "24px" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Home", path: "/" },
                { name: "Solutions", path: "/#how-it-works" },
                { name: "Portfolio", path: "/#portfolio" },
                { name: "Our Story", path: "/#our-story" },
                { name: "Expertise", path: "/#expertise" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    style={{ color: "#64748b", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#6c2bd9"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#64748b"}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ color: "#1e293b", fontWeight: 800, fontSize: "1.05rem", marginBottom: "24px" }}>
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ color: "#64748b", fontSize: "0.95rem" }}>talentprojects22@gmail.com</li>
              <li style={{ color: "#64748b", fontSize: "0.95rem" }}>+1 234 567 890</li>
              <li style={{ color: "#64748b", fontSize: "0.95rem" }}>Bangalore, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Echo Digital Works. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
