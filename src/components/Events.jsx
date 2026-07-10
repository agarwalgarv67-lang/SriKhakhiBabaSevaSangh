import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaHeart } from "react-icons/fa";
import mela from "../assets/images/bhajan2.jpeg";
import { useLang } from "../context/LanguageContext";

function Events() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      sectionSubtitle: "CELEBRATIONS & GATHERINGS",
      heading: "Spiritual Events",
      intro:
        "Join us in celebrating the divine path of Sri Khakhi Baba through regular satsangs, monthly jagrans, and the grand annual mela.",
      majorFestival: "Major Festival",
      eventTitle: "Falgun Badi Amavasya Mahotsav",
      eventDesc:
        "The annual mela is the crown jewel of our celebrations. Devotees carry Baba's holy Khadau, Chimta, and Kamandal in a grand Shobha Yatra to the temple hill.",
      eventDate: "Feb - Mar Annually",
      eventPlace: "Sri Khakhi Dham, Rajasthan",
      jagranTitle: "Grand Monthly Jagran",
      jagranDesc:
        "A night-long vigil of devotional singing and bhajans on Shukla Paksha Dwadashi.",
      jagranMeta: "Every Month | Hyderabad Office",
      bhajansTitle: "Weekly Bhajans & Satsang",
      bhajansDesc:
        "Local prayers and spiritual gatherings for community coordination and blessings.",
      bhajansMeta: "Every Weekend | Ashram Centers",
      serviceTitle: "Monthly Social Service & Welfare",
      serviceDesc:
        "Feeding the poor, fodder for cows, and distributing blankets in winters.",
      serviceMeta: "Monthly Drives | Volunteer Invitations Open",
      viewAll: "View All Events",
    },
    hi: {
      sectionSubtitle: "उत्सव एवं सत्संग",
      heading: "आध्यात्मिक आयोजन",
      intro:
        "नियमित सत्संगों, मासिक जागरणों और भव्य वार्षिक मेले के माध्यम से श्री खाखी बाबा के दिव्य मार्ग का उत्सव मनाइए।",
      majorFestival: "प्रमुख उत्सव",
      eventTitle: "फाल्गुन बड़ी अमावस्या महोत्सव",
      eventDesc:
        "वार्षिक मेला हमारे उत्सवों का मुकुट मणि है। भक्तगण बाबा की पवित्र खड़ाऊँ, चिमटा और कमंडल को भव्य शोभायात्रा में मंदिर की पहाड़ी तक ले जाते हैं।",
      eventDate: "फरवरी - मार्च (प्रतिवर्ष)",
      eventPlace: "श्री खाखी धाम, राजस्थान",
      jagranTitle: "मासिक भव्य जागरण",
      jagranDesc:
        "शुक्ल पक्ष द्वादशी को रात भर भजन-कीर्तन और जागरण का आयोजन।",
      jagranMeta: "प्रत्येक माह | हैदराबाद कार्यालय",
      bhajansTitle: "साप्ताहिक भजन एवं सत्संग",
      bhajansDesc:
        "सामुदायिक समन्वय और आशीर्वाद के लिए स्थानीय प्रार्थनाएँ और आध्यात्मिक सभाएँ।",
      bhajansMeta: "प्रत्येक सप्ताहांत | आश्रम केंद्र",
      serviceTitle: "मासिक समाज सेवा एवं कल्याण",
      serviceDesc:
        "गरीबों को भोजन, गायों को चारा और सर्दियों में कंबल वितरण।",
      serviceMeta: "मासिक अभियान | स्वयंसेवक आमंत्रित हैं",
      viewAll: "सभी आयोजन देखें",
    },
  };

  const txt = t[lang];

  return (
    <section className="events-home-section">
      <div className="events-home-container">
        <div className="events-home-header" data-aos="fade-up">
          <span className="section-subtitle">{txt.sectionSubtitle}</span>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        <div className="events-home-split">
          <div className="events-home-feature-card" data-aos="fade-right" data-aos-delay="100">
            <div className="feature-card-img-wrapper">
              <img src={bhajan2} alt="Annual Mahotsav" />
              <span className="event-tag">{txt.majorFestival}</span>
            </div>
            <div className="feature-card-body">
              <h3>{txt.eventTitle}</h3>
              <p>{txt.eventDesc}</p>

              <div className="event-info-mini">
                <span><FaCalendarAlt /> {txt.eventDate}</span>
                <span><FaMapMarkerAlt /> {txt.eventPlace}</span>
              </div>
            </div>
          </div>

          <div className="events-home-sidebar" data-aos="fade-left" data-aos-delay="100">
            <div className="sidebar-event-item">
              <div className="sidebar-icon-box">
                <FaBullhorn />
              </div>
              <div className="sidebar-content">
                <h4>{txt.jagranTitle}</h4>
                <p>{txt.jagranDesc}</p>
                <span className="sidebar-meta"><FaCalendarAlt /> {txt.jagranMeta}</span>
              </div>
            </div>

            <div className="sidebar-event-item">
              <div className="sidebar-icon-box">
                <FaBullhorn />
              </div>
              <div className="sidebar-content">
                <h4>{txt.bhajansTitle}</h4>
                <p>{txt.bhajansDesc}</p>
                <span className="sidebar-meta"><FaCalendarAlt /> {txt.bhajansMeta}</span>
              </div>
            </div>

            <div className="sidebar-event-item">
              <div className="sidebar-icon-box" style={{ background: '#e8f5e9', color: '#2e7d32' }}>
                <FaHeart />
              </div>
              <div className="sidebar-content">
                <h4>{txt.serviceTitle}</h4>
                <p>{txt.serviceDesc}</p>
                <span className="sidebar-meta" style={{ color: '#2e7d32' }}><FaCalendarAlt /> {txt.serviceMeta}</span>
              </div>
            </div>

            <button className="view-all-events-btn" onClick={() => navigate("/events")}>
              {txt.viewAll}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
