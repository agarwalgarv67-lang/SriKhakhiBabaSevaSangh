import { useNavigate } from "react-router-dom";
import baba from "../assets/images/baba.jpeg";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about-home-section">
      <div className="about-home-container">
        <div className="about-home-image-box" data-aos="fade-right">
          <img src={baba} alt="Sri Khakhi Baba" className="baba-portrait" />
          <div className="image-frame-decoration"></div>
        </div>

        <div className="about-home-text-box" data-aos="fade-left">
          <span className="section-subtitle">WELCOME TO THE ASHRAM</span>
          <h2>Sri Khakhi Baba Seva Sangh</h2>
          
          <p className="primary-para">
            Sri Khakhi Baba Seva Sangh is a spiritual and charitable trust dedicated to
            preserving the sacred heritage of Sri Khakhi Baba while serving society
            through religious, educational, environmental, and community welfare activities.
          </p>
          
          <p className="secondary-para">
            For decades, the trust has worked tirelessly to maintain Sri Khakhi Dham temple,
            organize annual religious celebrations, support the local government senior secondary school, 
            run veterinary care operations, and plant thousands of trees across Khetri's scenic hills.
          </p>

          <button className="read-more-btn" onClick={() => navigate("/about")}>
            Read Our History
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;