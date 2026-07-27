import { useLang } from "../context/LanguageContext";
import { FaLanguage } from "react-icons/fa";

function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="lang-float-btn"
      onClick={toggleLang}
      title={lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
      aria-label="Toggle Language"
    >
      <FaLanguage className="lang-float-icon" />
      <span className="lang-float-label">
        {lang === "hi" ? "English" : "हिन्दी"}
      </span>
    </button>
  );
}

export default LangToggle;
