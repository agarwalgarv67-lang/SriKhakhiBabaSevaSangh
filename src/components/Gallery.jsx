import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import temple2 from "../assets/images/temple2.jpeg";
import temple3 from "../assets/images/temple3.jpeg";
import mela from "../assets/images/mela.jpeg";
import mela2 from "../assets/images/mela2.jpeg";
import mela3 from "../assets/images/mela3.jpeg";
import mela4 from "../assets/images/mela4.jpeg";
import { useLang } from "../context/LanguageContext";

function Gallery() {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);

  const images = {
    en: [
      { src: temple2, alt: "Sri Khakhi Dham Temple View" },
      { src: temple3, alt: "Ancient Temple Architecture" },
      { src: mela, alt: "Falgun Badi Amavasya Mela Procession" },
      { src: mela2, alt: "Devotees gathering at Dham" },
      { src: mela3, alt: "Grand Satsang Celebration" },
      { src: mela4, alt: "Annadan Bhandara Prasadam" },
    ],
    hi: [
      { src: temple2, alt: "श्री खाखी धाम मंदिर दृश्य" },
      { src: temple3, alt: "प्राचीन मंदिर वास्तुकला" },
      { src: mela, alt: "फाल्गुन बड़ी अमावस्या मेला शोभायात्रा" },
      { src: mela2, alt: "धाम में एकत्रित भक्तगण" },
      { src: mela3, alt: "भव्य सत्संग उत्सव" },
      { src: mela4, alt: "अन्नदान भंडारा प्रसाद" },
    ],
  };

  const currentImages = images[lang];

  const heading = lang === "en" ? "Photo Gallery" : "फोटो गैलरी";
  const viewLabel = lang === "en" ? "🔍 View Image" : "🔍 चित्र देखें";

  const handleNext = () => {
    setActiveIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="gallery">
      <h2 data-aos="fade-up">{heading}</h2>

      <div className="gallery-grid">
        {currentImages.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            onClick={() => setActiveIndex(idx)}
            style={{ cursor: "pointer" }}
          >
            <img src={img.src} alt={img.alt} />
            <div className="gallery-hover-overlay">
              <span>{viewLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <button className="lightbox-close-btn" onClick={handleClose} aria-label="Close Lightbox">
            <FaTimes />
          </button>

          <button
            className="lightbox-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
          >
            <FaArrowLeft />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImages[activeIndex].src}
              alt={currentImages[activeIndex].alt}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span className="caption-text">{currentImages[activeIndex].alt}</span>
              <span className="lightbox-counter">
                {activeIndex + 1} / {currentImages.length}
              </span>
            </div>
          </div>

          <button
            className="lightbox-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;