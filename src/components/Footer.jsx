import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

function Footer() {
  const { lang } = useLang();

  const t = {
    en: {
      about: "Sri Khakhi Baba Seva Sangh",
      aboutDesc:
        "A spiritual and charitable trust dedicated to preserving the sacred heritage of Sri Khakhi Baba while serving society through religious, educational, environmental, and community welfare activities.",
      regNo: "Regd. No:",
      officeTitle: "Registered Office",
      officeAddr: (
        <>
          5-4-425/ 2&3, Station Road,<br />
          Nampally, Hyderabad - 500001<br />
          Telangana, India
        </>
      ),
      contactTitle: "Contact Details",
      supportTitle: "Support Our Mission",
      branch: "Branch:",
      donateBtn: "Donate Now",
      copyright: `© ${new Date().getFullYear()} Sri Khakhi Baba Seva Sangh | All Rights Reserved`,
    },
    hi: {
      about: "श्री खाखी बाबा सेवा संघ",
      aboutDesc:
        "एक आध्यात्मिक एवं धर्मार्थ न्यास, जो धार्मिक, शैक्षणिक, पर्यावरणीय और सामुदायिक कल्याण गतिविधियों के माध्यम से श्री खाखी बाबा की पवित्र विरासत को संरक्षित करता है।",
      regNo: "पंजीकरण सं.:",
      officeTitle: "पंजीकृत कार्यालय",
      officeAddr: (
        <>
          5-4-425/ 2&3, स्टेशन रोड,<br />
          नामपल्ली, हैदराबाद - 500001<br />
          तेलंगाना, भारत
        </>
      ),
      contactTitle: "संपर्क विवरण",
      supportTitle: "हमारे मिशन का समर्थन करें",
      branch: "शाखा:",
      donateBtn: "दान करें",
      copyright: `© ${new Date().getFullYear()} श्री खाखी बाबा सेवा संघ | सर्वाधिकार सुरक्षित`,
    },
  };

  const txt = t[lang];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: About the Trust */}
        <div className="footer-column">
          <h3>{txt.about}</h3>
          <p className="trust-desc">{txt.aboutDesc}</p>
          <p className="reg-no"><strong>{txt.regNo}</strong> 136/97</p>
        </div>

        {/* Column 2: Registered Office */}
        <div className="footer-column">
          <h3>{txt.officeTitle}</h3>
          <p className="office-addr">
            <FaMapMarkerAlt className="footer-icon" />
            {txt.officeAddr}
          </p>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-column">
          <h3>{txt.contactTitle}</h3>
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
          <h3>{txt.supportTitle}</h3>
          <div className="bank-details-card">
            <p><FaUniversity className="footer-icon" /> <strong>Tamilnad Mercantile Bank</strong></p>
            <p><strong>A/C No:</strong> 065100050174003</p>
            <p><strong>IFSC Code:</strong> TMBL0000065</p>
            <p><strong>{txt.branch}</strong> Dada Fatehpura, Rajasthan</p>
          </div>
          <Link to="/donation" className="footer-donate-btn">{txt.donateBtn}</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{txt.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;