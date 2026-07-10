import { FaLanguage } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import Calendar from "../components/Calendar";
import Donation from "../components/Donation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

function Home() {
  const { lang, setLang } = useLang();

  return (
    <>
      <Hero />

      {/* Language Toggle Bar — same style as About page */}
      <div className="home-lang-bar">
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

      <About />
      <Gallery />
      <Events />
      <Calendar />
      <Donation />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;