import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { FaFire, FaBookOpen, FaPray, FaHands, FaLanguage } from "react-icons/fa";
import jyotImg from "../assets/images/jyot.jpeg";
import bhajanImg from "../assets/images/bhajan.jpeg";

function GuruMahima() {
  const { lang, setLang } = useLang();
  const [tab, setTab] = useState("gurugita"); // 'gurugita', 'babastuti', 'panchatattva', 'aarti'
  const [aartiTab, setAartiTab] = useState("aarti1"); // 'aarti1', 'aarti2'

  // Guru Gita Shlokas Data
  const shlokasData = [
    {
      num: 1,
      speaker: { en: "Suta Uvacha", hi: "सूत उवाच" },
      sanskrit: "कैलासशिखरे रम्ये भक्तिसन्धाननायकम् ।\nप्रणम्य पार्वती भक्त्या शङ्करं पर्यपृच्छत् ॥१॥",
      meaning: {
        en: "Suta said: Sitting on the beautiful summit of Mount Kailasa, Goddess Parvati, the leader of seekers of devotion, bowed down with deep devotion and questioned Lord Shankara.",
        hi: "सूत बोले— कैलास पर्वत के मनोरम शिखर पर विराजमान भक्तों में श्रेष्ठ, भगवान् शंकर को प्रणाम कर देवी पार्वती ने पूछा।"
      }
    },
    {
      num: 2,
      speaker: { en: "Devyuvacha", hi: "देव्युवाच" },
      sanskrit: "ॐ नमो देवदेवेश परात्पर जगद्गुरो ।\nसदाशिव महादेव गुरुदीक्षां प्रदेहि मे ॥२॥",
      meaning: {
        en: "Devi Parvati said: Om, obeisances to the Lord of gods, who is higher than the highest and the Guru of the universe. O Sadashiva, O Mahadeva, please grant me Guru-diksha (initiation).",
        hi: "देवी पार्वती भगवान् शिव से कहती हैं— हे सभी देवताओं के देव! हे परात्पर जगद्गुरु! हे सदाशिव महादेव! आप मुझे गुरु-दीक्षा प्रदान कीजिए।"
      }
    },
    {
      num: 3,
      speaker: { en: "Devyuvacha", hi: "देव्युवाच" },
      sanskrit: "केन मार्गेण भो स्वामिन् देही ब्रह्ममयो भवेत् ।\nकृपां कुरु मे स्वामिन् नमामि चरणौ तव ॥३॥",
      meaning: {
        en: "O Lord, by what path can an embodied soul become one with Brahman? O Master, please have mercy on me. I bow down to your feet.",
        hi: "हे स्वामी! वह कौन-सा मार्ग है जिससे देही ब्रह्ममय हो जाता है? मुझ पर कृपा कीजिए। मैं आपके चरणों में प्रणाम करती हूँ।"
      }
    },
    {
      num: 4,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "मम रूपासि देवि त्वं त्वत्प्रीत्यर्थं वदाम्यहम् ।\nलोकोपकारकः प्रश्नो न केनापि कृतः पुरा ॥४॥",
      meaning: {
        en: "Lord Shiva said: O Devi, you are my own form. Out of my affection for you, I tell you this. No one has ever asked this question before, which is for the benefit of the entire world.",
        hi: "भगवान् शिव बोले— हे देवि! तुम मेरा ही स्वरूप हो। तुम्हारे प्रति स्नेहवश मैं यह परम रहस्य कह रहा हूँ। तुम्हारे द्वारा पूछा गया यह प्रश्न सम्पूर्ण लोक के उपकार के लिए है। ऐसा प्रश्न पूर्वकाल में किसी ने नहीं पूछा, इसलिए मैं तुम्हें इसका उत्तर देता हूँ।"
      }
    },
    {
      num: 5,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "दुर्लभं त्रिषु लोकेषु तच्छृणुष्व वदाम्यहम् ।\nगुरुं विना ब्रह्म नान्यत् सत्यं सत्यं वरानने ॥५॥",
      meaning: {
        en: "It is rare to find the answer to your questions anywhere else in the three worlds. Listen carefully to what I say, O beautiful-faced Parvati! This is absolutely true: there is no Brahman other than the Guru. The Guru alone makes this worldly soul realize its true Brahman nature.",
        hi: "तुम्हारे द्वारा किये गये प्रश्नों का समाधान तीनों लोकों में अन्यत्र कहीं मिलना दुर्लभ है। अतः मैं जो कुछ कह रहा हूँ, उसे पूर्ण सावधानी से सुनो, हे सुन्दर मुख वाली देवी पार्वती! यह बात पूर्णतया सत्य है कि गुरु के अतिरिक्त कोई ब्रह्म नहीं है। अर्थात् इस संसारी जीव को ब्रह्मस्वरूप का बोध कराने वाला एकमात्र गुरु ही है।"
      }
    },
    {
      num: 6,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "वेदशास्त्रपुराणानि इतिहासादिकानि च ।\nमन्त्रयन्त्रादिविद्याश्च स्मृतिरुच्चाटनादिकम् ॥६॥",
      meaning: {
        en: "The Vedas, scriptures, all Puranas, Upa-puranas, histories like Ramayana and Mahabharata, treatises on mantra-tantra, and scriptures on Smriti, Uchhatana, etc., are various types of texts.",
        hi: "वेदशास्त्र, सभी पुराण-उपपुराण आदि और इतिहास—रामायण, महाभारत, आख्यान-उपाख्यान आदि, स्मृतिशास्त्र, मन्त्र-यन्त्र-उच्चाटन आदि की प्रतिपादक विद्याएँ—ये सब विविध प्रकार के शास्त्र हैं।"
      }
    },
    {
      num: 7,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "शैवशाक्तागमादीनि अन्यानि विविधानि च ।\nअपभ्रंशकराण्याहुः जीवानां भ्रान्तचेतसाम् ॥७॥",
      meaning: {
        en: "The scriptures like Shaiva, Shakta, Agama, and various other texts, only serve as a cause of confusion for souls with deluded minds. If distracted or undiscriminating people misuse these scriptures, they surely move towards downfall. Therefore, a seeker should receive the grace of the Guru and faithfully follow the path shown by him.",
        hi: "शैव-शास्त्र आदि नाना प्रकार के आगम तथा अन्य विविध शास्त्र—ये सब भ्रान्तचित्त व्यक्तियों को अनेक प्रकार की भ्रान्तियों में उलझाने का साधन मात्र बन जाते हैं। इसका अभिप्राय यह है कि यदि चित्तविक्षिप्त अथवा विवेकहीन व्यक्ति इन शास्त्रों का दुरुपयोग करते हैं, तो वे निश्चय ही पतन के मार्ग की ओर अग्रसर होते हैं। अतः शासक को गुरु की कृपा प्राप्त कर, उनके द्वारा उपदिष्ट मार्ग का निष्ठापूर्वक अनुसरण करना चाहिए।"
      }
    },
    {
      num: 15,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "गुरोः पादोदकं पीत्वा गुरोरुच्छिष्टभोजनम्।\nगुरुमूर्तेः सदा ध्यानं गुरुमन्त्रं सदा जपेत्॥१५॥",
      meaning: {
        en: "One should drink the holy water of the Guru's feet (charanamrta), partake of the Guru's prasad (remnants of food), always meditate on the form of the Guru, and constantly chant the Guru-mantra.",
        hi: "गुरु के चरणोदक का पान कर, गुरु के छोड़े गये उच्छिष्ट भोजन से पूजित होकर मनुष्य को सदा गुरु की मूर्ति का ध्यान करना चाहिये और गुरु-मन्त्र का जप सतत करते रहना चाहिये॥१५॥"
      }
    },
    {
      num: 16,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "काशीक्षेत्रं तन्निवासो जाह्नवी चरणोदकम्।\nगुरुर्विश्वेश्वरः साक्षात् तारकं ब्रह्म निश्चितम्॥१६॥",
      meaning: {
        en: "The Guru's abode (home) itself is Kashi Kshetra, the water of his feet is the Ganga, and the Guru himself is Vishweshvara — the Lord of Kashi. He is indeed the Taraka Brahman, the liberating mantra that grants moksha at the final moment.",
        hi: "गुरु का निवासस्थान (घर) ही काशी क्षेत्र है, उसका चरणोदक ही गंगा है और स्वयं गुरु विश्वेश्वर हैं, अर्थात् काशी नगरी के अधिपति भगवान विश्वनाथ हैं। ये ही तारक ब्रह्म भी हैं, यह बात भी निश्चित है, अर्थात् काशी विश्वेश्वर जीव को अन्तिम समय में काशी में जिस तारक ब्रह्म का, मोक्ष पद को देने वाले मन्त्र का उपदेश करते हैं, वह भी गुरु का ही प्रसाद है।"
      }
    },
    {
      num: 77,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "गुरुरादिरनादिश्च गुरुः परमदैवतम्।\nगुरोः परतरं नास्ति तस्मै श्रीगुरवे नमः॥७७॥",
      meaning: {
        en: "The Guru is the original cause of our knowledge, and this form of the Guru is without beginning or end. The Guru alone is the highest deity. There is no one greater than the Guru in this entire world. We bow down to that Guru.",
        hi: "गुरु हमारी ज्ञान-प्राप्ति का आदिकारण है एवं यह गुरुमूर्ति आदि और अन्त से रहित है। गुरु ही सर्वश्रेष्ठ देवता है। गुरु से बढ़कर इस संसार में दूसरा कोई नहीं है। उस गुरु के प्रति हम नतमस्तक हैं॥७७॥"
      }
    },
    {
      num: 78,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "सप्तसागरपर्यन्ततीर्थस्नानादिकं फलम्।\nगुरोरङ्घ्रिपयोबिन्दुसहस्रांशेन दुर्लभम्॥७८॥",
      meaning: {
        en: "The merit gained by bathing and performing rituals at all holy places extending to the seven seas cannot be equalled even by one-thousandth part of a single drop of water from the Guru's feet. In other words, the entire merit from visiting all pilgrimage sites is obtained simply from a drop of the Guru's charanamrta.",
        hi: "सात समुद्र पर्यन्त समस्त तीर्थों में स्नान, तर्पण आदि से जो फल मिलता है, वह समस्त पुण्य गुरुदेव के चरणों के प्रक्षालन से प्राप्त पादोदक की एक बूँद के हजारवें हिस्से से भी दुर्लभ नहीं है, अर्थात् समस्त तीर्थों के सेवन से जितना पुण्य प्राप्त होता है, वह सब गुरु के चरणों की धोवन की एक बूँद के हजारवें हिस्से से ही मिल जाता है॥७८॥"
      }
    },
    {
      num: 79,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "हरौ रुष्टे गुरुस्त्राता गुरौ रुष्टे न कश्चन।\nतस्मात् सर्वप्रयत्नेन श्रीगुरुं शरणं व्रजेत्॥७९॥",
      meaning: {
        en: "If Hari — all forms of God and all deities — become displeased, the Guru can still protect the devotee. But if the Guru becomes displeased, no one else can protect him. Therefore, firmly understanding this truth, one should always seek refuge in the Guru with full effort.",
        hi: "हरि के, अर्थात् भगवान के समस्त रूपों के, समस्त देवताओं के रुष्ट (नाराज) हो जाने पर तो व्यक्ति की गुरु रक्षा कर लेता है, किन्तु गुरु के रुष्ट हो जाने पर उसकी रक्षा करने वाला दूसरा कोई नहीं है। अतः इस विषय को पूरी तरह से मन में बैठा कर हर समय गुरु की शरण में जाने का ही प्रयत्न करना चाहिये।"
      }
    },
    {
      num: 83,
      speaker: { en: "Ishvara Uvacha", hi: "ईश्वर उवाच" },
      sanskrit: "गुरोः कृपाप्रसादेन ब्रह्माविष्णुसदाशिवाः।\nसमर्थाः प्रभवादौ च केवलं गुरुसेवया॥८३॥",
      meaning: {
        en: "It is only through the gracious blessing obtained by worshipping the Guru alone that Brahma, Vishnu, and Sadashiva become capable of performing their respective functions of creation, sustenance, and dissolution.",
        hi: "एकमात्र गुरु की उपासना करने से मिली गुरु की कृपा के प्रसाद से ही ब्रह्मा, विष्णु और सदाशिव क्रमशः सृष्टि-स्थिति-संहार रूप अपने-अपने कार्यों को करने में समर्थ हो जाते हैं।"
      }
    }
  ];

  // Baba Stuti Couplets
  const stutiData = [
    {
      hi: "चिदानंद पावन परम, श्री खाखी जी को नाम |\nनित्य मन में ध्याय के, नित्य करो प्रणाम ॥",
      en: "Chidaananda paavana parama, Shri Khaakhi Ji ko naam |\nNitya mana mein dhyaaya ke, nitya karo pranaama ||"
    },
    {
      hi: "सब पर्वत स्याही करूँ, घोल समुद्र मँझाएँ |\nधरती का कागज करूँ, श्री खाखी जी कि स्तुति न समाएँ ॥",
      en: "Saba parvata syaahi karoon, ghola samudra manjhaaye |\nDharati ka kaagaja karoon, Shri Khaakhi Ji ki stuti na samaaye ||"
    },
    {
      hi: "जिनकी चरण सरोज रज, करे पाप का नाश |\nतिनके चरण सरोज की, निशदिन मुझको आशा ॥",
      en: "Jinaki charana saroja raja, kare paapa ka naasha |\nTinake charana saroja ki, nishadina mujhako aasha ||"
    },
    {
      hi: "कीर्ति किस विधि से कहूँ, दीजिये नाथ बताय |\nआपकी कृपा से प्रभु, आपकी ही चरणी आय ॥",
      en: "Keerti kisa vidhi se kahoon, deethiye naatha bataaya |\nAapaki kripaa se prabhu, aapaki hi charani aaya ||"
    },
    {
      hi: "जो जिस युग में प्रकट हो, वही करे कल्याण |\nतिनके चरण सरोज पर, मेरा कोटि कोटि प्रणाम ॥",
      en: "Jo jisa yuga mein prakata ho, vahi kare kalyaana |\nTinake charana saroja para, mera koti koti pranaama ||"
    },
    {
      hi: "नैनों से आँसू बहे, दुःख सागर दुःख देत |\nतात मात पितु बान्धवल, सुधी कोई नहीं लेत ॥",
      en: "Nainon se aansoo bahe, duhkha saagara duhkha deta |\nTaata maata pitu baandhavala, sudhi koi nahi leta ||"
    },
    {
      hi: "हे बाबा डुबा जात हूँ, भवसागर के बीच |\nश्वास न लेने देता है, मोह माया की कीच ॥",
      en: "He Baaba dubaa jaata hoon, bhavasaagara ke beecha |\nShvaasa na lene deta hai, moha maaya ki keecha ||"
    },
    {
      hi: "योग सिद्धी से करत है, भक्त जननु के काज |\nयोग सिद्धी से देते है, प्रभु त्रिभुवन का राज ॥",
      en: "Yoga siddhi se karata hai, bhakta jananu ke kaaja |\nYoga siddhi se dete hai, prabhu tribhuvana ka raaja ||"
    },
    {
      hi: "योग सिद्धी से करत है, खाखी जी उपकार |\nयोग सिद्धी से करत है बन्द नरक के द्वार ॥",
      en: "Yoga siddhi se karata hai, Khaakhi Ji upakaara |\nYoga siddhi se karata hai banda naraka ke dvaara ||"
    },
    {
      hi: "पुत्र सदा जानत रहे, नंद यशोदा मात |\nअर्जुन जाने मित्रवर, परब्रह्म नहीं जानत ॥",
      en: "Putra sada jaanata rahe, Nanda Yashoda maata |\nArjuna jaane mitravara, parabrahma nahi jaanata ||"
    },
    {
      hi: "तैसे श्री खाखीजी, निज को नहीं प्रकटाये |\nभक्त जनन को चाहिए, समय न वृथा गवाये ॥",
      en: "Taise Shri Khaakhiji, nija ko nahi prakataaye |\nBhakta janana ko chaahiye, samaya na vritha gavaaye ||"
    },
    {
      hi: "तीर्थ नहाएँ एक फल, संत मिले फल चार |\nश्री सद्गुरु मिले फल अनेक, कह कबीर विचार ॥",
      en: "Teertha nahaaye eka phala, santa mile phala chaara |\nShri Sadguru mile phala aneka, kaha Kabeera vichaara ||"
    },
    {
      hi: "तीन लोक नवखण्ड में, श्री खाखी जी से बड़ा न कोय |\nकरता करे न कर सके, श्री खाखी जी करे से होय ॥",
      en: "Teena loka navakhanda mein, Shri Khaakhi Ji se bada na koya |\nKarata kare na kara sake, Shri Khaakhi Ji kare se hoya ||"
    },
    {
      hi: "जड़ चेतन में आपकी, एक शक्ति दरसाय |\nजलचर थलचर व्योमचर, निशदिन थारों ही गुण गाय ॥",
      en: "Jada chetana mein aapaki, eka shakti darasaaya |\nJalachara thalachara vyomachara, nishadina thaaron hi guna gaaya ||"
    },
    {
      hi: "शील क्षमा दया सागर, जा मे रूप अपार |\nसभी भक्त दर पर रहे, मेरी विनय हो बारम्बार ॥",
      en: "Sheela kshama daya saagara, ja me roopa apaara |\nSabhi bhakta dara para rahe, meri vinaya ho baarambaara ||"
    },
    {
      hi: "जो सुख लोका लोक के, सभी आपके हाथ |\nएक दया की दृष्टि-से, करदो नाथ सनाथ ॥",
      en: "Jo sukha loka loka ke, sabhi aapake haatha |\nEka daya ki drishti-se, karado naatha sanaatha ||"
    },
    {
      hi: "जो कोई चरण खाखी जी के आवे, सकल पदार्थ सहज ही पावे |\nप्रेम वश मन्द-मन्द मुस्काएँ, आनंद धारा श्री खाखी जी बहाएँ ॥",
      en: "Jo koi charana Khaakhi Ji ke aave, sakala padaartha sahaja hi paave |\nPrema vasha manda-manda muskaaye, aananda dhaara Shri Khaakhi Ji bahaaye ||"
    },
    {
      hi: "मन हरण स्वरूप अति लोभा, श्री खाखी जी की अनन्त है शोभा |\nअखण्ड ज्योत में आप समाये, मन से जो देखे साही दर्शन पा जावे ||",
      en: "Mana harana svaroopa ati lobha, Shri Khaakhi Ji ki ananta hai shobha |\nAkhanda jyota mein aapa samaaye, mana se jo dekhe saahi darshana pa jaave ||"
    }
  ];

  // Guru Panchatattva Stuti Paragraphs
  const panchatattvaData = [
    {
      hi: "एकाग्र भाव से हम श्रीगुरुदेव में पञ्चतत्त्वों का दर्शन करते हैं। आप ही परम तत्त्व हैं और सम्पूर्ण पञ्चमहाभूत आप ही से प्रकाशित होकर समस्त सृष्टि में व्याप्त हैं। ऐसे परमब्रह्मस्वरूप श्रीगुरुदेव को हम सहस्रों बार सादर प्रणाम करते हैं।",
      en: "With a one-pointed mind, we perceive the five elements (Panchatattva) in Sri Gurudeva. You are the supreme element, and all the five great elements are illumined by you and pervade the entire creation. We bow down respectfully thousands of times to such a Gurudeva, who is the form of the supreme Brahman."
    },
    {
      hi: "हम उन गुरुदेव को कोटिशः नमन करते हैं जिनकी विराट जटाएँ अनन्त आकाश के समान सर्वव्यापक एवं असीम हैं। हम आपके कमण्डलु में स्थित पावन जलतत्त्व को प्रणाम करते हैं, जो करुणा, पवित्रता और जीवन का दिव्य स्रोत है। हम उन गुरुदेव की वन्दना करते हैं जिन्होंने पृथ्वीतत्त्व को पावन खाक के रूप में अपने अंग-अंग में धारण कर वैराग्य, समता एवं क्षमा का सर्वोच्च आदर्श स्थापित किया है।",
      en: "We offer millions of salutations to that Guru whose vast matted locks are all-pervading and infinite like the endless sky. We bow to the holy water element contained in your Kamandalu (water pot), which is the divine source of compassion, purity, and life. We worship the Guru who established the highest ideal of detachment, equanimity, and forgiveness by adorning the earth element in the form of sacred ash on every limb of his body."
    },
    {
      hi: "आपके स्मरण मात्र से भक्ति एवं भावरूपी वायु सम्पूर्ण हृदय में प्रवाहित होने लगती है। हम ऐसे कृपासिन्धु गुरुदेव की शरण में हैं। हम आपके तपोमय अग्निस्वरूप दिव्य नेत्रों की वन्दना करते हैं, जिनकी एक करुणामयी दृष्टि ही निराश्रित जीव को सनाथ कर देती है और उसके जीवन को परम मंगल से भर देती है।",
      en: "By just remembering you, the wind of devotion and emotion starts flowing through the entire heart. We take refuge in such a Guru who is an ocean of mercy. We worship your divine eyes, which are like the ascetic fire, whose single compassionate glance grants shelter to the helpless soul and fills its life with supreme auspiciousness."
    },
    {
      hi: "हम उस परमब्रह्मस्वरूप गुरुदेव का ध्यान करते हैं जो त्रिदेवों से भी श्रेष्ठ हैं। भगवान् ब्रह्मा चतुर्मुख हैं, किन्तु जो परमज्ञान आप गुरुदेव अपने एक ब्रह्ममुखारविन्द से प्रदान कर जीव के अज्ञानान्धकार का समूल नाश कर देते हैं, वह कार्य स्वयं चतुर्मुख ब्रह्मा भी नहीं कर सकते।",
      en: "We meditate on that Guru who is the form of the supreme Brahman and is superior even to the Trinity (Brahma, Vishnu, Mahesh). Lord Brahma has four faces, but the supreme knowledge that you, O Gurudeva, bestow from your single lotus mouth completely destroys the darkness of ignorance in the soul—a task that even the four-headed Lord Brahma himself cannot perform."
    },
    {
      hi: "आप उन चतुर्भुज भगवान् नारायण से भी श्रेष्ठ हैं। भगवान् नारायण अपने चार दिव्य करों से सम्पूर्ण सृष्टि का पालन करते हैं, किन्तु उनकी मायारूपी सृष्टि जीव को बन्धन में भी रखती है। परन्तु हे करुणासिन्धु गुरुदेव! आप अपने दो पावन करकमलों से उसी मायाबन्धन का छेदन कर जीव को मुक्तिपथ का अधिकारी बना देते हैं तथा भक्त का परम कल्याण करते हैं।",
      en: "You are superior even to the four-armed Lord Narayana. Lord Narayana protects the entire creation with his four divine hands, yet his illusory creation (Maya) also keeps the soul in bondage. But O Guru, ocean of mercy! You, with your two holy lotus hands, sever that very bondage of Maya, making the soul eligible for the path of liberation, and bestow the ultimate well-being upon the devotee."
    },
    {
      hi: "आप भगवान् रुद्र से भी श्रेष्ठ हैं। भगवान् रुद्र जगत् का संहार करते हैं, किन्तु आप, हे गुरुदेव! अपनी ज्ञानमयी, करुणामयी एवं तपोमयी दृष्टि से हमारे अन्तःकरण में स्थित समस्त अहंकार, वासनाओं, विकारों तथा अज्ञान का समूल विनाश कर हमें आत्मस्वरूप का बोध कराते हैं।",
      en: "You are superior even to Lord Rudra. Lord Rudra destroys the universe, but you, O Gurudeva! with your wise, compassionate, and ascetic sight, completely destroy all ego, desires, impurities, and ignorance residing in our inner self, making us realize our true spiritual nature."
    },
    {
      hi: "आप ही परमब्रह्म हैं। आप ही सत्यस्वरूप हैं। आप ही करुणा की परम अभिव्यक्ति हैं। आप ही ज्ञान, भक्ति, वैराग्य और मोक्ष के एकमात्र आधार हैं।",
      en: "You alone are the supreme Brahman. You alone are the form of truth. You are the supreme expression of compassion. You are the sole foundation of knowledge, devotion, detachment, and liberation."
    },
    {
      hi: "हे नाथ! हम आपके हैं, केवल आपके ही हैं। हम आपके चरणों में पूर्ण शरणागत हैं। हम पर ऐसी कृपा कीजिए कि हमें आपके पावन श्रीचरणकमलों की अखण्ड सेवा, निष्काम भक्ति एवं अचल शरणागति प्राप्त हो। वही परम गति हमें प्रदान कीजिए जो त्रिदेवों के लिए भी दुर्लभ कही गई है। श्रीगुरुचरणारविन्दार्पणमस्तु।",
      en: "O Lord! We are yours, only yours. We have taken complete refuge at your feet. Shower such grace upon us that we may attain uninterrupted service to your holy lotus feet, selfless devotion, and unwavering surrender. Bestow upon us that ultimate state which is said to be rare even for the Trinity. Let this be an offering at the lotus feet of Sri Guru."
    }
  ];

  // Aarti 1 Data (Traditional)
  const aarti1Data = [
    {
      hi: "जय श्री खाखी बाबा – जय श्री खाखी बाबा ।\nजो कोई तुमको ध्यावे, बाबाजी का ध्यान लगावे ।\nसुख सम्पत्ति पाता ।।\nजय श्री खाखी बाबा ।।",
      en: "Jai Shri Khaakhi Baaba – Jai Shri Khaakhi Baaba |\nJo koi tumako dhyaave, Baabaaji ka dhyaana lagaave |\nSukha sampatti paata ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "हाथ में चिमटा पैरों में खड़ाऊँ अंग भभूति मले ।\nशीश पे धारे जटा सुहावे, बाबा धूणा तपे ।।\nजय श्री खाखी बाबा ।।",
      en: "Haatha mein chimataa pairon mein khadaoon anga bhabhooti male |\nSheesha pe dhaare jataa suhaave, Baaba dhoona tape ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "पहाड़ी पर तो करी तपस्या, धूणे लियो लगाय ।\nभक्त सभी तो आवे देवे शीश झुकाय ।।\nजय श्री खाखी बाबा ।।",
      en: "Pahaadi para to kari tapasya, dhoone liyo lagaaya |\nBhakta sabhi to aave deve sheesha jhukaaya ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "पहाड़ी पर है धाम तिहारो, ध्वजा रही फहराय ।\nजो कोई ध्यान लगावे दर्शन वह पा जाय ।।\nजय श्री खाखी बाबा ।।",
      en: "Pahaadi para hai dhaama tihaaro, dhvaja rahi phaharaaya |\nJo koi dhyaana lagaave darshana vaha pa jaaya ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "जिस पर है कृपा तिहारी – दुःख नहीं वह पाता ।\nकर न सके सोई करले मन नहीं घबराता ।\nजय श्री खाखी बाबा ।।",
      en: "Jisa para hai kripaa tihaari – duhkha nahi vaha paata |\nKara na sake soi karale mana nahi ghabaraata ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "जिसने तुमको ध्याया इच्छा पूरी करी ।\nसम्पत्ति से घर भर दिया बाँझन गोद भरी ।।\nजय श्री खाखी बाबा ।।",
      en: "Jisine tumako dhyaaya ichchha poori kari |\nSampatti se ghara bhara diya baanjhana goda bhari ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "मावस का थारा मेला भरता, भक्त सब ध्यान धरे ।\nतेरस के दिन ज्योत में, चूरमा को भोग धरे ।।\nजय श्री खाखी बाबा ।।",
      en: "Maavasa ka thaara mela bharata, bhakta saba dhyaana dhare |\nTirasa ke dina jyota mein, choorama ko bhoga dhare ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "भक्त खड़े है आये द्वारे कब से आस लगाय ।\nइच्छा पूरी करना, दर्शन देना आया ।\nजय श्री खाखी बाबा ।।",
      en: "Bhakta khade hai aaye dvaare kaba se aasa lagaaya |\nIchchha poori karanaa, darshana denaa aaya ||\nJai Shri Khaakhi Baaba ||"
    },
    {
      hi: "यह बाबाजी की आरती जो कोई नर गावें ।\nराम कहे बाबा के, दर्शन वह पा जावे ।।\nजय श्री खाखी बाबा ।।",
      en: "Yaha Baabaaji ki aarti jo koi nara gaaven |\nRaama kahe Baaba ke, darshana vaha pa jaave ||\nJai Shri Khaakhi Baaba ||"
    }
  ];

  // Aarti 2 Data (Bhajan style)
  const aarti2Data = [
    {
      hi: "हो खाखी, धूणा रमाने वाला, संकट मिटाने वाला\nतेरी हम ज्योत जगाए बाबाजी ।\nहो खाखी, हम सब उतारे तेरी आरती ॥\nहो खाखी...",
      en: "Ho Khaakhi, dhoona ramaane vaala, sankata mitaane vaala\nTeri hama jyota jagaae Baabaaji |\nHo Khaakhi, hama saba utaare teri aarti ||\nHo Khaakhi..."
    },
    {
      hi: "तेरी भक्ति में ध्यान लगाकर, रोज रमाए बाती । २\nहर महीने की बारस-सुदी को भक्त जगाए राती,\nराती राती जगाने वाला,\nविपदा मिटाने वाला,\nमढ़ी में बैठा मेरा खाखीजी ।\nहो खाखी, हम सब उतारे तेरी आरती ॥\nहो खाखी...",
      en: "Teri bhakti mein dhyaana lagaakara, roja ramaae baati | 2\nHara maheene ki baarasa-sudi ko bhakta jagaae raati,\nRaati raati jagaane vaala,\nVipada mitaane vaala,\nMadhi mein baitha mera Khaakhiji |\nHo Khaakhi, hama saba utaare teri aarti ||\nHo Khaakhi..."
    },
    {
      hi: "बारस की जब रात जगाए, भक्त सभी ये गाए । २\nतेरस के दिन ज्योत में बाबा, चूरमा भोग लगाए,\nलगाए भभूति रमाने वाला,\nअलख जगाने वाला,\nपहाड़ी पे बैठा मेरा खाखीजी ।\nहो खाखी, हम सब उतारे तेरी आरती ॥\nहो खाखी...",
      en: "Baarasa ki jaba raata jagaae, bhakta sabhi ye gaaye | 2\nTirasa ke dina jyota mein Baaba, choorama bhoga lagaaye,\nLagaaye bhabhooti ramaane vaala,\nAlakha jagaane vaala,\nPahaadi pe baitha mera Khaakhiji |\nHo Khaakhi, hama saba utaare teri aarti ||\nHo Khaakhi..."
    },
    {
      hi: "फाल्गुन-वदी अमावस्या को जब, मेला भरता भारी । २\nदूर दूर से चल कर आवें, लाखों नर और नारी,\nनारी लक्ष्मी बढ़ाने वाला,\nसातों सुख देने वाला,\nडाडा में बैठा मेरा खाखीजी ।\nहो खाखी, हम सब उतारे तेरी आरती ॥\nहो खाखी...",
      en: "Phaalguna-vadi amaavasya ko jaba, mela bharata bhaari | 2\nDoora doora se chala kara aaven, laakhon nara aura naari,\nNaari lakshmi badhaane vaala,\nSaaton sukha dene vaala,\nDaada mein baitha mera Khaakhiji |\nHo Khaakhi, hama saba utaare teri aarti ||\nHo Khaakhi..."
    },
    {
      hi: "भूल चूक सब माफ करीजो, हम सब थारा चाकर । २\nचरण-री-थारी भक्ति दीजो,\nखुश हो लेकर पाकर,\nपाकर मोती हो जाए निहाला,\nपीकर सेवामृत प्याला,\nबेगा पधारो म्हारा खाखीजी ।\nहो खाखी, हम सब उतारे तेरी आरती ॥\nहो खाखी...",
      en: "Bhoola chooka saba maapha kareejo, hama saba thaara chaakara | 2\nCharana-ri-thaari bhakti deejo,\nKhusha ho lekara paakara,\nPaakara moti ho jaaye nihaala,\nPeekara sevaamrita pyaala,\nBega padhaaro mhaara Khaakhiji |\nHo Khaakhi, hama saba utaare teri aarti ||\nHo Khaakhi..."
    }
  ];

  return (
    <section className="aarti-stuti-page-container">
      {/* Hero Banner Section */}
      <div
        className="aarti-hero-banner"
        style={{ backgroundImage: `url(${tab === "aarti" ? jyotImg : bhajanImg})` }}
      >
        <div className="aarti-hero-overlay">
          <h1>{lang === "en" ? "Aarti, Stuti & Prayers" : "आरती, स्तुति एवं प्रार्थनाएँ"}</h1>
          <p>{lang === "en" ? "Sacred verses, traditional stutis, and prayers of Sri Khakhi Baba Ji" : "श्री खाखी बाबा जी के पावन स्तुतियाँ, तथा गुरु महात्म्य एवं आरती"}</p>
        </div>
      </div>

      {/* Tab Controls */}
      <div className="aarti-controls">
        <div className="aarti-controls-container">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${tab === "gurugita" ? "active" : ""}`}
              onClick={() => setTab("gurugita")}
            >
              <FaBookOpen /> {lang === "en" ? "Guru Gita" : "गुरु गीता श्लोक"}
            </button>
            <button
              className={`tab-btn ${tab === "babastuti" ? "active" : ""}`}
              onClick={() => setTab("babastuti")}
            >
              <FaPray /> {lang === "en" ? "Khakhi Chalisa" : "खाखी चालीसा"}
            </button>
            <button
              className={`tab-btn ${tab === "panchatattva" ? "active" : ""}`}
              onClick={() => setTab("panchatattva")}
            >
              <FaHands /> {lang === "en" ? "Panchatattva" : "पञ्चतत्त्व स्तुति"}
            </button>
            <button
              className={`tab-btn ${tab === "aarti" ? "active" : ""}`}
              onClick={() => setTab("aarti")}
            >
              <FaFire /> {lang === "en" ? "Aarti" : "आरती"}
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
      </div>

      {/* Main Content Area */}
      <div className="aarti-main-content">

        {/* ================= GURU GITA TAB ================= */}
        {tab === "gurugita" && (
          <div className="tab-content-wrapper fade-in">
            <div className="content-intro-card">
              <h2>{lang === "en" ? "Preface" : "प्रस्तावना"}</h2>
              <p className="intro-text">
                {lang === "en"
                  ? "The following verses are selected from Sri Guru Gita, recording the sacred dialogue between Lord Sadashiva and Mother Parvati in the Skanda Mahapurana regarding the ultimate glory of the Guru, His supreme Brahman nature, and the spiritual secrets of Guru-kripa."
                  : "प्रस्तुत श्लोक श्रीगुरुगीता से संगृहीत हैं, जिसका दिव्य उपदेश भगवान् सदाशिव ने स्कन्दमहापुराण में माता पार्वती को ब्रह्मज्ञान प्रदान करते हुए किया है। इस पावन संवाद में भगवान् शिव ने गुरु-तत्त्व की अनिर्वचनीय महिमा, गुरु की परमब्रह्मस्वरूप सत्ता तथा गुरु-कृपा के आध्यात्मिक रहस्य का अत्यन्त मार्मिक एवं दार्शनिक निरूपण किया है।"}
              </p>
              <p className="intro-text">
                {lang === "en"
                  ? "In truth, the glory of Sri Guru's feet is infinite, boundless, and beyond description. No speech or scripture can fully encompass it. These verses are but a subtle indication of that infinite Guru-glory — a humble attempt, as it were, to hold the ocean on the tip of a needle. Through His boundless grace, Lord Shiva has partially illuminated the divine mystery of Guru-tattva through these verses, which leads the seeker towards Guru-bhakti, self-knowledge, and the supreme path of liberation."
                  : "वस्तुतः श्रीगुरुचरणों की महिमा अनन्त, असीम एवं अवर्णनीय है। उसका पूर्ण वर्णन करना किसी भी वाणी अथवा शास्त्र के लिए संभव नहीं है। प्रस्तुत श्लोक उस अनन्त गुरु-महिमा का केवल एक सूक्ष्म संकेत मात्र हैं—मानो महासागर को सूई की नोक पर धारण करने का विनम्र प्रयास। भगवान् शिव ने अपनी असीम कृपा से इन श्लोकों के माध्यम से गुरु-तत्त्व के उस दिव्य रहस्य का आंशिक प्रकाश किया है, जो साधक को गुरु-भक्ति, आत्मज्ञान एवं मोक्ष के परम मार्ग की ओर अग्रसर करता है।"}
              </p>
            </div>

            <div className="shlokas-list">
              {shlokasData.map((shloka) => (
                <div key={shloka.num} className="shloka-card">
                  <div className="shloka-number">
                    {lang === "en" ? `Shloka ${shloka.num}` : `श्लोक ${shloka.num}`}
                  </div>
                  <span className="shloka-speaker">{shloka.speaker[lang]}</span>
                  <div className="shloka-sanskrit">{shloka.sanskrit}</div>
                  <div className="shloka-meaning">
                    <strong>{lang === "en" ? "Meaning" : "भावार्थ"}</strong>
                    <p>{shloka.meaning[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= BABA STUTI TAB ================= */}
        {tab === "babastuti" && (
          <div className="tab-content-wrapper fade-in">
            <div className="content-intro-card">
              <h2>{lang === "en" ? "Khakhi Chalisa" : "खाखी चालीसा"}</h2>
              <p className="intro-text">
                {lang === "en"
                  ? "A devotional prayer composed of eighteen couplets praising the divine character, yoga-powers, and compassionate grace of Sri Khakhi Baba Ji."
                  : "श्री खाखी बाबा जी के दिव्य चरित्र, योग-सिद्धियों और करुणामयी कृपा की महिमा का वर्णन करने वाले अट्ठारह दोहों का पावन संग्रह।"}
              </p>
            </div>

            <div className="lyrics-sheet">
              {stutiData.map((couplet, index) => (
                <div key={index} className="lyrics-verse">
                  <p className="lyrics-line-hi">{couplet.hi}</p>
                  {lang === "en" && (
                    <p className="lyrics-line-en">{couplet.en}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= PANCHATATTVA TAB ================= */}
        {tab === "panchatattva" && (
          <div className="tab-content-wrapper fade-in">
            <div className="content-intro-card">
              <h2>{lang === "en" ? "Sri Guru Panchatattva Stuti" : "श्री गुरुपञ्चतत्त्व स्तुति"}</h2>
              <p className="intro-text">
                {lang === "en"
                  ? "A prayer contemplating the Guru as the supreme embodiment of the five elements of creation, establishing the highest ideals of detachment and wisdom."
                  : "सृष्टि के पाँचों तत्वों (आकाश, जल, पृथ्वी, वायु, अग्नि) में श्रीगुरुदेव के साक्षात् दर्शन करते हुए वैराग्य, समता और मोक्ष प्राप्ति की पावन प्रार्थना।"}
              </p>
            </div>

            <div className="panchatattva-single-box">
              {panchatattvaData.map((para, idx) => (
                <div key={idx} className="panchatattva-para-block">
                  <p className="para-hindi">{para.hi}</p>
                  {lang === "en" && (
                    <p className="para-english">{para.en}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= AARTI TAB ================= */}
        {tab === "aarti" && (
          <div className="tab-content-wrapper fade-in">
            <div className="content-intro-card">
              <h2>{lang === "en" ? "Aarti & Prayers" : "आरती एवं प्रार्थना"}</h2>
              <p className="intro-text">
                {lang === "en"
                  ? "Perform the sacred arati ritual with traditional hymns glorifying Sri Khakhi Baba Ji."
                  : "श्री खाखी बाबा जी की स्तुति एवं पावन मंगल आरती के भजन स्वर।"}
              </p>

              {/* Subtabs for Aarti 1 and Aarti 2 */}
              <div className="aarti-subtabs">
                <button
                  className={`aarti-subtab-btn ${aartiTab === "aarti1" ? "active" : ""}`}
                  onClick={() => setAartiTab("aarti1")}
                >
                  {lang === "en" ? "Aarti 1 (Jai Sri Khakhi Baba)" : "आरती १ (जय श्री खाखी बाबा)"}
                </button>
                <button
                  className={`aarti-subtab-btn ${aartiTab === "aarti2" ? "active" : ""}`}
                  onClick={() => setAartiTab("aarti2")}
                >
                  {lang === "en" ? "Aarti 2 (Ho Khakhi, Dhuna Ramane Wala)" : "आरती २ (हो खाखी, धूणा रमाने वाला)"}
                </button>
              </div>
            </div>

            <div className="aarti-verses-container">
              {aartiTab === "aarti1" ? (
                <div className="aarti-single-box">
                  {aarti1Data.map((verse, index) => (
                    <div key={index} className="stuti-row">
                      <div className="stuti-row-hindi">{verse.hi}</div>
                      {lang === "en" && (
                        <div className="stuti-row-english">
                          <div className="stuti-row-translit">{verse.en}</div>
                        </div>
                      )}
                      {index < aarti1Data.length - 1 && (
                        <div className="stuti-divider">
                          <div className="stuti-line"></div>
                          <div className="stuti-dot"></div>
                          <div className="stuti-line"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aarti-single-box">
                  {aarti2Data.map((verse, index) => (
                    <div key={index} className="stuti-row">
                      <div className="stuti-row-hindi">{verse.hi}</div>
                      {lang === "en" && (
                        <div className="stuti-row-english">
                          <div className="stuti-row-translit">{verse.en}</div>
                        </div>
                      )}
                      {index < aarti2Data.length - 1 && (
                        <div className="stuti-divider">
                          <div className="stuti-line"></div>
                          <div className="stuti-dot"></div>
                          <div className="stuti-line"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default GuruMahima;
