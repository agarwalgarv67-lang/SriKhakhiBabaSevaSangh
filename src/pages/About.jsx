import { useState } from "react";
import baba from "../assets/images/baba.jpeg";
import temple from "../assets/images/temple.jpeg";
import { FaLanguage, FaHistory, FaMapMarkedAlt } from "react-icons/fa";

function About() {
  const [lang, setLang] = useState("en"); // 'en' or 'hi'
  const [tab, setTab] = useState("saint"); // 'saint' or 'dham'

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
            <FaHistory /> {lang === "en" ? "Sri Khakhi Baba (The Saint)" : "श्री खाखी बाबा (जीवनी)"}
          </button>
          <button 
            className={`tab-btn ${tab === "dham" ? "active" : ""}`} 
            onClick={() => setTab("dham")}
          >
            <FaMapMarkedAlt /> {lang === "en" ? "Sri Khakhi Dham (The Temple)" : "श्री खाखी धाम (स्थान)"}
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
            </div>
          )
        ) : (
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
        )}
      </div>
    </section>
  );
}

export default About;
