import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaHeart } from "react-icons/fa";
import mela from "../assets/images/mela.jpeg";

function Events() {
  const navigate = useNavigate();

  return (
    <section className="events-home-section">
      <div className="events-home-container">
        <div className="events-home-header" data-aos="fade-up">
          <span className="section-subtitle">CELEBRATIONS & GATHERINGS</span>
          <h2>Spiritual Events</h2>
          <p>Join us in celebrating the divine path of Sri Khakhi Baba through regular satsangs, monthly jagrans, and the grand annual mela.</p>
        </div>

        <div className="events-home-split">
          <div className="events-home-feature-card" data-aos="fade-right" data-aos-delay="100">
            <div className="feature-card-img-wrapper">
              <img src={mela} alt="Annual Mahotsav" />
              <span className="event-tag">Major Festival</span>
            </div>
            <div className="feature-card-body">
              <h3>Falgun Badi Amavasya Mahotsav</h3>
              <p>The annual mela is the crown jewel of our celebrations. Devotees carry Baba's holy Khadau, Chimta, and Kamandal in a grand Shobha Yatra to the temple hill.</p>
              
              <div className="event-info-mini">
                <span><FaCalendarAlt /> Feb - Mar Annually</span>
                <span><FaMapMarkerAlt /> Sri Khakhi Dham, Rajasthan</span>
              </div>
            </div>
          </div>

          <div className="events-home-sidebar" data-aos="fade-left" data-aos-delay="100">
            <div className="sidebar-event-item">
              <div className="sidebar-icon-box">
                <FaBullhorn />
              </div>
              <div className="sidebar-content">
                <h4>Grand Monthly Jagran</h4>
                <p>A night-long vigil of devotional singing and bhajans on Shukla Paksha Dwadashi.</p>
                <span className="sidebar-meta"><FaCalendarAlt /> Every Month | Hyderabad Office</span>
              </div>
            </div>

            <div className="sidebar-event-item">
              <div className="sidebar-icon-box">
                <FaBullhorn />
              </div>
              <div className="sidebar-content">
                <h4>Weekly Bhajans & Satsang</h4>
                <p>Local prayers and spiritual gatherings for community coordination and blessings.</p>
                <span className="sidebar-meta"><FaCalendarAlt /> Every Weekend | Ashram Centers</span>
              </div>
            </div>

            <div className="sidebar-event-item">
              <div className="sidebar-icon-box" style={{ background: '#e8f5e9', color: '#2e7d32' }}>
                <FaHeart />
              </div>
              <div className="sidebar-content">
                <h4>Monthly Social Service & Welfare</h4>
                <p>Feeding the poor, fodder for cows, and distributing blankets in winters.</p>
                <span className="sidebar-meta" style={{ color: '#2e7d32' }}><FaCalendarAlt /> Monthly Drives | Volunteer Invitations Open</span>
              </div>
            </div>

            <button className="view-all-events-btn" onClick={() => navigate("/events")}>
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
