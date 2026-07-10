import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();
  const [activeMap, setActiveMap] = useState("dham");

  return (
    <section className="contact-home-section">
      <div className="contact-home-container">
        <div className="contact-home-header" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2>Connect With Us</h2>
          <p>Have questions about visiting the temple or staying at the dharamshala? Reach out to us or view our maps below.</p>
        </div>

        <div className="contact-home-grid">
          {/* Left Column: Info rows */}
          <div className="contact-home-info-box" data-aos="fade-right" data-aos-delay="100">
            <div className="info-row">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Registered Office</h4>
                <p>5-4-425/2&3, Station Road, Nampally, Hyderabad - 500001</p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h4>Call Us</h4>
                <p><a href="tel:+918686001010">+91 86860 01010</a> / <a href="tel:+919391055244">+91 93910 55244</a></p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p><a href="mailto:srikhakhibabasevasangh.hyd@gmail.com">srikhakhibabasevasangh.hyd@gmail.com</a></p>
              </div>
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <button className="contact-home-btn" onClick={() => navigate("/contact")}>
                <FaPaperPlane /> Send Us a Message
              </button>
            </div>
          </div>

          {/* Right Column: Dual Maps Embed */}
          <div className="contact-card-box map-card" data-aos="fade-left" data-aos-delay="100" style={{ background: "white", padding: "25px", borderTop: "4px solid #ff9800" }}>
            <div className="map-card-header" style={{ marginBottom: "15px" }}>
              <h3 style={{ fontSize: "18px", color: "#3e2723", fontWeight: "600", margin: 0 }}>
                {activeMap === "dham" ? "Sri Khakhi Dham (Temple)" : "Sri Khakhi Bhavan (Stay)"}
              </h3>
              
              <div className="map-tabs">
                <button 
                  className={`map-tab-btn ${activeMap === "dham" ? "active" : ""}`}
                  onClick={() => setActiveMap("dham")}
                >
                  Temple Hill
                </button>
                <button 
                  className={`map-tab-btn ${activeMap === "bhavan" ? "active" : ""}`}
                  onClick={() => setActiveMap("bhavan")}
                >
                  Dharamshala
                </button>
              </div>
            </div>
            
            <div className="map-embed-container">
              {activeMap === "dham" ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.1488169123847!2d75.8573100762967!3d27.991624376785165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913253b2354714f%3A0xb35fc060d4bcf84b!2sKhakhi%20Dham!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin" 
                  width="100%" 
                  height="260" 
                  style={{ border: 0, borderRadius: "10px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Khakhi Dham Map"
                ></iframe>
              ) : (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.829023473187!2d75.87912977630327!3d28.01119657680076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39132475df8a5e01%3A0xe54e6012ea2c1f4e!2sKhakhi%20Bhavan!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin" 
                  width="100%" 
                  height="260" 
                  style={{ border: 0, borderRadius: "10px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Khakhi Bhavan Map"
                ></iframe>
              )}
            </div>

            <div style={{ marginTop: "12px", textAlign: "right" }}>
              <a 
                href={activeMap === "dham" ? "https://maps.app.goo.gl/1umgqau5kNFRYGPa6" : "https://maps.app.goo.gl/5PJJWLc9mqbsc4Hd7"} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#ff9800",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "13px"
                }}
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;