import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const titles = {
  en: {
    "/": "Sri Khakhi Baba | Sri Khakhi Baba Seva Sangh | Official Website",
    "/about": "About Sri Khakhi Baba & Dham | Sri Khakhi Baba Seva Sangh",
    "/journey": "Our Sacred Journey & Milestones | Sri Khakhi Baba Seva Sangh",
    "/guru-mahima": "Guru Mahima, Stuti & Aarti | Sri Khakhi Baba Seva Sangh",
    "/gallery": "Sacred Photo Gallery | Sri Khakhi Baba Seva Sangh",
    "/events": "Spiritual Events & Celebrations | Sri Khakhi Baba Seva Sangh",
    "/donation": "Donate & 80G Tax Exemption | Sri Khakhi Baba Seva Sangh",
    "/contact": "Contact Us & Directions | Sri Khakhi Baba Seva Sangh",
  },
  hi: {
    "/": "श्री खाखी बाबा | श्री खाखी बाबा सेवा संघ | आधिकारिक वेबसाइट",
    "/about": "न्यास परिचय एवं पावन इतिहास | श्री खाखी बाबा सेवा संघ",
    "/journey": "हमारी सेवा यात्रा एवं उपलब्धियां | श्री खाखी बाबा सेवा संघ",
    "/guru-mahima": "गुरु महिमा, स्तुति एवं आरती | श्री खाखी बाबा सेवा संघ",
    "/gallery": "पावन फोटो गैलरी | श्री खाखी बाबा सेवा संघ",
    "/events": "धार्मिक उत्सव एवं आयोजन | श्री खाखी बाबा सेवा संघ",
    "/donation": "दान एवं 80G कर छूट | श्री खाखी बाबा सेवा संघ",
    "/contact": "संपर्क एवं मार्ग दर्शन | श्री खाखी बाबा सेवा संघ",
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    // Scroll window back to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Update document title dynamically
    const cleanPath = pathname === "/" ? "/" : pathname.toLowerCase().replace(/\/$/, "");
    const localizedTitles = titles[lang] || titles.en;
    document.title =
      localizedTitles[cleanPath] ||
      (lang === "hi"
        ? "श्री खाखी बाबा सेवा संघ | डाडा फतेहपुरा"
        : "Sri Khakhi Baba Seva Sangh | Dada Fatehpura");

    // Dynamically update canonical link tag in <head> for proper SEO indexing
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", `https://srikhakhibabasevasangh.in${cleanPath}`);
  }, [pathname, lang]);

  return null;
}

export default ScrollToTop;
