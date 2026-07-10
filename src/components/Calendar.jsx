import { FaCalendarAlt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import calendarImg from "../assets/images/calendar_2026_2027.jpg";

function Calendar() {
  return (
    <section className="calendar-home-section" style={{ background: '#ffffff', padding: '60px 0' }}>
      <div className="calendar-section" style={{ margin: '0 auto' }}>
        <div className="calendar-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ display: 'block', textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', color: '#ff9800', letterSpacing: '2px', marginBottom: '8px' }}>
            OFFICIAL SCHEDULE (2026 - 2027)
          </span>
          <h2>Bhajan & Festival Calendar</h2>
          <p>Official dates for Shukla Paksha Dwadashi monthly bhajans and major Indian festivals.</p>
        </div>

        <div className="calendar-content-centered" data-aos="zoom-in" data-aos-delay="100">
          <img src={calendarImg} alt="Bhajan & Festival Calendar 2026-27" className="calendar-full-image" />
        </div>

        <div className="calendar-bottom-info">
          <div className="calendar-info-grid">
            <div className="calendar-info-card" data-aos="fade-right" data-aos-delay="200">
              <h3>
                <FaCalendarAlt /> Monthly Sudi Baras Bhajans
              </h3>
              <p>
                Devotional bhajans in memory of Sant Shiromani Khakhi Ji Maharaj take place every month on Sudi Baras (Shukla Paksha Dwadashi). Key upcoming dates include Chaitra Sudi 12 (29 March 2026), Kartik Sudi 12 (21 November 2026), and the grand Falgun Mela on 8 March 2027.
              </p>
            </div>

            <div className="calendar-info-card" data-aos="fade-left" data-aos-delay="200">
              <h3>
                <FaInfoCircle /> Major Celebrations & Festivals
              </h3>
              <p>
                The calendar lists prominent Hindu festivals celebrated by the Sangh, including Holika Dahan (2 March 2026), Hanuman Jayanti (2 April 2026), Guru Purnima (29 July 2026), Janmashtami (4 September 2026), and Deepawali (8 November 2026). Devotees are invited to participate in all rituals.
              </p>
            </div>
          </div>

          <div className="calendar-contacts">
            <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>📞 Contact Coordinators</h4>
            <div className="calendar-contacts-grid">
              <div className="calendar-contact-item">
                <strong>Vinod Agarwal</strong>
                <a href="tel:+918686001010"><FaPhoneAlt /> 8686001010</a>
              </div>
              <div className="calendar-contact-item">
                <strong>Kishan Agarwal</strong>
                <a href="tel:+918121988125"><FaPhoneAlt /> 8121988125</a>
              </div>
              <div className="calendar-contact-item">
                <strong>Pradeep Agarwal</strong>
                <a href="tel:+919391055244"><FaPhoneAlt /> 9391055244</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
