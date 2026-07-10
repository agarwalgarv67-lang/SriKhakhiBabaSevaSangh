import { useNavigate } from "react-router-dom";
import baba from "../assets/images/baba.jpeg";
import { useLang } from "../context/LanguageContext";

function About() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      sectionSubtitle: "WELCOME TO THE ASHRAM",
      heading: "Sri Khakhi Baba Seva Sangh",
      primary:
        "Sri Khakhi Baba Seva Sangh is a spiritual and charitable trust dedicated to preserving the sacred heritage of Sri Khakhi Baba while serving society through religious, educational, environmental, and community welfare activities.",
      secondary:
        "For decades, the trust has worked tirelessly to maintain Sri Khakhi Dham temple, organize annual religious celebrations, support the local government senior secondary school, run veterinary care operations, and plant thousands of trees across Khetri's scenic hills.",
      btn: "Read Our History",
    },
    hi: {
      sectionSubtitle: "आश्रम में आपका स्वागत है",
      heading: "श्री खाखी बाबा सेवा संघ",
      primary:
        "श्री खाखी बाबा सेवा संघ एक आध्यात्मिक एवं धर्मार्थ न्यास है, जो श्री खाखी बाबा की पावन विरासत को संरक्षित करते हुए धार्मिक, शैक्षणिक, पर्यावरणीय और सामुदायिक कल्याण कार्यों के माध्यम से समाज की सेवा करता है।",
      secondary:
        "दशकों से यह न्यास श्री खाखी धाम मंदिर के रख-रखाव, वार्षिक धार्मिक उत्सवों के आयोजन, स्थानीय सरकारी वरिष्ठ माध्यमिक विद्यालय के समर्थन, पशु चिकित्सा कार्यों और खेतड़ी की पहाड़ियों पर हजारों पेड़ लगाने के लिए अथक प्रयास करता रहा है।",
      btn: "हमारा इतिहास पढ़ें",
    },
  };

  const txt = t[lang];

  return (
    <section className="about-home-section">
      <div className="about-home-container">
        <div className="about-home-image-box" data-aos="fade-right">
          <img src={baba} alt="Sri Khakhi Baba" className="baba-portrait" />
          <div className="image-frame-decoration"></div>
        </div>

        <div className="about-home-text-box" data-aos="fade-left">
          <span className="section-subtitle">{txt.sectionSubtitle}</span>
          <h2>{txt.heading}</h2>

          <p className="primary-para">{txt.primary}</p>

          <p className="secondary-para">{txt.secondary}</p>

          <button className="read-more-btn" onClick={() => navigate("/about")}>
            {txt.btn}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;