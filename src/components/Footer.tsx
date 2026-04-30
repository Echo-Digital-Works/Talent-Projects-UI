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
    <footer style={{ background: "#ffffff", paddingTop: "80px", paddingBottom: "40px", borderTop: "1px solid #e2e8f0" }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/Untitled design (12).png"
                alt="TalentProjects Logo"
                style={{ height: "40px", objectFit: "contain" }}
              />
              <span style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                <span style={{ color: "#0f172a" }}>Talent</span>
                <span style={{ color: "#6c2bd9" }}>Projects</span>
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
              <li style={{ color: "#64748b", fontSize: "0.95rem" }}>+91 79040 75373</li>
              <li style={{ color: "#64748b", fontSize: "0.95rem" }}>Chennai, India</li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 style={{ color: "#1e293b", fontWeight: 800, fontSize: "1.05rem", marginBottom: "24px" }}>
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { name: "Instagram", url: "https://www.instagram.com/talent_projects", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61561273601161", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/talent-projects-949aa9406", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                { name: "YouTube", url: "https://www.youtube.com/", icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z M9.75 15.02V8.98L15.25 12l-5.5 3.02z" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6c2bd9";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f1f5f9";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon} />
                    {social.name === "Instagram" && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                  </svg>
                </a>
              ))}
            </div>
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
