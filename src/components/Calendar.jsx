import { FaCalendarAlt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import calendarImg from "../assets/images/calendar_2026_2027.jpg";
import { useLang } from "../context/LanguageContext";

function Calendar() {
  const { lang } = useLang();

  const t = {
    en: {
      sectionSubtitle: "OFFICIAL SCHEDULE (2026 - 2027)",
      heading: "Bhajan & Festival Calendar",
      intro: "Official dates for Shukla Paksha Dwadashi monthly bhajans and major Indian festivals.",
      bhajansTitle: "Monthly Sudi Baras Bhajans",
      bhajansDesc:
        "Devotional bhajans in memory of Sant Shiromani Khakhi Ji Maharaj take place every month on Sudi Baras (Shukla Paksha Dwadashi). Key upcoming dates include Chaitra Sudi 12 (29 March 2026), Kartik Sudi 12 (21 November 2026), and the grand Falgun Mela on 8 March 2027.",
      festTitle: "Major Celebrations & Festivals",
      festDesc:
        "The calendar lists prominent Hindu festivals celebrated by the Sangh, including Holika Dahan (2 March 2026), Hanuman Jayanti (2 April 2026), Guru Purnima (29 July 2026), Janmashtami (4 September 2026), and Deepawali (8 November 2026). Devotees are invited to participate in all rituals.",
      contactHeading: "📞 Contact Coordinators",
    },
    hi: {
      sectionSubtitle: "आधिकारिक कार्यक्रम (2026 - 2027)",
      heading: "भजन एवं उत्सव कैलेंडर",
      intro: "शुक्ल पक्ष द्वादशी के मासिक भजनों और प्रमुख भारतीय त्योहारों की आधिकारिक तिथियाँ।",
      bhajansTitle: "मासिक सुदी बारस भजन",
      bhajansDesc:
        "संत शिरोमणि खाखी जी महाराज की स्मृति में प्रत्येक माह सुदी बारस (शुक्ल पक्ष द्वादशी) को भक्ति भजन आयोजित होते हैं। प्रमुख आगामी तिथियाँ: चैत्र सुदी 12 (29 मार्च 2026), कार्तिक सुदी 12 (21 नवंबर 2026), और भव्य फाल्गुन मेला 8 मार्च 2027।",
      festTitle: "प्रमुख उत्सव एवं त्योहार",
      festDesc:
        "कैलेंडर में संघ द्वारा मनाए जाने वाले प्रमुख हिंदू त्योहारों की सूची है, जिनमें होलिका दहन (2 मार्च 2026), हनुमान जयंती (2 अप्रैल 2026), गुरु पूर्णिमा (29 जुलाई 2026), जन्माष्टमी (4 सितंबर 2026), और दीपावली (8 नवंबर 2026) शामिल हैं।",
      contactHeading: "📞 समन्वयकों से संपर्क करें",
    },
  };

  const txt = t[lang];

  return (
    <section className="calendar-home-section" style={{ background: '#ffffff', padding: '60px 0' }}>
      <div className="calendar-section" style={{ margin: '0 auto' }}>
        <div className="calendar-header" data-aos="fade-up">
          <span
            className="section-subtitle"
            style={{ display: 'block', textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', color: '#ff9800', letterSpacing: '2px', marginBottom: '8px' }}
          >
            {txt.sectionSubtitle}
          </span>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        <div className="calendar-content-centered" data-aos="zoom-in" data-aos-delay="100">
          <img src={calendarImg} alt="Bhajan & Festival Calendar 2026-27" className="calendar-full-image" />
        </div>

        <div className="calendar-bottom-info">
          <div className="calendar-info-grid">
            <div className="calendar-info-card" data-aos="fade-right" data-aos-delay="200">
              <h3>
                <FaCalendarAlt /> {txt.bhajansTitle}
              </h3>
              <p>{txt.bhajansDesc}</p>
            </div>

            <div className="calendar-info-card" data-aos="fade-left" data-aos-delay="200">
              <h3>
                <FaInfoCircle /> {txt.festTitle}
              </h3>
              <p>{txt.festDesc}</p>
            </div>
          </div>

          <div className="calendar-contacts">
            <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>{txt.contactHeading}</h4>
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
