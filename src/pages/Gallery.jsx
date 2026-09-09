import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import { galleryImages, galleryCategories } from "../data/galleryData";
import templeHero from "../assets/images/temple2.jpeg";

function Gallery() {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const heading = lang === "en" ? "Photo Gallery" : "फोटो गैलरी";
  const subtitle =
    lang === "en"
      ? "Sacred glimpses of Sri Khakhi Dham, divine saints, sacred temple heritage, and annual celebrations."
      : "श्री खाखी धाम, दिव्य संतों, प्राचीन मंदिर धरोहर एवं पावन वार्षिक उत्सवों के दर्शन।";
  const viewLabel = lang === "en" ? "🔍 View Photo" : "🔍 चित्र देखें";
  const countLabel =
    lang === "en"
      ? `Showing ${filteredImages.length} Sacred Photos`
      : `${filteredImages.length} पावन चित्र प्रदर्शित`;

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
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

  const activeImage = activeIndex !== null ? filteredImages[activeIndex] : null;

  return (
    <div className="gallery-page-container">
      {/* Hero Banner */}
      <div
        className="gallery-hero-banner"
        style={{ backgroundImage: `url(${templeHero})` }}
      >
        <div className="gallery-hero-overlay">
          <h1 data-aos="fade-up">{heading}</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Filter Tabs & Count */}
      <div className="gallery-controls-bar" data-aos="fade-up">
        <div className="filter-buttons">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveIndex(null);
              }}
            >
              {lang === "en" ? cat.labelEn : cat.labelHi}
            </button>
          ))}
        </div>

        <div className="gallery-count-badge">
          {countLabel}
        </div>
      </div>

      {/* Grid */}
      <div className="gallery-main-wrapper">
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => {
            const title = img.title[lang] || img.title.en;
            return (
              <div
                key={img.id || idx}
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay={(idx % 6) * 70}
                onClick={() => setActiveIndex(idx)}
                style={{ cursor: "pointer" }}
              >
                <img src={img.src} alt={title} loading="lazy" />
                <div className="gallery-card-bottom-bar">
                  <span>{title}</span>
                </div>
                <div className="gallery-hover-overlay">
                  <span>{viewLabel}</span>
                  <p className="gallery-hover-title">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && activeImage && (
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
              src={activeImage.src}
              alt={activeImage.title[lang] || activeImage.title.en}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span className="caption-text">{activeImage.title[lang] || activeImage.title.en}</span>
              <span className="lightbox-counter">
                {activeIndex + 1} / {filteredImages.length}
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
    </div>
  );
}

export default Gallery;