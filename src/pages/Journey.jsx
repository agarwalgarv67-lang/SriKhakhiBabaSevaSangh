import { useState } from "react";
import temple from "../assets/images/temple3.jpeg";
import { FaLanguage, FaCalendarAlt, FaSchool, FaBuilding, FaTree, FaClinicMedical, FaHandsHelping, FaUniversity, FaArrowRight } from "react-icons/fa";

function Journey() {
  const [lang, setLang] = useState("en"); // 'en' or 'hi'
  const [filter, setFilter] = useState("all"); // 'all', 'development', 'welfare'

  const milestones = [
    {
      year: "1946",
      category: "welfare",
      icon: <FaSchool />,
      titleEn: "Sri Khakhi Baba Government School Founded",
      titleHi: "राजकीय प्राथमिक विद्यालय की स्थापना",
      descEn: "Established Sri Khakhi Baba Government Primary School in Dada Fatehpura village to connect the children of the region to education.",
      descHi: "क्षेत्र के बच्चों को शिक्षा से जोड़ने के लिए ग्राम डाडा फतेहरा में श्री खाखी बाबा राजकीय प्राथमिक विद्यालय की आधारशिला रखी गई।"
    },
    {
      year: "1962",
      category: "welfare",
      icon: <FaSchool />,
      titleEn: "School Upgraded to Upper Primary",
      titleHi: "उच्च प्राथमिक विद्यालय में क्रमोन्नयन",
      descEn: "Upgraded the school to the upper primary level to expand local educational access.",
      descHi: "स्थानीय बच्चों के लिए शिक्षा का विस्तार करते हुए विद्यालय को प्राथमिक से उच्च प्राथमिक स्तर पर क्रमोन्नत किया गया।"
    },
    {
      year: "1983",
      category: "development",
      icon: <FaUniversity />,
      titleEn: "Establishment of Sri Khakhi Baba Seva Sangh",
      titleHi: "श्री खाखी बाबा सेवा संघ की स्थापना",
      descEn: "Formed in Hyderabad (Regd. No. 136/97) with the sacred goal of temple preservation, serving Baba's legacy, and social upliftment.",
      descHi: "बाबा की सेवा, खाखी धाम के संरक्षण तथा धार्मिक-सामाजिक उत्थान के पवित्र उद्देश्य से हैदराबाद में सेवा संघ की स्थापना (पंजीकरण संख्या 136/97) की गई।"
    },
    {
      year: "1986–1987",
      category: "development",
      icon: <FaBuilding />,
      titleEn: "Renovation of Mandi & Chabutra",
      titleHi: "प्राचीन मंडी एवं चबूतरे का जीर्णोद्धार",
      descEn: "Renovated the ancient Mandi and seating platform (Chabutra) on the hilltop, arranging proper facilities for devotees' prayers and rest.",
      descHi: "पहाड़ी पर स्थित प्राचीन मंडी एवं चबूतरे का जीर्णोद्धार कराया गया, जिससे श्रद्धालुओं के लिए सुव्यवस्थित पूजा एवं विश्राम की सुविधा उपलब्ध हो सकी।"
    },
    {
      year: "1990",
      category: "development",
      icon: <FaBuilding />,
      titleEn: "Tibara Well & Stone Stairway",
      titleHi: "तिबारा कुआं एवं सीढ़ियों का निर्माण",
      descEn: "Constructed the historic Tibara well and adjoining stairways, securing water supply and making hilltop access convenient.",
      descHi: "तिबारा कुएं एवं उससे जुड़ी सीढ़ियों का निर्माण कराया गया, जिससे जल आपूर्ति और आवागमन दोनों ही सुलभ हो सके।"
    },
    {
      year: "1994–1995",
      category: "development",
      icon: <FaHandsHelping />,
      titleEn: "Installation of Shiva & Hanuman Idols",
      titleHi: "भगवान शिव एवं हनुमान जी की स्थापना",
      descEn: "Formally installed the sacred idols of Lord Shiva and Lord Hanuman in the temple ashram premises, augmenting spiritual energy.",
      descHi: "आश्रम परिसर में भगवान शिव एवं भगवान हनुमान जी की विधिवत प्राण-प्रतिष्ठा की गई, जिससे मंदिर का आध्यात्मिक स्वरूप और समृद्ध हुआ।"
    },
    {
      year: "1998",
      category: "development",
      icon: <FaBuilding />,
      titleEn: "Construction of Khakhi Bhavan",
      titleHi: "खाखी भवन का निर्माण",
      descEn: "Constructed Khakhi Bhavan in the village, establishing a central hub for social, religious gatherings, and community service.",
      descHi: "ग्राम में भव्य खाखी भवन का निर्माण कराया गया, जो आज क्षेत्र में सामाजिक-धार्मिक बैठकों एवं सेवा कार्यों का प्रमुख केंद्र है।"
    },
    {
      year: "2002",
      category: "development",
      icon: <FaBuilding />,
      titleEn: "Saint Residence Developed",
      titleHi: "संत निवास भवन की व्यवस्था",
      descEn: "Constructed and arranged accommodation facilities for visiting saints and monks, supporting spiritual discourses and hospitality.",
      descHi: "आगमन करने वाले संतों की सेवा और निवास हेतु संत भवन की व्यवस्था की गई, जो धार्मिक-आध्यात्मिक साधना को निरंतरता प्रदान करता है।"
    },
    {
      year: "2005",
      category: "welfare",
      icon: <FaSchool />,
      titleEn: "School Upgraded to Secondary Level",
      titleHi: "माध्यमिक विद्यालय स्तर पर क्रमोन्नयन",
      descEn: "Upgraded from upper primary to secondary level, enabling local youth to pursue high school education in the village.",
      descHi: "ग्रामीण युवाओं की उच्च शिक्षा तक पहुंच को सुनिश्चित करने के लिए विद्यालय का माध्यमिक स्तर (10वीं) पर क्रमोन्नयन कराया गया।"
    },
    {
      year: "2008–2015",
      category: "development",
      icon: <FaTree />,
      titleEn: "Large-Scale Tree Plantation",
      titleHi: "व्यापक स्तर पर वृक्षारोपण",
      descEn: "Organized massive afforestation campaigns inside the temple grounds and hills, planting thousands of trees for environmental preservation.",
      descHi: "आश्रम परिसर और आसपास की पहाड़ी पर व्यापक स्तर पर वृक्षारोपण किया गया, जिससे प्राकृतिक वातावरण को शुद्ध, हरित एवं सुंदर बनाया जा सके।"
    },
    {
      year: "2018",
      category: "welfare",
      icon: <FaSchool />,
      titleEn: "School Upgraded to Senior Secondary",
      titleHi: "उच्च माध्यमिक स्तर पर क्रमोन्नयन",
      descEn: "Upgraded the school to a Senior Secondary School (12th grade), providing comprehensive schooling for students up to board exams.",
      descHi: "विद्यालय को उच्च माध्यमिक स्तर (12वीं) पर क्रमोन्नत कराया गया, जिससे ग्रामीण बच्चों को बोर्ड परीक्षाओं की तैयारी के लिए शहर न जाना पड़े।"
    },
    {
      year: "Ongoing",
      category: "welfare",
      icon: <FaClinicMedical />,
      titleEn: "Veterinary Animal Hospital",
      titleHi: "पशु चिकित्सालय की स्थापना एवं संचालन",
      descEn: "Established a dedicated veterinary facility in Dada Fatehpura to serve cattle and local livestock, assisting farming families.",
      descHi: "ग्रामवासियों और उनके पशुधन की सेवा के उद्देश्य से गांव में पशु चिकित्सालय की स्थापना कराई गई, जिससे ग्रामीणों को त्वरित पशु उपचार की सुविधा मिल रही है।"
    }
  ];

  const filteredMilestones = milestones.filter(
    (m) => filter === "all" || m.category === filter
  );

  return (
    <section className="journey-page-container">
      {/* Banner */}
      <div className="journey-hero-banner" style={{ backgroundImage: `url(${temple})` }}>
        <div className="journey-hero-overlay">
          <h1>{lang === "en" ? "Our Sacred Journey" : "हमारी सेवा यात्रा"}</h1>
          <p>{lang === "en" ? "Over 4 Decades of Devotion, Education, and Service" : "चार दशकों से निरंतर भक्ति, शिक्षा और सामाजिक विकास"}</p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="journey-controls">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === "all" ? "active" : ""}`} 
            onClick={() => setFilter("all")}
          >
            {lang === "en" ? "All Milestones" : "सभी उपलब्धियां"}
          </button>
          <button 
            className={`filter-btn ${filter === "development" ? "active" : ""}`} 
            onClick={() => setFilter("development")}
          >
            {lang === "en" ? "Trust & Dham Development" : "न्यास एवं धाम विकास"}
          </button>
          <button 
            className={`filter-btn ${filter === "welfare" ? "active" : ""}`} 
            onClick={() => setFilter("welfare")}
          >
            {lang === "en" ? "Education & Welfare" : "शिक्षा एवं समाज कल्याण"}
          </button>
        </div>

        <div className="lang-toggle-container">
          <button 
            className={`lang-btn ${lang === "en" ? "active" : ""}`} 
            onClick={() => setLang("en")}
          >
            <FaLanguage /> English
          </button>
          <button 
            className={`lang-btn ${lang === "hi" ? "active" : ""}`} 
            onClick={() => setLang("hi")}
          >
            <FaLanguage /> हिन्दी
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="journey-timeline-wrapper">
        <div className="timeline-spine"></div>

        <div className="timeline-cards-container">
          {filteredMilestones.map((m, index) => (
            <div 
              key={m.year + index} 
              className={`timeline-node ${index % 2 === 0 ? "left-node" : "right-node"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Year Capsule */}
              <div className="timeline-year-capsule">
                <FaCalendarAlt className="year-icon" />
                <span>{m.year}</span>
              </div>

              {/* Timeline Card */}
              <div className="timeline-detail-card">
                <div className={`card-icon-indicator ${m.category}`}>
                  {m.icon}
                </div>
                <div className="card-inner-text">
                  <h3>{lang === "en" ? m.titleEn : m.titleHi}</h3>
                  <p>{lang === "en" ? m.descEn : m.descHi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Philosophy Statement */}
      <div className="journey-philosophy-box">
        <div className="philosophy-inner">
          <FaArrowRight className="philosophy-accent-icon" />
          <p>
            {lang === "en" 
              ? "For more than 40 years, Sri Khakhi Baba Seva Sangh has remained committed to preserving faith, serving society, and carrying forward the eternal teachings of Sri Khakhi Baba through devotion, compassion, and selfless service."
              : "४० से अधिक वर्षों से, श्री खाखी बाबा सेवा संघ आस्था के संरक्षण, समाज की सेवा और भक्ति, करुणा एवं निःस्वार्थ कर्म के माध्यम से श्री खाखी बाबा के शाश्वत संदेश को जन-जन तक पहुँचाने के लिए संकल्पित है।"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;
