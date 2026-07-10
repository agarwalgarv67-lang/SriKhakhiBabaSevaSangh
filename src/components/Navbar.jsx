import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Marcellus");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Sri Khakhi Baba Seva Sangh Logo" />
          <div className="logo-text">
            <h2 style={{ fontFamily: selectedFont }}>Sri Khakhi Baba Seva Sangh</h2>
            <span>DADA FATEHPURA, RAJASTHAN</span>
          </div>
        </Link>

        {/* Floating Font Switcher Tool for Previewing */}
        <div 
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#ffffff",
            border: "2px solid #ff9800",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            zIndex: 99999,
            fontFamily: "'Outfit', sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#e65100", letterSpacing: "1px" }}>🎨 LOGO FONT SWITCHER</span>
          <select 
            value={selectedFont} 
            onChange={(e) => setSelectedFont(e.target.value)}
            style={{
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #efebe9",
              borderRadius: "6px",
              background: "#fff8e1",
              color: "#3e2723",
              fontWeight: "600",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="Marcellus">Marcellus (Default Serif)</option>
            <option value="Marcellus SC">Marcellus SC (Small Caps Serif)</option>
            <option value="Cinzel">Cinzel (Roman Serif)</option>
            <option value="Cinzel Decorative">Cinzel Decorative (Swash Roman Serif)</option>
            <option value="Yatra One">Yatra One (Spiritual Indian Bold)</option>
            <option value="Rozha One">Rozha One (High-Contrast Bold Display)</option>
            <option value="Kalam">Kalam (Warm Calligraphic Script)</option>
            <option value="Almendra">Almendra (Ancient Manuscript Serif)</option>
            <option value="Playfair Display">Playfair Display (Luxury Serif)</option>
            <option value="Cormorant Garamond">Cormorant Garamond (Elegant Serif)</option>
            <option value="Outfit">Outfit (Clean Sans-serif)</option>
            <option value="Poppins">Poppins (Modern Sans-serif)</option>
          </select>
          <span style={{ fontSize: "10px", color: "#8d6e63" }}>Click to preview fonts instantly!</span>
        </div>

        {/* Mobile Toggle Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Journey" onClick={closeMenu}>Our Journey</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/donation" onClick={closeMenu}>Donation</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;