import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

const BOUNDARY_MAP_SRC = "https://www.google.com/maps/d/embed?mid=1o68LDPIzeMksEDwX4UrTSOZd9pJJoQU&ehbc=2E312F";

function Contact() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const [activeMap, setActiveMap] = useState("dham");

  const t = {
    en: {
      sectionSubtitle: "GET IN TOUCH",
      heading: "Connect With Us",
      intro:
        "Have questions about visiting the temple or staying at the dharamshala? Reach out to us or view our maps below.",
      officeLabel: "Registered Office",
      officeAddr: "5-4-425/2&3, Station Road, Nampally, Hyderabad - 500001",
      callLabel: "Call Us",
      emailLabel: "Email",
      sendMsg: "Send Us a Message",
      templeTab: "Temple Hill",
      dharamshaTab: "Dharamshala",
      mapTitleDham: "Sri Khakhi Dham (Temple)",
      mapTitleBhavan: "Sri Khakhi Bhavan (Stay)",
      openMaps: "📍 Open in Google Maps",
    },
    hi: {
      sectionSubtitle: "संपर्क करें",
      heading: "हमसे जुड़ें",
      intro:
        "मंदिर दर्शन या धर्मशाला में ठहरने संबंधी प्रश्नों के लिए हमसे संपर्क करें या नीचे दिए गए मानचित्र देखें।",
      officeLabel: "पंजीकृत कार्यालय",
      officeAddr: "5-4-425/2&3, स्टेशन रोड, नामपल्ली, हैदराबाद - 500001",
      callLabel: "फ़ोन करें",
      emailLabel: "ईमेल",
      sendMsg: "हमें संदेश भेजें",
      templeTab: "मंदिर पहाड़ी",
      dharamshaTab: "धर्मशाला",
      mapTitleDham: "श्री खाखी धाम (मंदिर)",
      mapTitleBhavan: "श्री खाखी भवन (ठहरने के लिए)",
      openMaps: "📍 Google Maps में खोलें",
    },
  };

  const txt = t[lang];

  return (
    <section className="contact-home-section">
      <div className="contact-home-container">
        <div className="contact-home-header" data-aos="fade-up">
          <span className="section-subtitle">{txt.sectionSubtitle}</span>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        <div className="contact-home-grid">
          {/* Left Column: Info rows */}
          <div className="contact-home-info-box" data-aos="fade-right" data-aos-delay="100">
            <div className="info-row">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>{txt.officeLabel}</h4>
                <p>{txt.officeAddr}</p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h4>{txt.callLabel}</h4>
                <p>
                  <a href="tel:+918686001010">+91 86860 01010</a> /{" "}
                  <a href="tel:+919391055244">+91 93910 55244</a>
                </p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>{txt.emailLabel}</h4>
                <p>
                  <a href="mailto:srikhakhibabasevasangh.hyd@gmail.com">
                    srikhakhibabasevasangh.hyd@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button className="contact-home-btn" onClick={() => navigate("/contact")}>
                <FaPaperPlane /> {txt.sendMsg}
              </button>
            </div>
          </div>

          {/* Right Column: Dual Maps Embed */}
          <div
            className="contact-card-box map-card"
            data-aos="fade-left"
            data-aos-delay="100"
            style={{ background: "white", padding: "25px", borderTop: "4px solid #ff9800" }}
          >
            <div className="map-card-header" style={{ marginBottom: "15px" }}>
              <h3 style={{ fontSize: "18px", color: "#3e2723", fontWeight: "600", margin: 0 }}>
                {activeMap === "dham" ? txt.mapTitleDham : txt.mapTitleBhavan}
              </h3>

              <div className="map-tabs">
                <button
                  className={`map-tab-btn ${activeMap === "dham" ? "active" : ""}`}
                  onClick={() => setActiveMap("dham")}
                >
                  {txt.templeTab}
                </button>
                <button
                  className={`map-tab-btn ${activeMap === "bhavan" ? "active" : ""}`}
                  onClick={() => setActiveMap("bhavan")}
                >
                  {txt.dharamshaTab}
                </button>
              </div>
            </div>

            <div className="map-embed-container">
              {activeMap === "dham" ? (
                <iframe
                  src={BOUNDARY_MAP_SRC}
                  width="100%"
                  height="325"
                  style={{ border: 0, borderRadius: "10px", marginTop: "-65px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Khakhi Dham Boundary Map"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.5!2d75.8817047!3d28.0111919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912d2148801d4ab%3A0x797a6b6f8541caa0!2sKhakhi%20Bhavan!5e0!3m2!1sen!2sin!4v1720000000002!5m2!1sen!2sin"
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
                href={
                  activeMap === "dham"
                    ? "https://www.google.com/maps/d/viewer?mid=1o68LDPIzeMksEDwX4UrTSOZd9pJJoQU"
                    : "https://maps.app.goo.gl/78GnXC8EiTw4NkAt8"
                }
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#ff9800",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                {txt.openMaps}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;