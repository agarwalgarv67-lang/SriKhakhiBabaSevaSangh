import { useNavigate } from "react-router-dom";
import temple from "../assets/images/temple.jpeg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${temple})`,
      }}
    >
      <div className="overlay">
        <div className="hero-badge" data-aos="zoom-in">
          <span>✨ ESTD. 1983 • DADA FATEHPURA, RAJASTHAN ✨</span>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100">
          Sri Khakhi Baba <span className="highlight-saffron">Seva Sangh</span>
        </h1>
        
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Serving Humanity with Devotion & Spiritual Guidance
        </p>
        
        <div className="hero-btn-group" data-aos="fade-up" data-aos-delay="300">
          <button className="know-more-btn" onClick={() => navigate("/about")}>
            Know More
          </button>
          <button className="donate" onClick={() => navigate("/donation")}>
            Donate Now
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