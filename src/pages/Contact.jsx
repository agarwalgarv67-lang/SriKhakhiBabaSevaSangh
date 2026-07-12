import { useState } from "react";
import { FaLanguage, FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaUserTie, FaPaperPlane, FaCheck } from "react-icons/fa";

function Contact() {
  const [lang, setLang] = useState("en"); // 'en' or 'hi'
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMap, setActiveMap] = useState("dham");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message text dynamically based on selected language
    const intro = lang === "en" 
      ? "Jai Dada ke Nath ki ! New message from Seva Sangh Website:" 
      : "जय डाडा के नाथ की! सेवा संघ वेबसाइट से नया संदेश:";
      
    const nameLabel = lang === "en" ? "Name" : "नाम";
    const emailLabel = lang === "en" ? "Email" : "ईमेल";
    const phoneLabel = lang === "en" ? "Phone" : "फ़ोन";
    const messageLabel = lang === "en" ? "Message/Prayer Request" : "संदेश / प्रार्थना अनुरोध";

    const formattedMessage = `*${intro}*\n\n` +
      `*${nameLabel}:* ${formData.name}\n` +
      `*${emailLabel}:* ${formData.email || (lang === "en" ? "Not provided" : "नहीं दिया गया")}\n` +
      `*${phoneLabel}:* ${formData.phone}\n\n` +
      `*${messageLabel}:*\n${formData.message}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/918686001010?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Simulate UI success alert
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const trustees = [
    { nameEn: "Sri Vinod Kumar Agarwal", nameHi: "श्री विनोद कुमार अग्रवाल", roleEn: "Managing Trustee", roleHi: "प्रबंध न्यासी", phone: "+91 86860 01010" },
    { nameEn: "Sri R.A. Agarwal", nameHi: "श्री आर.ए. अग्रवाल", roleEn: "Trustee", roleHi: "न्यासी", phone: "+91 77990 00022" },
    { nameEn: "Sri Nandkishor Agarwal", nameHi: "श्री नंदकिशोर अग्रवाल", roleEn: "Trustee", roleHi: "न्यासी", phone: "+91 97035 39767" },
    { nameEn: "Sri Kishanlal Agarwal", nameHi: "श्री किशनलाल अग्रवाल", roleEn: "Trustee", roleHi: "न्यासी", phone: "+91 81219 88125" },
    { nameEn: "Sri Sunil Kumar Agarwal", nameHi: "श्री सुनील कुमार अग्रवाल", roleEn: "Trustee", roleHi: "न्यासी", phone: "+91 98480 22445" },
    { nameEn: "Sri Pradeep Agarwal", nameHi: "श्री प्रदीप अग्रवाल", roleEn: "Trustee", roleHi: "न्यासी", phone: "+91 98494 03649" },
  ];

  return (
    <section className="contact-page-container">
      {/* Hero Header */}
      <div className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>{lang === "en" ? "Contact Us" : "हमसे संपर्क करें"}</h1>
          <p>{lang === "en" ? "Reach out to the Seva Sangh for prayers, queries, or support" : "प्रार्थना, जिज्ञासा या सहयोग के लिए सेवा संघ से संपर्क करें"}</p>
        </div>
      </div>

      {/* Control panel for Language Switcher */}
      <div className="contact-controls">
        <div className="lang-toggle-container" style={{ marginLeft: "auto" }}>
          <button 
            className={`lang-btn ${lang === "en" ? "active" : ""}`} 
            onClick={() => setLang("en")}
          >
            <FaLanguage /> English
          </button>
          <button 
            className={`lang-btn ${lang === "hi" ? "active" : ""}`} 
            onClick={() => setLang("hi")}
          >
            <FaLanguage /> हिन्दी
          </button>
        </div>
      </div>

      <div className="contact-layout-wrapper">
        
        {/* Left Column: Form & Map */}
        <div className="contact-forms-column">
          <div className="contact-card-box">
            <h2>{lang === "en" ? "Send us a Message" : "हमें संदेश भेजें"}</h2>
            <p className="card-desc">
              {lang === "en" 
                ? "Fill out the form below, and our trust representatives will get back to you shortly." 
                : "नीचे दिए गए फॉर्म को भरें, और हमारे न्यास प्रतिनिधि शीघ्र ही आपसे संपर्क करेंगे।"}
            </p>

            {formSubmitted ? (
              <div className="form-success-alert fade-in">
                <FaCheck className="success-icon" />
                <div>
                  <h4>{lang === "en" ? "Message Sent Successfully!" : "संदेश सफलतापूर्वक भेजा गया!"}</h4>
                  <p>{lang === "en" ? "Thank you for reaching out. We will contact you soon." : "हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।"}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="interactive-contact-form">
                <div className="form-group">
                  <label htmlFor="name">{lang === "en" ? "Your Name" : "आपका नाम"} *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder={lang === "en" ? "Enter your name" : "अपना नाम दर्ज करें"}
                  />
                </div>

                <div className="form-row-group">
                  <div className="form-group">
                    <label htmlFor="email">{lang === "en" ? "Email Address" : "ईमेल पता"}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="example@mail.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">{lang === "en" ? "Phone Number" : "फ़ोन नंबर"} *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{lang === "en" ? "Your Message / Prayer Request" : "आपका संदेश / प्रार्थना अनुरोध"} *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder={lang === "en" ? "Write your message here..." : "यहाँ अपना संदेश लिखें..."}
                  ></textarea>
                </div>

                <button type="submit" className="submit-form-btn">
                  <FaPaperPlane /> {lang === "en" ? "Send Message" : "संदेश भेजें"}
                </button>
              </form>
            )}
          </div>

          {/* Map Frame Card */}
          <div className="contact-card-box map-card">
            <div className="map-card-header">
              <h2>{activeMap === "dham" 
                ? (lang === "en" ? "Sri Khakhi Dham Location" : "श्री खाखी धाम की स्थिति")
                : (lang === "en" ? "Sri Khakhi Bhavan Location" : "श्री खाखी भवन की स्थिति")}</h2>
              <div className="map-tabs">
                <button 
                  className={`map-tab-btn ${activeMap === "dham" ? "active" : ""}`}
                  onClick={() => setActiveMap("dham")}
                >
                  {lang === "en" ? "Temple Hill" : "मंदिर पहाड़ी"}
                </button>
                <button 
                  className={`map-tab-btn ${activeMap === "bhavan" ? "active" : ""}`}
                  onClick={() => setActiveMap("bhavan")}
                >
                  {lang === "en" ? "Dharamshala Stay" : "धर्मशाला ठहराव"}
                </button>
              </div>
            </div>
            
            <div className="map-embed-container">
              {activeMap === "dham" ? (
                <iframe 
                  src="https://www.google.com/maps/d/embed?mid=1o68LDPIzeMksEDwX4UrTSOZd9pJJoQU&ehbc=2E312F" 
                  width="100%" 
                  height="385" 
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
                  height="320" 
                  style={{ border: 0, borderRadius: "10px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Khakhi Bhavan Location"
                ></iframe>
              )}
            </div>
            
            <div style={{ marginTop: "15px", textAlign: "right" }}>
              <a 
                href={activeMap === "dham" ? "https://www.google.com/maps/d/viewer?mid=1o68LDPIzeMksEDwX4UrTSOZd9pJJoQU" : "https://maps.app.goo.gl/78GnXC8EiTw4NkAt8"} 
                target="_blank" 
                rel="noreferrer"
                className="open-maps-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#ff9800",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "14px"
                }}
              >
                📍 {lang === "en" ? "Open in Google Maps" : "गूगल मैप्स में खोलें"}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Address Cards & Trustees Directory */}
        <div className="contact-info-column">
          
          {/* Address Details */}
          <div className="contact-card-box highlight-border">
            <h2>📍 {lang === "en" ? "Addresses" : "पता"}</h2>
            
            <div className="address-section">
              <h4>{lang === "en" ? "Temple Location" : "पावन मंदिर स्थल"}</h4>
              <p>
                <strong>Sri Khakhi Baba Seva Sangh</strong><br />
                Dada Fatehpura, Khetri,<br />
                District Jhunjhunu, Rajasthan - 333503<br />
                India
              </p>
            </div>

            <hr className="divider" />

            <div className="address-section">
              <h4>{lang === "en" ? "Registered Office" : "पंजीकृत कार्यालय"}</h4>
              <p>
                <strong>Sri Khakhi Baba Seva Sangh (Regd. 136/97)</strong><br />
                5-4-425/ 2&3, Station Road,<br />
                Nampally, Hyderabad – 500001<br />
                Telangana, India
              </p>
            </div>
          </div>

          {/* Socials & Direct Connect */}
          <div className="contact-card-box">
            <h2>✉ {lang === "en" ? "Online Connect" : "ऑनलाइन संपर्क"}</h2>
            <div className="connect-row">
              <FaEnvelope className="connect-icon" />
              <div>
                <span>Email Address</span>
                <a href="mailto:srikhakhibabasevasangh.hyd@gmail.com">srikhakhibabasevasangh.hyd@gmail.com</a>
              </div>
            </div>
            
            <div className="connect-row">
              <FaInstagram className="connect-icon instagram" />
              <div>
                <span>Instagram Profile</span>
                <a 
                  href="https://instagram.com/khakhi_baba_seva_sangh" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  @khakhi_baba_seva_sangh
                </a>
              </div>
            </div>
          </div>

          {/* Board of Trustees */}
          <div className="contact-card-box">
            <h2>👥 {lang === "en" ? "Board of Trustees" : "न्यास मंडल"}</h2>
            <p className="card-desc">
              {lang === "en" ? "Feel free to contact the trustees directly for support." : "सहयोग या प्रश्न के लिए न्यासियों से सीधे संपर्क कर सकते हैं।"}
            </p>
            
            <div className="trustees-directory">
              {trustees.map((t, index) => (
                <div key={index} className="trustee-member-row">
                  <div className="member-avatar">
                    <FaUserTie />
                  </div>
                  <div className="member-info">
                    <h4>{lang === "en" ? t.nameEn : t.nameHi}</h4>
                    <span>{lang === "en" ? t.roleEn : t.roleHi}</span>
                  </div>
                  <a href={`tel:${t.phone.replace(/\s+/g, '')}`} className="call-member-btn" title="Call">
                    <FaPhoneAlt /> Call
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
