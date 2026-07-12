import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import baba from "../assets/images/baba.jpeg";
import temple from "../assets/images/temple.jpeg";
import kiljiKhadau from "../assets/images/kilji-baba-khadau.jpg";
import sukhramdasImg from "../assets/images/sukhramdas-ji.jpg";
import khakhiBabaPoster from "../assets/images/khakhi-baba-poster.jpg";
import { FaLanguage, FaHistory, FaMapMarkedAlt, FaBook } from "react-icons/fa";

import coverVolume1 from "../assets/images/cover_volume_1.jpg";
import coverVolume2 from "../assets/images/cover_volume_2.jpg";
import coverVolume3 from "../assets/images/cover_volume_3.jpg";
import coverVolume4 from "../assets/images/cover_volume_4.jpg";
import chalisaCover from "../assets/images/chalisa_cover.jpg";

// Published Books Data
const booksData = [
  {
    id: "volume_1",
    title: { en: "Sri Khakhi Baba Bhajan Sangrah - Volume 1", hi: "श्री खाखी बाबा भजन संग्रह - भाग १" },
    author: { en: "Sri Khakhi Baba Seva Sangh, Hyderabad", hi: "श्री खाखी बाबा सेवा संघ, हैदराबाद" },
    year: "Vikram Samvat 2040",
    desc: {
      en: "The first volume of the sacred hymn collection, featuring traditional prayers, daily aartis, and foundational bhajans sung at Sri Khakhi Dham.",
      hi: "पावन भजन संग्रह का प्रथम भाग, जिसमें श्री खाखी धाम में गाए जाने वाले पारंपरिक भजन, नित्य आरती और प्रार्थनाओं का संग्रह है।"
    },
    cover: coverVolume1
  },
  {
    id: "volume_2",
    title: { en: "Sri Khakhi Baba Bhajan Sangrah - Volume 2", hi: "श्री खाखी बाबा भजन संग्रह - भाग २" },
    author: { en: "Sri Khakhi Baba Seva Sangh, Hyderabad", hi: "श्री खाखी बाबा सेवा संघ, हैदराबाद" },
    year: "Vikram Samvat 2055",
    desc: {
      en: "The second volume of the collection, compiling devotional hymns in praise of the Guru-lineage and regional saints of Rajasthan.",
      hi: "भजन संग्रह का द्वितीय भाग, जिसमें गुरु-परंपरा एवं राजस्थान के क्षेत्रीय संतों की महिमा में गाए जाने वाले भक्तिमय भजनों का संकलन है।"
    },
    cover: coverVolume2
  },
  {
    id: "volume_3",
    title: { en: "Sri Khakhi Baba Bhajan Sangrah - Volume 3", hi: "श्री खाखी बाबा भजन संग्रह - भाग ३" },
    author: { en: "Sri Khakhi Baba Seva Sangh, Dada Fatehpura", hi: "श्री खाखी बाबा सेवा संघ, डाडा फतेहपुरा" },
    year: "Vikram Samvat 2057",
    desc: {
      en: "The third volume, published from Dada Fatehpura, containing rare devotional compositions and praises dedicated to Sri Khakhi Baba Ji.",
      hi: "डाडा फतेहपुरा से प्रकाशित भजन संग्रह का तृतीय भाग, जिसमें श्री खाखी बाबा जी को समर्पित विशिष्ट भजन, स्तुतियां एवं पावन संस्मरण शामिल हैं।"
    },
    cover: coverVolume3
  },
  {
    id: "volume_4",
    title: { en: "Sri Khakhi Baba Bhajan Sangrah - Volume 4", hi: "श्री खाखी बाबा भजन संग्रह - भाग ४" },
    author: { en: "Sri Khakhi Baba Seva Sangh, Dada Fatehpura", hi: "श्री खाखी बाबा सेवा संघ, डाडा फतेहपुरा" },
    year: "Vikram Samvat 2071",
    desc: {
      en: "The fourth volume, compiling the latest devotional hymns, stutis, and prayers sung during monthly melas and major festivals.",
      hi: "भजन संग्रह का चतुर्थ भाग, जिसमें मासिक मेलों और विशेष उत्सवों पर गाए जाने वाले नूतन भजनों, स्तुतियों एवं प्रार्थनाओं का संग्रह है।"
    },
    cover: coverVolume4
  },
  {
    id: "chalisa",
    title: { en: "Sri Sri 1008 Sri Khakhiji Baba Chalisa", hi: "श्री श्री १००८ श्री खाखीजी बाबा चालिसा" },
    author: { en: "Sri Khakhi Baba Seva Sangh, Dada Fatehpura, Hyderabad", hi: "श्री खाखी बाबा सेवा संघ, डाडा फतेहपुरा, हैदराबाद आ.प्र." },
    year: "",
    desc: {
      en: "A sacred Chalisa — forty devotional verses — in praise of Sri Sri 1008 Sri Khakhiji Baba, published by Sri Khakhi Baba Seva Sangh, Dada Fatehpura, Hyderabad.",
      hi: "श्री श्री १००८ श्री खाखीजी बाबा की महिमा में रचित पावन चालीसा — चालीस भक्तिमय छंदों का संग्रह, श्री खाखी बाबा सेवा संघ, डाडा फतेहपुरा, हैदराबाद द्वारा प्रकाशित।"
    },
    cover: chalisaCover
  }
];

