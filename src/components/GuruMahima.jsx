import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaPray, FaFire, FaHands, FaArrowRight } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import jyotImg from "../assets/images/jyot.jpeg";

function GuruMahima() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      subtitle: "SACRED SHLOKAS, CHALISA & AARTI",
      heading: "Guru Mahima & Prayers",
      intro:
        "Immerse in the divine wisdom of Sri Guru Gita, the forty verses of Khakhi Chalisa, Panchatattva Stuti, and devotional Aartis of Sri Khakhi Baba Ji.",
      cards: [
        {
          icon: <FaBookOpen />,
          tag: "Guru Gita Shloka",
          title: "Glory of the Sadguru",
          quote: "गुरुरादिरनादिश्च गुरुः परमदैवतम्।\nगुरोः परतरं नास्ति तस्मै श्रीगुरवे नमः॥",
          desc: "The Guru is the supreme deity and the source of ultimate liberation in this world.",
        },
        {
          icon: <FaPray />,
          tag: "Khakhi Chalisa",
          title: "Divine Stuti",
          quote: "चिदानंद पावन परम, श्री खाखी जी को नाम |\nनित्य मन में ध्याय के, नित्य करो प्रणाम ॥",
          desc: "Devotional stuti praising the supreme penance and blessings of Sri Khakhi Baba Ji.",
        },
        {
          icon: <FaFire />,
          tag: "Nitya Aarti",
          title: "Sacred Aarti",
          quote: "जय श्री खाखी बाबा – जय श्री खाखी बाबा ।\nजो कोई तुमको ध्यावे, सुख सम्पत्ति पाता ॥",
          desc: "Traditional evening and morning prayers sung at Sri Khakhi Dham.",
        },
      ],
      btn: "Explore Full Guru Mahima & Aarti",
    },
    hi: {
      subtitle: "पावन श्लोक, चालीसा एवं आरती",
      heading: "गुरु महिमा एवं प्रार्थनाएँ",
      intro:
        "श्री गुरु गीता के पावन श्लोकों, खाखी चालीसा, पञ्चतत्त्व स्तुति एवं श्री खाखी बाबा जी की नित्य आरती के दिव्य आनंद में लीन हों।",
      cards: [
        {
          icon: <FaBookOpen />,
          tag: "गुरु गीता श्लोक",
          title: "सद्गुरु महिमा",
          quote: "गुरुरादिरनादिश्च गुरुः परमदैवतम्।\nगुरोः परतरं नास्ति तस्मै श्रीगुरवे नमः॥",
          desc: "गुरु ही सर्वश्रेष्ठ देवता हैं तथा इस संसार में मोक्ष एवं ज्ञान के एकमात्र आधार हैं।",
        },
        {
          icon: <FaPray />,
          tag: "खाखी चालीसा",
          title: "पावन स्तुति",
          quote: "चिदानंद पावन परम, श्री खाखी जी को नाम |\nनित्य मन में ध्याय के, नित्य करो प्रणाम ॥",
          desc: "श्री खाखी बाबा जी के तपोमय जीवन और पावन आशीर्वाद की महिमा में रचित छंद।",
        },
        {
          icon: <FaFire />,
          tag: "नित्य आरती",
          title: "पावन आरती",
          quote: "जय श्री खाखी बाबा – जय श्री खाखी बाबा ।\nजो कोई तुमको ध्यावे, सुख सम्पत्ति पाता ॥",
          desc: "श्री खाखी धाम में नित्य गाई जाने वाली परम पावन मंगल आरती।",
        },
      ],
      btn: "संपूर्ण गुरु महिमा एवं आरती पढ़ें",
    },
  };

  const txt = t[lang];

  return (
    <section className="guru-mahima-home-section">
      <div className="guru-mahima-home-container">
        <div className="guru-mahima-home-header" data-aos="fade-up">
          <span className="section-subtitle">{txt.subtitle}</span>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        <div className="guru-mahima-home-grid">
          {txt.cards.map((card, idx) => (
            <div
              key={idx}
              className="guru-mahima-home-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card-top-icon">
                {card.icon}
                <span className="card-tag">{card.tag}</span>
              </div>
              <h3>{card.title}</h3>
              <div className="card-sanskrit-quote">
                {card.quote.split("\n").map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="guru-mahima-home-action" data-aos="zoom-in">
          <button className="read-more-btn" onClick={() => navigate("/guru-mahima")}>
            {txt.btn} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GuruMahima;
