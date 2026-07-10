import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Sri Khakhi Baba Seva Sangh Logo" />
        </Link>

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