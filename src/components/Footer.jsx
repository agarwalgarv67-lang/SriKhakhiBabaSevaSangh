import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: About the Trust */}
        <div className="footer-column">
          <h3>Sri Khakhi Baba Seva Sangh</h3>
          <p className="trust-desc">
            A spiritual and charitable trust dedicated to preserving the sacred heritage of Sri Khakhi Baba while serving society through religious, educational, environmental, and community welfare activities.
          </p>
          <p className="reg-no"><strong>Regd. No:</strong> 136/97</p>
        </div>

        {/* Column 2: Registered Office */}
        <div className="footer-column">
          <h3>Registered Office</h3>
          <p className="office-addr">
            <FaMapMarkerAlt className="footer-icon" />
            5-4-425/ 2&3, Station Road,<br />
            Nampally, Hyderabad - 500001<br />
            Telangana, India
          </p>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-column">
          <h3>Contact Details</h3>
          <p>
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+918686001010">+91 86860 01010</a><br />
            <span style={{ paddingLeft: "20px" }}></span>
            <a href="tel:+919391055244">+91 93910 55244</a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:srikhakhibabasevasangh.hyd@gmail.com">srikhakhibabasevasangh.hyd@gmail.com</a>
          </p>
          <p className="social-links">
            <a 
              href="https://instagram.com/khakhi_baba_seva_sangh" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
              title="Instagram"
            >
              <FaInstagram /> @khakhi_baba_seva_sangh
            </a>
          </p>
        </div>

        {/* Column 4: Support/Bank Details */}
        <div className="footer-column">
          <h3>Support Our Mission</h3>
          <div className="bank-details-card">
            <p><FaUniversity className="footer-icon" /> <strong>Tamilnad Mercantile Bank</strong></p>
            <p><strong>A/C No:</strong> 065100050174003</p>
            <p><strong>IFSC Code:</strong> TMBL0000065</p>
            <p><strong>Branch:</strong> Dada Fatehpura, Rajasthan</p>
          </div>
          <Link to="/donation" className="footer-donate-btn">Donate Now</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Khakhi Baba Seva Sangh | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;