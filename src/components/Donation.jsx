import { useNavigate } from "react-router-dom";
import { FaHeart, FaGraduationCap, FaTree, FaHospital } from "react-icons/fa";

function Donation() {
  const navigate = useNavigate();

  return (
    <section className="donation-home-section">
      <div className="donation-home-overlay"></div>
      <div className="donation-home-container">
        <div className="donation-home-content">
          <span className="section-subtitle light" data-aos="fade-up">SUPPORT OUR CHARITABLE MISSION</span>
          <h2 data-aos="fade-up" data-aos-delay="100">Make a Difference Today</h2>
          
          <p className="donation-home-lead" data-aos="fade-up" data-aos-delay="150">
            Your generous contributions directly support our community initiatives, from animal welfare programs to local school upgrades and environmental conservation.
          </p>

          <div className="donation-home-causes-grid">
            <div className="cause-item" data-aos="fade-up" data-aos-delay="200">
              <FaGraduationCap className="cause-icon" />
              <h4>School Upgrades</h4>
              <p>Funding smart classrooms, labs, and textbooks.</p>
            </div>
            <div className="cause-item" data-aos="fade-up" data-aos-delay="300">
              <FaHospital className="cause-icon" />
              <h4>Animal Welfare</h4>
              <p>Supporting local veterinary clinics and care centers.</p>
            </div>
            <div className="cause-item" data-aos="fade-up" data-aos-delay="400">
              <FaTree className="cause-icon" />
              <h4>Environmental Care</h4>
              <p>Planting trees and maintaining ashram green spaces.</p>
            </div>
          </div>

          <button className="donation-home-btn" onClick={() => navigate("/donation")} data-aos="zoom-in" data-aos-delay="500">
            <FaHeart /> Donate Online
          </button>
        </div>
      </div>
    </section>
  );
}

export default Donation;