function About() {
  const { lang, setLang } = useLang();
  const [tab, setTab] = useState("saint"); // 'saint', 'dham', 'books'

  return (
    <section className="about-page-container">
      {/* Banner */}
      <div className="about-hero-banner" style={{ backgroundImage: `url(${tab === "saint" ? baba : temple})` }}>
        <div className="about-hero-overlay">
          <h1>{lang === "en" ? "About Sri Khakhi Baba & Dham" : "श्री खाखी बाबा एवं पावन धाम"}</h1>
          <p>{lang === "en" ? "Serving Humanity with Devotion" : "भक्ति और सेवा का पावन केंद्र"}</p>
        </div>
      </div>

      {/* Control Panel (Language & Tab Toggles) */}
      <div className="about-controls">
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${tab === "saint" ? "active" : ""}`} 
            onClick={() => setTab("saint")}
          >
            <FaHistory /> {lang === "en" ? "The Saint" : "जीवनी"}
          </button>
          <button 
            className={`tab-btn ${tab === "dham" ? "active" : ""}`} 
            onClick={() => setTab("dham")}
          >
            <FaMapMarkedAlt /> {lang === "en" ? "The Temple" : "स्थान"}
          </button>
          <button 
            className={`tab-btn ${tab === "books" ? "active" : ""}`} 
            onClick={() => setTab("books")}
          >
            <FaBook /> {lang === "en" ? "Published Books" : "प्रकाशित पुस्तकें"}
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

      {/* Content Section */}
      <div className="about-main-content">
        {tab === "saint" ? (
          /* Saint Biography Content */
          lang === "en" ? (
            <div className="content-english fade-in">
              <div className="about-saint-profile-row">
                <div className="profile-image-container">
                  <img src={baba} alt="Sri Khakhi Baba" className="profile-image" />
                </div>
                <div className="profile-text-container">
                  <h2>Sri Khakhi Baba</h2>
                  <p className="intro-text">
                    Sri Khakhi Baba was a great saint, ascetic, and divine mahatma whose life was dedicated to deep devotion, strict meditation, self-discipline, and the selfless service of humanity. Even today, thousands of devotees visit Sri Khakhi Dham seeking peace, spiritual energy, and divine blessings.
                  </p>
                </div>
              </div>

              <div className="history-section">
                <h3>Arrival of Sri Khakhi Baba on the Hill (1889)</h3>
                <p>
                  In the year 1889, when Maharaja Ajit Singh, the then ruler of Khetri, initiated preparations for constructing a dam to provide irrigation facilities to the local farmers, Sri Khakhi Baba was deeply engaged in meditation at the very site where the Ajit Sagar Dam stands today.
                </p>
                <p>
                  Workers from the Od community were involved in the dam construction, excavating soil from the lower areas to build the embankment. Since Baba had established his meditation spot at that location, the workers humbly requested him to move elsewhere. However, Sri Khakhi Baba, being deeply absorbed in intense penance, did not respond to their request.
                </p>
                <p>
                  When the matter reached Maharaja Ajit Singh, he ordered his soldiers to remove Baba from the site. It is believed that as the soldiers attempted to force Baba away, a large swarm of honeybees suddenly appeared and attacked them. Frightened and helpless, the soldiers retreated.
                </p>
                <p>
                  Upon hearing of this miraculous incident, Maharaja Ajit Singh personally approached Sri Khakhi Baba and sought forgiveness. Baba then took water from his kamandal and gently touched the injured soldiers, instantly relieving them of their pain.
                </p>
                <p>
                  Thereafter, by his own will and consent, Sri Khakhi Baba chose the nearby hill as his permanent place of meditation. Today, a grand temple of Sri Khakhi Baba stands at this sacred hilltop, serving as a symbol of devotion, miracles, and divine peace for countless devotees.
                </p>
              </div>

              <div className="history-section">
                <h3>Nature of Sri Khakhi Baba’s Penance</h3>
                <p>
                  The penance of Sri Khakhi Baba was extremely rigorous, disciplined, and spiritually profound. A Brahmin named Ramu ji from Dada Fatehpura village regularly served Baba during his period of meditation. Bisuram ji, the priest of the temple, would also come for Baba’s darshan and regarded Sri Khakhi Baba as an embodiment of Lord Shiva.
                </p>
                <p>
                  Baba’s daily meditation period usually commenced about one hour after sunrise and continued until noon (12 PM). During this time, he remained completely absorbed in deep spiritual practice.
                </p>
                <p>
                  The austerity of his penance was extraordinary. During the summer season, Baba would sit on the hilltop surrounded by burning cow-dung cakes, enduring intense heat for hours while remaining immersed in meditation. Similarly, during winter and monsoon seasons, he would sit for several hours in freezing cold, flowing spring water, completely absorbed in devotion to the Divine.
                </p>
                <p>
                  Such severe self-discipline, endurance, and unwavering devotion established Sri Khakhi Baba as a great ascetic, whose spiritual practices continue to inspire countless devotees even today.
                </p>
              </div>

              <div className="history-section">
                <h3>Divine and Mystical Powers of Sri Khakhi Baba</h3>
                <p>
                  Although there are varied beliefs and opinions regarding the birthplace and early life of Sri Khakhi Baba, making it difficult to arrive at a definite conclusion, it is widely accepted that after performing intense penance at several sacred places, he accepted Sant Shiromani Sri Sukhramdas Ji of Lohargal as his spiritual guru. Following his initiation, Sri Khakhi Baba chose the hill of Dada Fatehpura village as his place of meditation.
                </p>
                <p>
                  Sri Khakhi Baba was a great ascetic endowed with divine spiritual powers. According to devotees, his appearance was mystical, radiant, and profoundly influential. His head adorned with long matted locks, a thick beard, a fair complexion, a broad forehead, and piercing, luminous eyes reflected his immense spiritual strength and disciplined life. He usually wore a loincloth, and at times a yellow robe (angarkhi), while his feet were adorned with wooden sandals (khadau).
                </p>
                <p>
                  Water flowing continuously from the Ajit Sagar Dam formed a natural stream, along whose banks stood Sri Khakhi Baba’s Dhuna (sacred fire site), where a chimta (iron tong) was always placed. This ancient Dhuna was located approximately midway between the present-day temple and the dam, towards the northern direction. It was at this sacred Dhuna that Baba performed his intense austerities.
                </p>
                <p>
                  After completing his meditation, Baba devoted his time to serving the distressed, interacting with devotees, offering guidance, and participating in bhajans and kirtans. According to the descendants of eyewitness devotees, when the ardent Shaivite Sri Khakhi Baba sat in deep meditation holding the chimta, it appeared as though Lord Shiva Himself had descended upon the earth.
                </p>
              </div>

              <div className="history-section highlight-box">
                <h3>Mahaprayan (Divine Vanishing)</h3>
                <p>
                  Throughout his earthly life, Sri Khakhi Baba Maharaj blessed devotees, servants, and donors according to their faith—sometimes visibly and sometimes by granting the fruits of their devotion in unseen ways.
                </p>
                <p>
                  It was the sacred day of <strong>Phalgun Krishna Amavasya, Vikram Samvat 1931</strong>. Suddenly, dark clouds gathered in the sky, strong winds began to blow, and the atmosphere became intensely mystical. Shortly before this moment, Sri Khakhi Baba had returned to his Dhuna after performing penance in the flowing waters below the hill.
                </p>
                <p>
                  At that time, Ramu ji was arranging water and food for Baba, and Bisuram Ji, the priest of the ancient Shiva temple near the Ajit Sagar Dam, had arrived for Baba’s darshan. Baba called both of them to sit near him, and they did so with folded hands and deep reverence.
                </p>
                <p>
                  In a calm and composed voice, Baba said: <em>“Devotees, today I am leaving for some other place to perform tapasyaa.”</em>
                </p>
                <p>
                  He then asked Bisuram Ji to take care of his angarkhi (robe) and told Ramu Ji: <em>“You have served me with great devotion. Please keep these khadau (wooden sandals), chimta, and other sacred belongings.”</em>
                </p>
                <p>
                  Chanting the sacred words <strong>“Om Shiv… Om Shiv…”</strong>, Baba looked upward and took a deep breath. In the very next moment, before the astonished eyes of those present, Sri Khakhi Baba vanished from physical sight.
                </p>
                <p>
                  The devotees sitting nearby were left stunned and speechless. Remaining invisible yet eternally present—continuing to bless his beloved devotees and relieve their pain and suffering through his divine grace.
                </p>
              </div>

              {/* Guru-Disciple Lineage Section */}
              <div className="lineage-section">
                <h2 className="lineage-english">Guru–Disciple Lineage</h2>
                <p className="lineage-shloka">॥ गुरुपरम्परासेवायांमम् शिरः सदा नत्वातिष्ठतु ॥</p>
                <p className="lineage-shloka-meaning">May my head always remain bowed in humble service to the Guru Parampara</p>

                <div className="lineage-flow">
                  {/* Person 1 - Guru Kilji Baba Maharaj */}
                  <div className="lineage-card">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={kiljiKhadau} alt="Guru Kilji Baba Maharaj Khadau" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">Anant Shri Vibhusht Shri Shri 1008 Guru Kilji Baba Maharaj</h3>
                      <p className="lineage-role">Mahant of Galta Ji Gaddi, Jaipur · Founder of Khaki Panth</p>
                      <p className="lineage-desc">
                        Shri Shri 1008 Guru Kilji Baba Maharaj is revered as the Mahant of the sacred Gaddi of Galta Ji (Jaipur, Rajasthan) and the founder of the Khaki Panth. A great ascetic saint, he dedicated his life to meditation, penance, and renunciation at Shri Galta Ji — his Tapobhoomi.
                      </p>
                      <p className="lineage-desc">
                        The spiritual origin of the Khaki Panth is traced to the Treta Yuga. It is believed that after Bhagwan Shri Ram defeated the demoness Tadka, sages began applying the sacred ash (bhasma) from her body as a symbol of the victory of good over evil — giving birth to the Khaki Panth tradition.
                      </p>
                      <p className="lineage-desc">
                        Guru Kilji Baba Maharaj strengthened this tradition through intense austerities, long samadhi, and a life of simplicity. His matted hair (jata) was so long that four disciples were needed to carry it while walking — a testament to his extraordinary life of penance. The saints of this panth keep jata, apply bhasma, and like a flowing river, never stay permanently at one place.
                      </p>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="lineage-arrow">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">⬇</div>
                  </div>

                  {/* Person 2 - Sant Shiromani Shri Sukhramdas Ji */}
                  <div className="lineage-card">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={sukhramdasImg} alt="Sant Shiromani Shri Sukhramdas Ji Baba Maharaj" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">Sant Shiromani Shri Shri 1008 Shri Guru Sukhramdas Ji Baba Maharaj</h3>
                      <p className="lineage-role">Founder of Khaki Tradition in Lohargal Dham</p>
                      <p className="lineage-desc">
                        Shri Shri 1008 Shri Guru Sukhramdas Ji Baba Maharaj was a leading saint of the glorious Guru–Shishya (Guru-Disciple) tradition of the Khaki Panth and the devoted disciple of Shri Guru Kilji Baba Maharaj. After receiving Diksha (spiritual initiation) from his Guru, he made Shri Lohargal Dham in Rajasthan his Tapobhoomi (place of penance) and played an important role in spreading the Khaki Panth and promoting spiritual awakening across north-western India. He is regarded as the founder of the Khaki tradition in this region.
                      </p>
                      <p className="lineage-desc">
                        He was known for his calm nature, radiant spiritual presence, and deep meditative state. His Vaishnav tilak on the forehead, japa mala (prayer beads) in his hands, and his spiritual practices performed in the presence of the ever-burning Dhuni (sacred fire) are remembered as symbols of his constant remembrance of the Divine, intense penance, and life of renunciation.
                      </p>
                      <p className="lineage-desc">
                        He holds a highly respected place in the Guru tradition, reflecting his spiritual greatness, deep devotion to his Guru, and dedication to the welfare of society. Through his penance, sacrifice, and detachment, he gave a new direction to this tradition and inspired countless seekers to follow the path of Sanatan Dharma and an ascetic way of life. Even today, Shri Lohargal Dham stands as a sacred witness to his penance, spiritual practices, and divine legacy, continuing to inspire devotees on their spiritual journey.
                      </p>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="lineage-arrow">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">⬇</div>
                  </div>

                  {/* Person 3 - Sri Khakhi Baba */}
                  <div className="lineage-card lineage-card-final">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={khakhiBabaPoster} alt="Santanamagranya Shri Shri 1008 Shri Khakhi Baba Maharaj" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">Santanamagranya Shri Shri 1008 Shri Khakhi Baba Maharaj</h3>
                      <p className="lineage-role">The Great Ascetic &amp; Saint of Dada Fatehpura</p>
                      <p className="lineage-desc">
                        Shri Shri 1008 Shri Khakhi Baba Maharaj was the devoted disciple of Sant Shiromani Shri Guru Sukhramdas Ji Baba Maharaj. After receiving Diksha (spiritual initiation) from his revered Guru, he made the ideals of penance, sacrifice, detachment, Guru-seva (service to the Guru), and Sanatan Dharma the foundation of his life. Following his Guru's command and the principle of the wandering ascetic tradition, he departed from Lohargal and arrived at Dada Fatehpura, where he sanctified the land through his deep penance and spiritual practices.
                      </p>
                      <p className="lineage-desc">
                        Following the instructions of his Guru, he spread the spiritual tradition of the Khaki Panth among the people through intense penance, continuous spiritual practice, and selfless service for the welfare of society. He inspired countless devotees with faith, devotion, and the values of Sanatan Dharma, leaving a lasting impact on their lives.
                      </p>
                      <p className="lineage-desc">
                        Even today, his Tapobhoomi (place of penance) remains a sacred center of unwavering faith, spiritual awareness, and the blessings of the Guru for devotees. His divine teachings and ideals continue to illuminate the eternal tradition of the Khaki Panth, inspiring and guiding future generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="content-hindi fade-in">
              <div className="about-saint-profile-row">
                <div className="profile-image-container">
                  <img src={baba} alt="श्री खाखी बाबा" className="profile-image" />
                </div>
                <div className="profile-text-container">
                  <h2>श्री खाखी बाबा</h2>
                  <p className="intro-text">
                    श्री खाखी बाबा एक महान संत, तपस्वी और दिव्य महात्मा थे जिनका संपूर्ण जीवन प्रभु भक्ति, कठोर साधना, आत्म-संयम और मानवता की निःस्वार्थ सेवा में समर्पित था। आज भी, हजारों श्रद्धालु दिव्य आशीर्वाद, शांति और आध्यात्मिक ऊर्जा प्राप्त करने के लिए श्री खाखी धाम आते हैं।
                  </p>
                </div>
              </div>

              <div className="history-section">
                <h3>श्री खाखी बाबा का पहाड़ी पर आगमन (1889)</h3>
                <p>
                  सन 1889 में, जब खेतड़ी के तत्कालीन नरेश महाराजा अजीत सिंह द्वारा क्षेत्र के किसानों की सिंचाई सुविधा हेतु एक बांध के निर्माण की तैयारियां की जा रही थीं, उस समय श्री खाखी बाबा उसी स्थान पर तपस्या में लीन थे, जहां आज अजीत सागर बांध स्थित है।
                </p>
                <p>
                  बांध निर्माण कार्य में ओड़ जाति के श्रमिक कार्यरत थे, जो बांध की पाल (दीवार) बनाने के लिए नीचे से मिट्टी खोदकर ला रहे थे। चूंकि उसी स्थान पर बाबा का तपस्थल था, इसलिए श्रमिकों ने विनम्रतापूर्वक बाबा से वहां से हटने का अनुरोध किया। परंतु श्री खाखी बाबा गहन तपस्या में लीन होने के कारण अपने स्थान से नहीं उठे।
                </p>
                <p>
                  जब यह बात तत्कालीन महाराजा अजीत सिंह तक पहुंचे, तो उन्होंने सिपाहियों को बाबा को वहां से हटाने का आदेश दे दिया। बताया जाता है कि जब सिपाहियों ने बाबा को हटाने का प्रयास किया, तभी अचानक मधुमक्खियों का एक विशाल झुंड प्रकट हुआ और सिपाहियों पर आक्रमण कर दिया। इस चमत्कारी घटना से सिपाही भयभीत होकर पीछे हट गए।
                </p>
                <p>
                  इस अद्भुत घटना का समाचार सुनकर महाराजा अजीत सिंह स्वयं बाबा के पास पहुंचे और उनसे क्षमा याचना की। तब बाबा ने अपने कमंडल से जल लिया और उस जल का स्पर्श सिपाहियों को कराया, जिससे उनकी पीड़ा तत्काल शांत हो गई।
                </p>
                <p>
                  इसके पश्चात राजा के विनती करने पर और किसानों के हित के लिये श्री खाखी बाबा ने अपनी स्वेच्छा और सहमति से पहाड़ी पर अपना ध्यान स्थल स्थापित किया और निवास किया। आज उसी पावन स्थल पर श्री खाखी बाबा का भव्य मंदिर स्थित है, जो श्रद्धालुओं के लिए आस्था, चमत्कार और शांति का केंद्र बना हुआ है।
                </p>
              </div>

              <div className="history-section">
                <h3>श्री खाखी बाबा का तपस्या का स्वरूप</h3>
                <p>
                  श्री खाखी बाबा की तपस्या अत्यंत कठोर, अनुशासित एवं दिव्य स्वरूप की थी। बाबा की तपस्या का समय प्रातः सूर्योदय के लगभग एक घंटे बाद से लेकर मध्याह्न 12 बजे तक निर्धारित था। इस अवधि में वे पूर्ण एकाग्रता एवं साधना में लीन रहते थे।
                </p>
                <p>
                  उनकी तपस्या की कठोरता अद्भुत एवं अनुपम थी। ग्रीष्म ऋतु में वे पहाड़ी पर अपने चारों ओर उपलों (कंडों) के ढेर जलाकर, उनके मध्य स्वयं बैठकर घंटों तक तपस्या करते थे। इसी प्रकार, शीत ऋतु एवं वर्षा ऋतु में वे झरनों से बहते अत्यंत शीतल जल में कई-कई घंटों तक बैठकर प्रभु भक्ति में लीन रहते थे।
                </p>
                <p>
                  इस प्रकार की कठोर साधना और आत्मसंयम ने श्री खाखी बाबा को एक महान तपस्वी के रूप में प्रतिष्ठित किया, जिनकी तपस्या आज भी श्रद्धालुओं के लिए प्रेरणा का स्रोत है।
                </p>
              </div>

              <div className="history-section">
                <h3>श्री खाखी बाबा की आलौकिक दिव्य शक्ति</h3>
                <p>
                  यद्यपि श्री खाखी बाबा के जन्मस्थान एवं उनके आगमन को लेकर विभिन्न जनों के अनेक मत एवं तर्क प्रचलित हैं, जिसके कारण इन विषयों पर कोई पूर्णतः निश्चित एवं स्पष्ट निष्कर्ष नहीं निकाला जा सकता, तथापि यह तथ्य निर्विवाद है कि उन्होंने विभिन्न स्थानों पर कठोर तपस्या करने के पश्चात लोहार्गल में संत शिरोमणि श्री सुखरामदास जी को अपना गुरु स्वीकार किया। गुरु दीक्षा प्राप्त करने के उपरांत, श्री खाखी बाबा ने ग्राम डाडा फतेहरा की पहाड़ी को अपनी तपस्थली के रूप में चयनित किया।
                </p>
                <p>
                  श्री खाखी बाबा एक महान तपस्वी एवं दिव्य महात्मा हैं। भक्तों के अनुसार उनका मुखमंडल अत्यंत आलोकिक, कांतिमय और प्रभावशाली था। उनके शीश पर बड़ी-बड़ी जटाएं, मुख पर घनी दाढ़ी, गौरवर्ण विशाल ललाट तथा तेजस्वी नेत्र उनके अदम्य पुरुषार्थ और आध्यात्मिक तेज को प्रकट करते थे। वे सामान्यतः शरीर पर लंगोट धारण करते थे तथा कभी-कभी पीला चोला (अंगरखी) भी पहनते थे। पैरों में वे प्रायः खड़ाऊँ धारण किया करते थे।
                </p>
                <p>
                  अजीत सागर बांध से निरंतर बहने वाला जल एक नाले का रूप ले चुका था। उसी नाले के किनारे श्री खाखी बाबा का धूणा स्थित था, जिसमें सदैव चिमटा स्थापित रहता था। यह प्राचीन धूणा वर्तमान मंदिर एवं बांध—दोनों के लगभग मध्य भाग में, उत्तर दिशा की ओर स्थित था। इसी धूणे पर बाबा अपनी तपस्या किया करते थे।
                </p>
                <p>
                  तपस्या के उपरांत का समय वे आर्त एवं दुखी जनों की सेवा, भक्तों से संवाद, मार्गदर्शन तथा भजन-कीर्तन में व्यतीत करते थे। प्रत्यक्षदर्शी भक्तों के वंशजों के अनुसार, जब शिवोपासक श्री खाखी बाबा चिमटा धारण कर गहन तपस्या में लीन होते थे, तब ऐसा प्रतीत होता था मानो साक्षात् भगवान शिव स्वयं पृथ्वी पर अवतरित हो गए हों।
                </p>
              </div>

              <div className="history-section highlight-box">
                <h3>महाप्रयाण (अन्तर्ध्यान होना)</h3>
                <p>
                  श्री खाखी बाबा महाराज अपने जीवनकाल में भक्तों, सेवकों एवं दाताओं को उनकी श्रद्धा और भावना के अनुरूप कभी प्रत्यक्ष रूप से, तो कभी उनकी इच्छानुसार फल प्रदान कर समय-समय पर कृतार्थ करते रहे।
                </p>
                <p>
                  <strong>संवत 1931, फाल्गुन कृष्ण अमावस्या</strong> का पावन दिन था। उस दिन आकाश में अचानक काले बादल छा गए, तेज हवाएं चलने लगीं और वातावरण में एक अलौकिक परिवर्तन अनुभव होने लगा। कुछ समय पूर्व ही श्री खाखी बाबा पहाड़ी के नीचे बहते जल में तपस्या कर अपने धूणे पर लौटे थे।
                </p>
                <p>
                  उस समय रामू जी बाबा के लिए जल-पान की व्यवस्था कर रहे थे और बीसूरामजी, जो अजीत सागर बांध के प्राचीन शिव मंदिर के पुजारी थे, बाबा के दर्शन हेतु वहां उपस्थित थे। बाबा ने दोनों को अपने पास बुलाया। वे दोनों श्रद्धापूर्वक हाथ जोड़कर बाबा के समीप बैठ गए।
                </p>
                <p>
                  तब बाबा ने अत्यंत शांत स्वर में कहा— <em>“भक्तों, आज हम तपस्या करने किसी और स्थान पर प्रस्थान कर रहे हैं”</em>
                </p>
                <p>
                  इसके पश्चात बाबा ने बीसूरामजी से कहा— <em>“यह अंगरखी तुम संभालो।”</em> और रामू जी से कहा— <em>“तुमने मेरी बहुत सेवा की है, ये खड़ाऊँ, चिमटा और कमंडल संभाल लेना।”</em>
                </p>
                <p>
                  इतना कहकर बाबा के मुख से <strong>“ॐ शिव… ॐ शिव…”</strong> के शब्द निकले। उन्होंने ऊपर की ओर मुख करके एक गहरी उबासी ली। पास बैठे भक्तों ने जब ऊपर की ओर देखा, तो पलक झपकते ही श्री खाखी बाबा भौतिक रूप से अदृश्य हो चुके थे।
                </p>
                <p>
                  इस अद्भुत एवं दिव्य क्षण को देखकर वहां उपस्थित भक्त चेतनाशून्य से रह गए। श्री खाखी बाबा प्रिय भक्तों के लिए अदृश्य रूप में विद्यमान हैं और आज भी उनके दुख-दर्द हरते हुए उन्हें कृपा प्रदान करते रहते हैं।
                </p>
              </div>

              {/* गुरु-शिष्य परंपरा Section */}
              <div className="lineage-section">
                <h2 className="lineage-english">गुरु-शिष्य परंपरा</h2>
                <p className="lineage-shloka">॥ गुरुपरम्परासेवायांमम् शिरः सदा नत्वातिष्ठतु ॥</p>
                <p className="lineage-shloka-meaning">गुरु-परम्परा की सेवा में मेरा सिर सदैव विनम्रतापूर्वक झुका रहे|</p>

                <div className="lineage-flow">
                  {/* व्यक्ति 1 */}
                  {/* व्यक्ति 1 - गुरु किलजी बाबा महाराज */}
                  <div className="lineage-card">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={kiljiKhadau} alt="गुरु कीलजी बाबा महाराज खड़ाऊं" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">अनन्त श्री विभूषित श्री श्री १००८ गुरु कीलजी बाबा महाराज</h3>
                      <p className="lineage-role">महंत, गलता जी गद्दी, जयपुर · खाकी पंथ के आद्य प्रवर्तक</p>
                      <p className="lineage-desc">
                        श्री श्री १००८ गुरु कीलजी बाबा महाराज गलता जी (जयपुर, राजस्थान) की पवित्र गद्दी के महंत तथा खाकी पंथ के आद्य प्रवर्तक एवं महान तपस्वी संत माने जाते हैं। उनकी तपोभूमि श्री गलता जी रही, जहाँ उन्होंने कठोर तप, दीर्घकालीन समाधि तथा वैराग्यमय जीवन के माध्यम से तप एवं साधना की एक अद्वितीय परंपरा स्थापित की।
                      </p>
                      <p className="lineage-desc">
                        खाकी पंथ की परंपरा के अनुसार इसकी आध्यात्मिक उत्पत्ति त्रेतायुग के रामायण काल से मानी जाती है। मान्यता है कि भगवान श्रीराम द्वारा ताड़का के वध के पश्चात उसका शरीर भस्म में परिवर्तित हो गया, जिसे साधु-संतों ने अधर्म पर धर्म की विजय तथा अहंकार के दहन का प्रतीक मानकर अपने शरीर पर धारण करना प्रारम्भ किया। इसी कारण यह परंपरा 'खाकी पंथ' के नाम से प्रसिद्ध हुई।
                      </p>
                      <p className="lineage-desc">
                        गुरु कीलजी बाबा महाराज ने इस परंपरा को तप, त्याग, वैराग्य एवं आत्मानुशासन के माध्यम से सुदृढ़ किया। वे महान तपस्वी थे और दीर्घकाल तक समाधिस्थ रहकर कठोर साधना करते थे। उनके संबंध में यह भी प्रसिद्ध है कि उनकी जटाएँ इतनी लंबी एवं विशाल थीं कि उनके साथ चलने के लिए चार शिष्यों को उन्हें संभालना पड़ता था, जो उनकी विलक्षण तपस्या और वैराग्यमय जीवन का प्रतीक माना जाता है।
                      </p>
                      <p className="lineage-desc">
                        इस परंपरा के संत शैव साधुओं की भाँति जटाधारी होते हैं, शरीर पर पवित्र भस्म धारण करते हैं तथा यह मानते हैं कि जिस प्रकार नदी का प्रवाह निरंतर गतिमान रहता है, उसी प्रकार एक साधु का जीवन भी सदैव भ्रमणशील होना चाहिए; इसलिए इस परंपरा के संत किसी एक स्थान पर स्थायी रूप से निवास नहीं करते।
                      </p>
                    </div>
                  </div>

                  {/* तीर 1 */}
                  <div className="lineage-arrow">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">⬇</div>
                  </div>

                  {/* व्यक्ति 2 - संत शिरोमणि श्री सुखरामदास जी */}
                  <div className="lineage-card">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={sukhramdasImg} alt="संत शिरोमणि श्री सुखरामदास जी बाबा महाराज" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">संत शिरोमणि श्री श्री १००८ श्री गुरु सुखरामदास जी बाबा महाराज</h3>
                      <p className="lineage-role">लोहार्गल धाम में खाकी परंपरा के जनक</p>
                      <p className="lineage-desc">
                        श्री श्री १००८ श्री गुरु सुखरामदास जी बाबा महाराज खाकी पंथ की गौरवशाली गुरु-शिष्य परंपरा के प्रमुख संत एवं श्री गुरु कीलजी बाबा महाराज के परम शिष्य थे। गुरु कीलजी बाबा महाराज से दीक्षा प्राप्त करने के पश्चात उन्होंने राजस्थान के पावन तीर्थ श्री लोहार्गल धाम को अपनी तपोभूमि बनाया तथा उत्तर-पश्चिम भारत में खाकी पंथ के प्रचार-प्रसार एवं आध्यात्मिक जागरण का महत्वपूर्ण कार्य किया। उन्हें इस क्षेत्र में खाकी परंपरा का जनक माना जाता है।
                      </p>
                      <p className="lineage-desc">
                        वे सदैव शांत, तेजस्वी एवं समाधिस्थ स्वरूप के धनी थे। उनके मस्तक पर सुशोभित वैष्णव तिलक, करकमलों में जपमाला तथा अखण्ड प्रज्वलित धूनी के सान्निध्य में संपन्न उनकी तपस्या एवं साधना, उनके निरंतर नाम-स्मरण और वैराग्यमय जीवन की साक्षी मानी जाती है।
                      </p>
                      <p className="lineage-desc">
                        गुरु-परंपरा में उन्हें अत्यंत आदरणीय स्थान प्राप्त है, जो उनके आध्यात्मिक तेज, गुरु-भक्ति एवं लोककल्याण के प्रति समर्पण का परिचायक है। उनके तप, त्याग एवं वैराग्य ने इस परंपरा को एक नई दिशा प्रदान की तथा असंख्य साधकों को सनातन धर्म और तपस्वी जीवन की ओर प्रेरित किया। आज भी श्री लोहार्गल धाम उनकी तपस्या, साधना और दिव्य परंपरा का साक्षी बनकर श्रद्धालुओं को आध्यात्मिक प्रेरणा प्रदान करता है।
                      </p>
                    </div>
                  </div>

                  {/* तीर 2 */}
                  <div className="lineage-arrow">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">⬇</div>
                  </div>

                  {/* व्यक्ति 3 — श्री खाखी बाबा */}
                  <div className="lineage-card lineage-card-final">
                    <div className="lineage-img-wrapper rect-poster">
                      <img src={khakhiBabaPoster} alt="संतनामाग्रण्य श्री श्री १००८ श्री खाखी बाबा महाराज" className="lineage-img-rect" />
                    </div>
                    <div className="lineage-card-body">
                      <h3 className="lineage-name">संतनामाग्रण्य श्री श्री १००८ श्री खाखी बाबा महाराज</h3>
                      <p className="lineage-role">डाडा फतेहपुरा के महान तपस्वी एवं दिव्य संत</p>
                      <p className="lineage-desc">
                        श्री श्री १००८ श्री खाखी बाबा महाराज संत शिरोमणि श्री गुरु सुखरामदास जी बाबा महाराज के परम शिष्य थे, जिन्होंने अपने गुरुदेव से दीक्षा प्राप्त कर उनके तप, त्याग, वैराग्य, गुरु-सेवा एवं सनातन धर्म के आदर्शों को अपने जीवन का आधार बनाया। गुरु आज्ञा का पालन करते हुए तथा भ्रमणशील साधु परंपरा के सिद्धांत का अनुसरण करते हुए वे लोहार्गल से प्रस्थान कर डाडा फतेहपुरा पधारे, जहाँ उन्होंने अपनी तपस्या एवं साधना से उस भूमि को पावन बनाया।
                      </p>
                      <p className="lineage-desc">
                        अपने गुरु के आदेशानुसार उन्होंने कठोर तपस्या, अखण्ड साधना तथा लोककल्याण के माध्यम से खाकी पंथ की आध्यात्मिक परंपरा को जनमानस तक पहुँचाया और असंख्य श्रद्धालुओं के जीवन में श्रद्धा, भक्ति एवं धर्म के संस्कारों का संचार किया।
                      </p>
                      <p className="lineage-desc">
                        उनकी तपोभूमि आज भी श्रद्धालुओं के लिए अटूट आस्था, आध्यात्मिक चेतना एवं गुरु-कृपा का पावन केंद्र है तथा उनकी दिव्य शिक्षाएँ और आदर्श खाकी पंथ की अखण्ड परंपरा को निरंतर आलोकित करते हुए आने वाली पीढ़ियों का मार्गदर्शन कर रहे हैं।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : tab === "dham" ? (
          /* Dham Location & Environment Content */
          lang === "en" ? (
            <div className="content-english fade-in">
              <div className="content-intro">
                <h2>Sri Khakhi Dham</h2>
                <p className="intro-text">
                  Sri Khakhi Dham is a highly revered, peaceful, and visually enchanting hilltop pilgrimage site. Nestled in nature, it offers a deeply meditative space where thousands find spiritual refuge.
                </p>
              </div>

              <div className="history-section">
                <h3>Geographic Location & Surroundings</h3>
                <p>
                  Sri Khakhi Dham is a sacred spiritual destination located approximately 9 kilometers east of Khetri, along the Khetri–Delhi (via Nizampur) main road. Khetri town lies to the south-west of the Dham, while Dada Fatehpura village is situated in the north-east direction.
                </p>
                <p>
                  To the west stands the historic Ajit Sagar Dam, constructed by the former ruler of Khetri, Maharaja Ajit Singh, and to the east lies the vast and scenic Ajit Niwas Garden, a major attraction for visitors.
                </p>
                <p>
                  Nestled between these natural and historical landmarks, Sri Khakhi Dham is built on a small hill along the canal and is clearly visible from the main road. Due to its elevated location, the Dham offers panoramic views of nearby villages such as Dada, Fatehpura, Tyoda, Rampura, Nalpur, Gaurir, Meharda, Dosi, and several others.
                </p>
              </div>

              <div className="history-section">
                <h3>Natural Beauty & Serene Atmosphere</h3>
                <p>
                  Surrounded by lush greenery, gardens, dams, streams, canals, and dense forested landscapes, the natural beauty of this place is truly captivating. The cool, fragrant breeze infused with the aroma of flowers refreshes the mind, relieves fatigue, and fills the body with renewed energy and peace.
                </p>
                <p>
                  The serene and picturesque environment of Sri Khakhi Dham enhances its spiritual charm, making it a deeply soothing, scenic, and profoundly peaceful destination for every devotee and visitor.
                </p>
              </div>
            </div>
          ) : (
            <div className="content-hindi fade-in">
              <div className="content-intro">
                <h2>श्री खाखी धाम</h2>
                <p className="intro-text">
                  श्री खाखी धाम एक पावन, रमणीय और अत्यंत शांत पहाड़ी तीर्थ स्थल है। प्रकृति के आँचल में स्थित यह स्थल साधकों और श्रद्धालुओं को दिव्य शांति और आध्यात्मिक ऊर्जा का अनुपम अनुभव प्रदान करता है।
                </p>
              </div>

              <div className="history-section">
                <h3>भौगोलिक स्थिति एवं परिवेश</h3>
                <p>
                  खेतड़ी से लगभग 9 किलोमीटर पूर्व दिशा में, खेतड़ी–दिल्ली (वाया निजामपुर) मुख्य मार्ग पर स्थित श्री खाखी धाम एक पावन एवं रमणीय तीर्थस्थल है। इस धाम के दक्षिण-पश्चिम दिशा में खेतड़ी नगर तथा उत्तर-पूर्व दिशा में डाडा फतेहरा ग्राम स्थित है।
                </p>
                <p>
                  इसके पश्चिम में खेतड़ी के तत्कालीन नरेश महाराजा अजीत सिंह द्वारा निर्मित ऐतिहासिक अजीत सागर बांध है, जबकि पूर्व दिशा में विस्तृत एवं मनोहारी अजीत निवास बाग स्थित है, जो पर्यटकों के लिए एक प्रमुख आकर्षण केंद्र है।
                </p>
                <p>
                  इन सभी प्राकृतिक एवं ऐतिहासिक स्थलों के मध्य, नहर के किनारे एक छोटी पहाड़ी पर स्थित श्री खाखी धाम मुख्य मार्ग से ही स्पष्ट रूप से दृष्टिगोचर होता है। ऊंचाई पर स्थित होने के कारण यहां से आसपास के अनेक गांव—डाडा फतेहरा, त्योदा, रामपुरा, नालपुर, गौहीर, मेहाड़ा, दोसी आदि—दूर-दूर तक स्पष्ट दिखाई देते हैं।
                </p>
              </div>

              <div className="history-section">
                <h3>प्राकृतिक सौंदर्य एवं अलौकिक वातावरण</h3>
                <p>
                  चारों ओर फैला हरियाली से परिपूर्ण वातावरण, बाग-बगीचे, बांध, नाले, नहरें तथा बीहड़ वन क्षेत्र इस स्थान की प्राकृतिक सुंदरता को और भी अलौकिक बना देते हैं। यहां बहने वाली पुष्पों की सुगंध से युक्त शीतल एवं शुद्ध पवन मन की थकान को हर लेती है और शरीर व मन में नवीन स्फूर्ति का संचार करती है।
                </p>
                <p>
                  श्री खाखी धाम का यह दिव्य प्राकृतिक सौंदर्य प्रत्येक श्रद्धालु एवं यात्री के लिए अत्यंत सुखद, रमणीय तथा परम शांति प्रदान करने वाला अनुभव बन जाता है।
                </p>
              </div>
            </div>
          )
        ) : (
          /* Published Books Content */
          <div className="books-container fade-in">
            <div className="books-intro-card">
              <h2>{lang === "en" ? "Published Spiritual Literature" : "प्रकाशित आध्यात्मिक साहित्य"}</h2>
              <p>
                {lang === "en" 
                  ? "Sri Khakhi Baba Seva Sangh is committed to preserving and propagating the holy teachings, prayers, and history of the Guru Parampara. Below is the list of printed song collections published and circulated by the Trust."
                  : "श्री खाखी बाबा सेवा संघ गुरु-परंपरा की दिव्य शिक्षाओं, प्रार्थनाओं और इतिहास के संरक्षण व प्रचार-प्रसार के लिए समर्पित है। नीचे न्यास द्वारा प्रकाशित एवं वितरित मुद्रित भजन संग्रहों की सूची दी गई है।"}
              </p>
            </div>

            <div className="books-grid">
              {booksData.map((book) => (
                <div key={book.id} className="book-card" data-aos="fade-up">
                  <div className="book-cover-container">
                    <img src={book.cover} alt={book.title[lang]} className="book-cover-img" />
                    <div className="book-cover-overlay"></div>
                  </div>
                  <div className="book-details">
                    <div className="book-meta">
                      <span>{book.year}</span>
                    </div>
                    <h3 className="book-title">{book.title[lang]}</h3>
                    <p className="book-author">{lang === "en" ? "Publisher: " : "प्रकाशक: "}{book.author[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
