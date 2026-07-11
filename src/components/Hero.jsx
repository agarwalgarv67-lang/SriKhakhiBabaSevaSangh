import { useNavigate } from "react-router-dom";
import temple from "../assets/images/temple.jpeg";
import { useLang } from "../context/LanguageContext";

function Hero() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      badge: "✨ ESTD. 1983 • DADA FATEHPURA, RAJASTHAN ✨",
      title: "Sri Khakhi Baba",
      highlight: "Seva Sangh",
      subtitle: "Serving Humanity with Devotion & Spiritual Guidance",
      knowMore: "Know More",
      donate: "Donate Now",
    },
    hi: {
      badge: "✨ स्थापित 1983 • डाडा फतेहपुरा, राजस्थान ✨",
      title: "श्री खाखी बाबा",
      highlight: "सेवा संघ",
      subtitle: "भक्ति और आध्यात्मिक मार्गदर्शन से मानवता की सेवा",
      knowMore: "और जानें",
      donate: "दान करें",
    },
  };

  const txt = t[lang];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${temple})`,
      }}
    >
      <div className="overlay">
        <div className="hero-badge" data-aos="zoom-in">
          <span>{txt.badge}</span>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100">
          {txt.title} <span className="highlight-saffron">{txt.highlight}</span>
        </h1>
        
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          {txt.subtitle}
        </p>
        
        <div className="hero-btn-group" data-aos="fade-up" data-aos-delay="300">
          <button className="know-more-btn" onClick={() => navigate("/about")}>
            {txt.knowMore}
          </button>
          <button className="donate" onClick={() => navigate("/donation")}>
            {txt.donate}
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="mouse-wheel-icon">
          <div className="wheel-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;