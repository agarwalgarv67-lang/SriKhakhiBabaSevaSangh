import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaSchool, FaUniversity, FaBuilding, FaClinicMedical, FaArrowRight } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

function Journey() {
  const navigate = useNavigate();
  const { lang } = useLang();

  const t = {
    en: {
      subtitle: "MILESTONES & DECADES OF SERVICE",
      heading: "Our Sacred Journey",
      intro:
        "Over decades of dedication, Sri Khakhi Baba Seva Sangh has worked for temple preservation, education, healthcare, and environmental development.",
      milestones: [
        {
          year: "1940",
          icon: <FaBuilding />,
          title: "Renovation of Mandi & Chabutra",
          desc: "Renovated the ancient hilltop Mandi and seating platform for devotees.",
        },
        {
          year: "1946",
          icon: <FaSchool />,
          title: "Primary School Founded",
          desc: "Laid the foundation of Sri Khakhi Baba Primary School in Dada Fatehpura.",
        },
        {
          year: "1949",
          icon: <FaUniversity />,
          title: "Establishment of Seva Sangh",
          desc: "Formed Sri Khakhi Baba Seva Sangh in Hyderabad for temple service and social welfare.",
        },
        {
          year: "1997",
          icon: <FaUniversity />,
          title: "Official Registration of Trust",
          desc: "Trust formally registered under Regd. No. 136/97 to expand welfare initiatives.",
        },
        {
          year: "2002",
          icon: <FaClinicMedical />,
          title: "Veterinary Animal Hospital",
          desc: "Established a dedicated veterinary facility serving local livestock and farming families.",
        },
      ],
      btn: "Explore Interactive Service Journey",
    },
    hi: {
      subtitle: "उपलब्धियां एवं सामाजिक विकास",
      heading: "हमारी सेवा यात्रा",
      intro:
        "दशकों की भक्ति और समर्पण के साथ, श्री खाखी बाबा सेवा संघ ने धाम विकास, शिक्षा, पशु चिकित्सा और पर्यावरण संरक्षण के क्षेत्र में नए आयाम स्थापित किए हैं।",
      milestones: [
        {
          year: "1940",
          icon: <FaBuilding />,
          title: "प्राचीन मंडी एवं चबूतरे का जीर्णोद्धार",
          desc: "पहाड़ी पर स्थित प्राचीन मंडी एवं चबूतरे का सुव्यवस्थित जीर्णोद्धार कराया गया।",
        },
        {
          year: "1946",
          icon: <FaSchool />,
          title: "प्राथमिक विद्यालय की स्थापना",
          desc: "ग्राम डाडा फतेहरा में श्री खाखी बाबा राजकीय प्राथमिक विद्यालय की नींव रखी गई।",
        },
        {
          year: "1949",
          icon: <FaUniversity />,
          title: "श्री खाखी बाबा सेवा संघ की स्थापना",
          desc: "हैदराबाद में धाम संरक्षण और सामाजिक उत्थान हेतु सेवा संघ का गठन हुआ।",
        },
        {
          year: "1997",
          icon: <FaUniversity />,
          title: "ट्रस्ट का औपचारिक पंजीकरण",
          desc: "कल्याणकारी गतिविधियों को संस्थागत करने हेतु पंजीकरण संख्या 136/97 से ट्रस्ट पंजीकृत।",
        },
        {
          year: "2002",
          icon: <FaClinicMedical />,
          title: "पशु चिकित्सालय की स्थापना",
          desc: "ग्रामवासियों के पशुधन के निःशुल्क उपचार हेतु पशु चिकित्सालय स्थापित।",
        },
      ],
      btn: "संपूर्ण सेवा यात्रा देखें",
    },
  };

  const txt = t[lang];

  return (
    <section className="journey-home-section">
      <div className="journey-home-container">
        <div className="journey-home-header" data-aos="fade-up">
          <span className="section-subtitle">{txt.subtitle}</span>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        <div className="journey-home-milestones-grid">
          {txt.milestones.map((m, idx) => (
            <div
              key={idx}
              className="journey-home-milestone-card"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="journey-card-year">
                <FaCalendarAlt className="year-icon" />
                <span>{m.year}</span>
              </div>
              <div className="journey-card-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="journey-home-action" data-aos="zoom-in">
          <button className="read-more-btn" onClick={() => navigate("/Journey")}>
            {txt.btn} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Journey;
