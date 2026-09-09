import khakhiBabaPoster from "../assets/images/khakhi-baba-poster.jpg";
import temple from "../assets/images/temple.jpeg";
import temple2 from "../assets/images/temple2.jpeg";
import temple3 from "../assets/images/temple3.jpeg";
import stairs from "../assets/images/stairs.jpeg";
import stairs2 from "../assets/images/stairs2.jpeg";
import jyot from "../assets/images/jyot.jpeg";
import bhajan from "../assets/images/bhajan.jpeg";
import mela from "../assets/images/mela.jpeg";
import mela2 from "../assets/images/mela2.jpeg";
import mela3 from "../assets/images/mela3.jpeg";
import mela4 from "../assets/images/mela4.jpeg";

export const galleryCategories = [
  { id: "all", labelEn: "All Photos", labelHi: "सभी चित्र" },
  { id: "temple", labelEn: "Mandir & Dham", labelHi: "मंदिर एवं धाम" },
  { id: "baba", labelEn: "Sri Khakhi Baba", labelHi: "श्री खाखी बाबा" },
  { id: "festivals", labelEn: "Festivals & Mela", labelHi: "उत्सव एवं मेला" },
];

export const galleryImages = [
  {
    id: "khakhi-baba-poster",
    src: khakhiBabaPoster,
    category: "baba",
    title: {
      en: "Sri Khakhi Baba Ji Maharaj Divine Portrait",
      hi: "श्री खाखी बाबा जी महाराज दिव्य स्वरूप",
    },
  },
  {
    id: "temple2",
    src: temple2,
    category: "temple",
    title: {
      en: "Panoramic View of Sri Khakhi Dham Mandir",
      hi: "श्री खाखी धाम मंदिर का विहंगम दृश्य",
    },
  },
  {
    id: "temple",
    src: temple,
    category: "temple",
    title: {
      en: "Sri Khakhi Dham Hilltop Temple",
      hi: "पावन पहाड़ी पर स्थित श्री खाखी धाम मंदिर",
    },
  },
  {
    id: "temple3",
    src: temple3,
    category: "temple",
    title: {
      en: "Ancient Mandir Shikhar & Architecture",
      hi: "प्राचीन मंदिर शिखर एवं वास्तुकला",
    },
  },
  {
    id: "jyot",
    src: jyot,
    category: "temple",
    title: {
      en: "Akhand Pavitra Jyoti (Eternal Flame)",
      hi: "अखंड पावन ज्योति दर्शन",
    },
  },
  {
    id: "stairs",
    src: stairs,
    category: "temple",
    title: {
      en: "Sacred Stone Steps to Hilltop Temple",
      hi: "पहाड़ी मंदिर की ओर ले जाती पावन सीढ़ियाँ",
    },
  },
  {
    id: "stairs2",
    src: stairs2,
    category: "temple",
    title: {
      en: "Pilgrimage Path & Hill Steps to Sri Khakhi Dham",
      hi: "धाम दर्शन हेतु तीर्थ-मार्ग एवं सीढ़ियाँ",
    },
  },
  {
    id: "bhajan",
    src: bhajan,
    category: "festivals",
    title: {
      en: "Devotional Bhajan Sandhya & Kirtan",
      hi: "भक्तिमय भजन संध्या एवं हरि संकीर्तन",
    },
  },
  {
    id: "mela",
    src: mela,
    category: "festivals",
    title: {
      en: "Falgun Badi Amavasya Mela Shobha Yatra",
      hi: "फाल्गुन बदी अमावस्या मेला शोभायात्रा",
    },
  },
  {
    id: "mela2",
    src: mela2,
    category: "festivals",
    title: {
      en: "Devotees Gathering at Sri Khakhi Dham",
      hi: "श्री खाखी धाम में एकत्रित श्रद्धालु भक्तगण",
    },
  },
  {
    id: "mela3",
    src: mela3,
    category: "festivals",
    title: {
      en: "Grand Annual Satsang & Cultural Mahotsav",
      hi: "भव्य वार्षिक सत्संग एवं सांस्कृतिक महोत्सव",
    },
  },
  {
    id: "mela4",
    src: mela4,
    category: "festivals",
    title: {
      en: "Annadan & Maha Bhandara Prasadam",
      hi: "विशाल अन्नदान एवं महा भंडारा प्रसाद",
    },
  },
];

export default galleryImages;
