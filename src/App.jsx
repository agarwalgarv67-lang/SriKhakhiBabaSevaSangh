import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import AartiStuti from "./pages/AartiStuti";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      delay: 50,
    });
  }, []);

  return (
    <LanguageProvider>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/aarti-stuti" element={<AartiStuti />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;