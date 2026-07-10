import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import temple2 from "../assets/images/temple2.jpeg";
import temple3 from "../assets/images/temple3.jpeg";
import mela from "../assets/images/mela.jpeg";
import mela2 from "../assets/images/mela2.jpeg";
import mela3 from "../assets/images/mela3.jpeg";
import mela4 from "../assets/images/mela4.jpeg";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: temple2, alt: "Sri Khakhi Dham Temple View" },
    { src: temple3, alt: "Ancient Temple Architecture" },
    { src: mela, alt: "Falgun Badi Amavasya Mela Procession" },
    { src: mela2, alt: "Devotees gathering at Dham" },
    { src: mela3, alt: "Grand Satsang Celebration" },
    { src: mela4, alt: "Annadan Bhandara Prasadam" },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
      <h2 data-aos="fade-up">Photo Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, idx) => (
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
              <span>🔍 View Image</span>
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
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span className="caption-text">{images[activeIndex].alt}</span>
              <span className="lightbox-counter">
                {activeIndex + 1} / {images.length}
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