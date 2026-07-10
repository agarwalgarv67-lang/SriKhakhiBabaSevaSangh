import { useNavigate } from "react-router-dom";
import { FaHeart, FaGraduationCap, FaTree, FaHospital } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

function Donation() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      sectionSubtitle: "SUPPORT OUR CHARITABLE MISSION",
      heading: "Make a Difference Today",
      lead: "Your generous contributions directly support our community initiatives, from animal welfare programs to local school upgrades and environmental conservation.",
      school: "School Upgrades",
      schoolDesc: "Funding smart classrooms, labs, and textbooks.",
      animal: "Animal Welfare",
      animalDesc: "Supporting local veterinary clinics and care centers.",
      env: "Environmental Care",
      envDesc: "Planting trees and maintaining ashram green spaces.",
      btn: "Donate Online",
    },
    hi: {
      sectionSubtitle: "हमारे धर्मार्थ मिशन का समर्थन करें",
      heading: "आज एक फर्क लाइए",
      lead: "आपके उदार योगदान से पशु कल्याण कार्यक्रमों से लेकर स्थानीय विद्यालय उन्नयन और पर्यावरण संरक्षण तक — हमारी सामुदायिक पहलों को सीधे सहयोग मिलता है।",
      school: "विद्यालय उन्नयन",
      schoolDesc: "स्मार्ट कक्षाओं, प्रयोगशालाओं और पाठ्यपुस्तकों के लिए अनुदान।",
      animal: "पशु कल्याण",
      animalDesc: "स्थानीय पशु चिकित्सालयों और देखभाल केंद्रों का समर्थन।",
      env: "पर्यावरण संरक्षण",
      envDesc: "पेड़ लगाना और आश्रम के हरे-भरे स्थानों का रख-रखाव।",
      btn: "ऑनलाइन दान करें",
    },
  };

  const txt = t[lang];

  return (
    <section className="donation-home-section">
      <div className="donation-home-overlay"></div>
      <div className="donation-home-container">
        <div className="donation-home-content">
          <span className="section-subtitle light" data-aos="fade-up">
            {txt.sectionSubtitle}
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100">{txt.heading}</h2>

          <p className="donation-home-lead" data-aos="fade-up" data-aos-delay="150">
            {txt.lead}
          </p>

          <div className="donation-home-causes-grid">
            <div className="cause-item" data-aos="fade-up" data-aos-delay="200">
              <FaGraduationCap className="cause-icon" />
              <h4>{txt.school}</h4>
              <p>{txt.schoolDesc}</p>
            </div>
            <div className="cause-item" data-aos="fade-up" data-aos-delay="300">
              <FaHospital className="cause-icon" />
              <h4>{txt.animal}</h4>
              <p>{txt.animalDesc}</p>
            </div>
            <div className="cause-item" data-aos="fade-up" data-aos-delay="400">
              <FaTree className="cause-icon" />
              <h4>{txt.env}</h4>
              <p>{txt.envDesc}</p>
            </div>
          </div>

          <button
            className="donation-home-btn"
            onClick={() => navigate("/donation")}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaHeart /> {txt.btn}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Donation;