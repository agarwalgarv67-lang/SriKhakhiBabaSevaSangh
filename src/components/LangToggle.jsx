import { useLang } from "../context/LanguageContext";
import { FaLanguage } from "react-icons/fa";

function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="lang-float-btn"
      onClick={toggleLang}
      title={lang === "en" ? "Switch to Hindi" : "Switch to English"}
      aria-label="Toggle Language"
    >
      <FaLanguage className="lang-float-icon" />
      <span className="lang-float-label">
        {lang === "en" ? "हिन्दी" : "English"}
      </span>
    </button>
  );
}

export default LangToggle;
