import { useState } from "react";
import { FaYoutube, FaCheckCircle, FaBroadcastTower, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import logoImg from "../assets/images/logo.png";
import { youtubeLiveStreams as defaultStreams, youtubeChannelUrl, parseYouTubeEmbedId } from "../data/youtubeLiveStreams";

function YouTubeLive({ streams = defaultStreams }) {
  const { lang } = useLang();
  const [expanded, setExpanded] = useState(false);

  const INITIAL_LIMIT = 4;
  const displayedStreams = expanded ? streams : streams.slice(0, INITIAL_LIMIT);
  const hasMore = streams.length > INITIAL_LIMIT;

  const t = {
    en: {
      sectionSubtitle: "OFFICIAL YOUTUBE BROADCASTS",
      heading: "Live Satsang & Devotional Video Broadcasts",
      intro:
        "Watch official live streams, divine bhajans, and grand mahotsav broadcasts directly from Sri Khakhi Dham.",
      channelName: "Sri Khakhi Baba Seva Sangh",
      liveBadge: "LIVE",
      watchOnYt: "Watch on YouTube",
      subscribeBtn: "Subscribe",
      viewMore: `View All Broadcasts (${streams.length})`,
      showLess: "Show Less",
    },
    hi: {
      sectionSubtitle: "आधिकारिक यूट्यूब लाइव प्रसारण",
      heading: "लाइव सत्संग एवं भजन वीडियो प्रसारण",
      intro:
        "श्री खाखी धाम से सीधे आधिकारिक लाइव स्ट्रीम, भक्तिमय भजन और भव्य महोत्सव प्रसारण देखें।",
      channelName: "श्री खाखी बाबा सेवा संघ",
      liveBadge: "सीधा प्रसारण",
      watchOnYt: "यूट्यूब पर देखें",
      subscribeBtn: "सब्सक्राइब",
      viewMore: `सभी वीडियो प्रसारण देखें (${streams.length})`,
      showLess: "कम देखें",
    },
  };

  const txt = t[lang];

  return (
    <section className="yt-style-section" data-aos="fade-up">
      <div className="yt-style-container">
        {/* Section Header */}
        <div className="yt-style-header">
          <div className="yt-header-badge">
            <FaYoutube className="yt-header-red-icon" />
            <span>{txt.sectionSubtitle}</span>
          </div>
          <h2>{txt.heading}</h2>
          <p>{txt.intro}</p>
        </div>

        {/* YouTube Native Style Video Grid */}
        <div className="yt-native-video-grid">
          {displayedStreams.map((stream, idx) => {
            const embedId = parseYouTubeEmbedId(stream.url || stream.embedId || "");
            const watchUrl = stream.url || `https://www.youtube.com/live/${embedId}`;
            const title = lang === "en" ? stream.titleEn : stream.titleHi;
            const dateText = lang === "en" ? stream.dateEn || "Official Live Stream" : stream.dateHi || "आधिकारिक सीधा प्रसारण";

            return (
              <div key={stream.id || idx} className="yt-video-card">
                {/* Responsive 16:9 Video Player Box */}
                <div className="yt-thumbnail-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${embedId}?autoplay=0&rel=0`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* YouTube Live Overlay Chip */}
                  <div className="yt-live-chip">
                    <span className="yt-pulse-dot"></span>
                    <span>{txt.liveBadge}</span>
                  </div>
                </div>

                {/* Video Info Section Below Player */}
                <div className="yt-video-info">
                  {/* Channel Avatar Circle */}
                  <a
                    href={youtubeChannelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="yt-avatar-link"
                    title={txt.channelName}
                  >
                    <img src={logoImg} alt="Channel Avatar" className="yt-avatar-img" />
                  </a>

                  {/* Text Details */}
                  <div className="yt-meta-content">
                    <h3 className="yt-video-title" title={title}>
                      {title}
                    </h3>

                    {/* Channel Name & Verified Badge */}
                    <div className="yt-channel-row">
                      <span className="yt-channel-name">{txt.channelName}</span>
                      <FaCheckCircle className="yt-verified-icon" title="Verified Channel" />
                    </div>

                    {/* Live Stream Meta Info */}
                    <div className="yt-stream-meta">
                      <span className="yt-live-indicator-text">
                        <FaBroadcastTower /> {dateText}
                      </span>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="yt-actions-bar">
                      <a
                        href={watchUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="yt-watch-btn"
                      >
                        <FaYoutube className="yt-red-btn-icon" /> {txt.watchOnYt}
                      </a>
                      <a
                        href={youtubeChannelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="yt-sub-btn"
                      >
                        {txt.subscribeBtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / Show Less Toggle Button for 8 to 10+ Videos */}
        {hasMore && (
          <div className="yt-expand-row">
            <button
              className="yt-expand-btn"
              onClick={() => setExpanded(!expanded)}
            >
              <span>{expanded ? txt.showLess : txt.viewMore}</span>
              {expanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default YouTubeLive;
