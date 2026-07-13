import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { FaLanguage, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMusic, FaDownload, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import calendarImg from "../assets/images/calendar_2026_2027.jpg";

function Events() {
  const { lang, setLang } = useLang();

  const eventsList = [
    {
      categoryEn: "Annual Festival",
      categoryHi: "वार्षिक उत्सव",
      badgeClass: "annual",
      titleEn: "Falgun Badi Amavasya Mahotsav & Bhandara",
      titleHi: "फाल्गुन बदी अमावस्या महोत्सव एवं विशाल भंडारा",
      taglineEn: "The largest annual congregation of devotees",
      taglineHi: "श्रद्धालुओं का सबसे बड़ा वार्षिक समागम",
      dateEn: "Falgun Badi Amavasya (Feb - Mar annually)",
      dateHi: "फाल्गुन बदी अमावस्या (प्रतिवर्ष फरवरी - मार्च)",
      venueEn: "Sri Khakhi Dham, Dada Fatehpura, Rajasthan",
      venueHi: "श्री खाखी धाम, डाडा फतेहरा, राजस्थान",
      attendeesEn: "Thousands of devotees",
      attendeesHi: "देश-विदेश से आने वाले हजारों श्रद्धालु",
      descEn1: "The annual mela is the crown jewel of our celebrations. On this auspicious day, the sacred belongings of Sri Khakhi Baba—his Khadau (wooden sandals), Chimta (iron tongs), and Kamandal (water pot)—are decorated with flowers and carried by the members of the Seva Sangh on their heads in a grand Shobha Yatra (procession) from Khakhi Bhavan to the temple on the hill.",
      descEn2: "The festival features non-stop bhajan, kirtan, standard rituals, and a massive Bhandara (community feast) where thousands of pilgrims are served free sanctified food (prasad).",
      descHi1: "वार्षिक मेला हमारे उत्सवों का गौरव है। इस पावन दिन पर, श्री खाखी बाबा की पवित्र वस्तुएं—उनकी खड़ाऊँ (लकड़ी की चप्पल), चिमटा और कमंडल—को फूलों से सजाया जाता है और सेवा संघ के सदस्यों द्वारा अपने सिर पर रखकर खाखी भवन से पहाड़ी पर स्थित मंदिर तक एक भव्य शोभा यात्रा (जुलूस) के रूप में ले जाया जाता है।",
      descHi2: "इस उत्सव में निरंतर भजन, कीर्तन, धार्मिक अनुष्ठान और एक विशाल भंडारे (सामुदायिक भोज) का आयोजन होता है, जहाँ हजारों तीर्थयात्रियों को निःशुल्क प्रसाद (महाप्रसाद) परोसा जाता है।"
    },
    {
      categoryEn: "Monthly Event",
      categoryHi: "मासिक आयोजन",
      badgeClass: "monthly",
      titleEn: "Grand Monthly Jagran",
      titleHi: "भव्य मासिक जागरण",
      taglineEn: "Devotional night vigil and music",
      taglineHi: "भक्तिमयी रात्रि जागरण और संगीत",
      dateEn: "Shukla Paksha Dwadashi (Every Month)",
      dateHi: "शुक्ल पक्ष द्वादशी (प्रतिमाह)",
      venueEn: "Agarwal Bhawan, Siddiamber Bazar, Hyderabad, Telangana – 500012, India",
      venueHi: "अग्रवाल भवन, सिद्दीम्बर बाज़ार, हैदराबाद, तेलंगाना – 500012, भारत।",
      attendeesEn: "Bhajans, Aaradhana, and Prasadam distribution",
      attendeesHi: "मधुर भजन, महाआरती एवं महाप्रसाद वितरण",
      descEn1: "Every month, the Hyderabad chapter of the Seva Sangh hosts a grand night-long devotional singing session (Jagran) on the auspicious twelfth day of the bright lunar fortnight.",
      descEn2: "Renowned bhajan singers lead the congregation in praising Sri Khakhi Baba and Lord Shiva. Devotees gather in large numbers to experience the deep spiritual energy, and a special community dinner (prasadam) is served at the end.",
      descHi1: "हर महीने, सेवा संघ का हैदराबाद अध्याय शुक्ल पक्ष की द्वादशी तिथि को रात भर चलने वाले भव्य भजन-कीर्तन (जागरण) का आयोजन करता है।",
      descHi2: "प्रसिद्ध भजन गायक श्री खाखी बाबा और भगवान शिव की महिमा का गुणगान करते हैं। बड़ी संख्या में श्रद्धालु इस दिव्य आध्यात्मिक ऊर्जा का अनुभव करने के लिए एकत्रित होते हैं, और रात्रि जागरण के अंत में विशेष महाप्रसाद (भंडारा) का आयोजन किया जाता है।"
    },
    {
      categoryEn: "Weekly Service",
      categoryHi: "साप्ताहिक सेवा",
      badgeClass: "weekly",
      titleEn: "Weekly Bhajans & Satsangs",
      titleHi: "साप्ताहिक भजन और सत्संग",
      taglineEn: "Keeping the local community connected to the divine",
      taglineHi: "स्थानीय समुदाय को आध्यात्मिकता से जोड़ना",
      dateEn: "Every Saturday / Sunday",
      dateHi: "प्रत्येक शनिवार / रविवार",
      venueEn: "Khakhi Bhavan, Dada Fatehpura & Hyderabad center",
      venueHi: "खाखी भवन, डाडा फतेहरा एवं हैदराबाद केंद्र",
      attendeesEn: "Local prayers, meditation, and mutual support",
      attendeesHi: "स्थानीय प्रार्थना, सामूहिक ध्यान एवं कल्याणकारी चर्चा",
      descEn1: "Local bhajans and satsangs are organized weekly to help devotees take time out from their busy lives to sit together, sing Baba's glories, and study spiritual teachings.",
      descEn2: "It is a vital event for community bonding, discussing social welfare works, and coordinating charitable activities like school support, animal hospital assistance, and tree plantations.",
      descHi1: "श्रद्धालुओं को व्यस्त जीवन से निकालकर एक साथ बैठने, बाबा की महिमा गाने और आध्यात्मिक शिक्षाओं का अध्ययन करने में मदद करने के लिए साप्ताहिक भजन और सत्संग आयोजित किए जाते हैं।",
      descHi2: "यह सामुदायिक जुड़ाव, सामाजिक कल्याण कार्यों पर चर्चा करने और परोपकारी गतिविधियों (जैसे स्कूल सहायता, पशु चिकित्सालय सेवा और वृक्षारोपण अभियान) के समन्वय का एक महत्वपूर्ण माध्यम है।"
    },
    {
      categoryEn: "Monthly Service",
      categoryHi: "मासिक सेवा",
      badgeClass: "service",
      titleEn: "Monthly Social Service & Welfare Drives",
      titleHi: "मासिक जनसेवा एवं लोक कल्याण अभियान",
      taglineEn: "Serving the needy, animals, and environment every month",
      taglineHi: "प्रति माह जरूरतमंदों, मूक पशुओं और पर्यावरण की सेवा",
      dateEn: "Regular Monthly Drives (Based on member suggestions)",
      dateHi: "नियमित मासिक सेवा अभियान (सदस्यों के सुझावों पर)",
      venueEn: "Local communities, cow shelters (Gaushalas), & slums",
      venueHi: "स्थानीय बस्तियाँ, गौशालाएँ एवं चिन्हित क्षेत्र",
      attendeesEn: "Welfare activities & volunteer invitations",
      attendeesHi: "जन कल्याण एवं स्वयंसेवक आमंत्रण",
      descEn1: "Driven by the spirit of selfless service (Seva), the Seva Sangh conducts regular monthly social welfare initiatives. These include feeding the underprivileged (Annadan), distributing food and fodder to cows (Gau Seva), and organizing blanket distribution drives in winters to support those in need.",
      descEn2: "Each month's drive is planned dynamically based on suggestions from our active group members. We invite volunteers to join our group for these social causes and work together to make a difference.",
      descHi1: "धार्मिक उत्सवों के साथ-साथ, हमारा सेवा संघ हर महीने निरंतर सामाजिक कल्याण गतिविधियों का आयोजन करता है। इसके अंतर्गत निर्धनों को भोजन कराना (अन्नदान), गायों के लिए चारा और पौष्टिक आहार उपलब्ध कराना (गौ सेवा), तथा सर्दियों के मौसम में जरूरतमंदों के बीच कंबल वितरित करना (वस्त्रदान) शामिल है।",
      descHi2: "प्रत्येक महीने की सेवा का निर्णय हमारे समूह के सदस्यों के सुझावों और चर्चा के आधार पर लिया जाता है। हम सभी श्रद्धालुओं और स्वयंसेवकों को आमंत्रित करते हैं कि वे हमारे सेवा समूह से जुड़ें और इन जनकल्याणकारी कार्यों में अपना योगदान देकर पुण्य के भागीदार बनें।"
    }
  ];

  return (
    <section className="events-page-container">
      {/* Hero Header */}
      <div className="events-hero">
        <div className="events-hero-overlay">
          <h1>{lang === "en" ? "Divine Events & Celebrations" : "धार्मिक उत्सव एवं आयोजन"}</h1>
          <p>{lang === "en" ? "Immerse yourself in devotion, music, and community service" : "भक्ति, संगीत और जनकल्याणकारी कार्यों में सहभागी बनें"}</p>
        </div>
      </div>

      {/* Control Panel (Language Toggle) */}
      <div className="events-controls" style={{ maxWidth: "1100px", margin: "30px auto 10px", padding: "0 20px", display: "flex" }}>
        <div className="lang-toggle-container" style={{ marginLeft: "auto" }}>
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

      {/* Intro Description */}
      <div className="events-intro-text">
        <h2>{lang === "en" ? "Our Spiritual Celebrations" : "हमारे आध्यात्मिक महोत्सव"}</h2>
        <p>
          {lang === "en" 
            ? "Sri Khakhi Baba Seva Sangh organizes regular religious ceremonies, monthly jagrans, and the grand annual mela to keep the sacred teachings and spirit of Sri Khakhi Baba alive. Devotees join these events to seek blessings and experience divine peace."
            : "श्री खाखी बाबा सेवा संघ नियमित रूप से धार्मिक अनुष्ठानों, मासिक जागरणों और भव्य वार्षिक मेले का आयोजन करता है ताकि श्री खाखी बाबा की पवित्र शिक्षाओं और संदेश को जीवंत रखा जा सके। सभी श्रद्धालु दिव्य आशीर्वाद प्राप्त करने के लिए इन उत्सवों में भाग लेते हैं।"}
        </p>
      </div>

      {/* Events List Grid */}
      <div className="events-grid">
        {eventsList.map((e, index) => (
          <div key={index} className="event-card">
            <div className={`event-badge ${e.badgeClass}`}>
              {lang === "en" ? e.categoryEn : e.categoryHi}
            </div>
            
            <div className="event-card-content">
              <h3>{lang === "en" ? e.titleEn : e.titleHi}</h3>
              <p className="event-tagline">{lang === "en" ? e.taglineEn : e.taglineHi}</p>
              
              <div className="event-details-list">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <span><strong>{lang === "en" ? "Date:" : "तिथि:"}</strong> {lang === "en" ? e.dateEn : e.dateHi}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span><strong>{lang === "en" ? "Venue:" : "स्थान:"}</strong> {lang === "en" ? e.venueEn : e.venueHi}</span>
                </div>
                <div className="detail-item">
                  {e.badgeClass === "monthly" ? (
                    <FaMusic className="detail-icon" />
                  ) : (
                    <FaUsers className="detail-icon" />
                  )}
                  <span><strong>{lang === "en" ? "Focus:" : "कार्यक्रम:"}</strong> {lang === "en" ? e.attendeesEn : e.attendeesHi}</span>
                </div>
              </div>

              <div className="event-description">
                <p>{lang === "en" ? e.descEn1 : e.descHi1}</p>
                <p>{lang === "en" ? e.descEn2 : e.descHi2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Section */}
      <div className="calendar-section">
        <div className="calendar-header">
          <h2>{lang === "en" ? "Bhajan & Festival Calendar (2026 - 2027)" : "भजन एवं उत्सव तिथि पत्र (2026 - 2027)"}</h2>
          <p>
            {lang === "en" 
              ? "Official dates for Shukla Paksha Dwadashi monthly bhajans and major Indian festivals." 
              : "शुक्ल पक्ष द्वादशी के मासिक भजनों और प्रमुख भारतीय त्योहारों की आधिकारिक तिथियां।"}
          </p>
        </div>

        <div className="calendar-content-centered">
          <img src={calendarImg} alt="Bhajan & Festival Calendar 2026-27" className="calendar-full-image" />
        </div>

        <div className="calendar-bottom-info">
          <div className="calendar-info-grid">
            <div className="calendar-info-card">
              <h3>
                <FaCalendarAlt /> {lang === "en" ? "Monthly Sudi Baras Bhajans" : "मासिक सुदी बारस भजन"}
              </h3>
              <p>
                {lang === "en"
                  ? "Devotional bhajans in memory of Sant Shiromani Khakhi Ji Maharaj take place every month on Sudi Baras (Shukla Paksha Dwadashi). Key upcoming dates include Chaitra Sudi 12 (29 March 2026), Kartik Sudi 12 (21 November 2026), and the grand Falgun Mela on 8 March 2027."
                  : "संत शिरोमणि खाखी जी महाराज के बारस सुदी (शुक्ल पक्ष द्वादशी) के मासिक भजनों का पावन आयोजन हर माह किया जाता है। मुख्य तिथियों में चैत्र सुदी 12 (29 मार्च 2026), कार्तिक सुदी 12 (21 नवंबर 2026) और वार्षिक फाल्गुन मेला (8 मार्च 2027) शामिल हैं।"}
              </p>
            </div>

            <div className="calendar-info-card">
              <h3>
                <FaInfoCircle /> {lang === "en" ? "Major Celebrations & Festivals" : "प्रमुख त्योहार एवं उत्सव"}
              </h3>
              <p>
                {lang === "en"
                  ? "The calendar lists prominent Hindu festivals celebrated by the Sangh, including Holika Dahan (2 March 2026), Hanuman Jayanti (2 April 2026), Guru Purnima (29 July 2026), Janmashtami (4 September 2026), and Deepawali (8 November 2026). Devotees are invited to participate in all standard rituals."
                  : "तिथि पत्र में संघ द्वारा मनाए जाने वाले प्रमुख हिंदू त्योहारों की सूची है, जिसमें होलिका दहन (2 मार्च 2026), हनुमान जयंती (2 अप्रैल 2026), गुरु पूर्णिमा (29 जुलाई 2026), कृष्ण जन्माष्टमी (4 सितंबर 2026) और दीपावली (8 नवंबर 2026) शामिल हैं। सभी श्रद्धालुओं का स्वागत है।"}
              </p>
            </div>
          </div>

          <div className="calendar-contacts">
            <h4>📞 {lang === "en" ? "Contact Coordinators" : "संपर्क सूत्र"}</h4>
            <div className="calendar-contacts-grid">
              <div className="calendar-contact-item">
                <strong>{lang === "en" ? "Vinod Agarwal" : "विनोद अग्रवाल"}</strong>
                <a href="tel:+918686001010"><FaPhoneAlt /> 8686001010</a>
              </div>
              <div className="calendar-contact-item">
                <strong>{lang === "en" ? "Kishan Agarwal" : "किशन अग्रवाल"}</strong>
                <a href="tel:+918121988125"><FaPhoneAlt /> 8121988125</a>
              </div>
              <div className="calendar-contact-item">
                <strong>{lang === "en" ? "Pradeep Agarwal" : "प्रदीप अग्रवाल"}</strong>
                <a href="tel:+919391055244"><FaPhoneAlt /> 9391055244</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
