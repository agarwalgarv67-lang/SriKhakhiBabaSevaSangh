import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("preferred_lang") || "hi";
  });

  useEffect(() => {
    localStorage.setItem("preferred_lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
