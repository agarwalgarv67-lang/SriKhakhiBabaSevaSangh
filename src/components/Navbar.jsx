import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useLang } from "../context/LanguageContext";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const closeMenu = () => setIsOpen(false);

  const t = {
    hi: {
      subheading: "डाडा फतेहपुरा, राजस्थान",
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      journey: "हमारी यात्रा",
      guruMahima: "गुरु महिमा",
      gallery: "गैलरी",
      events: "कार्यक्रम",
      donation: "दान",
      contact: "संपर्क",
      langSwitch: "English",
    },
    en: {
      subheading: "DADA FATEHPURA, RAJASTHAN",
      home: "Home",
      about: "About",
      journey: "Our Journey",
      guruMahima: "Guru Mahima",
      gallery: "Gallery",
      events: "Events",
      donation: "Donation",
      contact: "Contact",
      langSwitch: "हिन्दी",
    },
  };

  const txt = t[lang];

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Sri Khakhi Baba Seva Sangh Logo" />
          <div className="logo-text">
            <h2 style={{ fontFamily: "Poppins" }}>Sri Khakhi Baba Seva Sangh</h2>
            <span>{txt.subheading}</span>
          </div>
        </Link>

        <div className="nav-right-actions">
          {/* Header Language Toggle Button */}
          <button className="nav-lang-btn" onClick={toggleLang} title={lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}>
            <FaGlobe className="globe-icon" />
            <span>{txt.langSwitch}</span>
          </button>

          {/* Mobile Toggle Button */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>{txt.home}</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>{txt.about}</NavLink></li>
            <li><NavLink to="/journey" onClick={closeMenu}>{txt.journey}</NavLink></li>
            <li><NavLink to="/guru-mahima" onClick={closeMenu}>{txt.guruMahima}</NavLink></li>
            <li><NavLink to="/gallery" onClick={closeMenu}>{txt.gallery}</NavLink></li>
            <li><NavLink to="/events" onClick={closeMenu}>{txt.events}</NavLink></li>
            <li><NavLink to="/donation" onClick={closeMenu}>{txt.donation}</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>{txt.contact}</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;