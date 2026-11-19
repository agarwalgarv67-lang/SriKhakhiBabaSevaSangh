import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

function NotFound() {
  const { lang } = useLang();

  const t = {
    en: {
      badge: "404 • PAGE NOT FOUND",
      title: "Lost in the Sacred Paths?",
      message:
        "The page you are looking for might have been moved, renamed, or is temporarily unavailable.",
      btn: "Return to Home",
    },
    hi: {
      badge: "404 • पृष्ठ नहीं मिला",
      title: "क्या आप सही मार्ग से भटक गए हैं?",
      message:
        "आप जिस पृष्ठ को खोज रहे हैं, वह स्थानांतरित कर दिया गया है या अस्थायी रूप से अनुपलब्ध है।",
      btn: "मुख्य पृष्ठ पर लौटें",
    },
  };

  const txt = t[lang] || t.en;

  return (
    <section className="not-found-page" style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      textAlign: "center",
      background: "linear-gradient(180deg, #fff8e1 0%, #ffffff 100%)",
    }}>
      <div style={{
        maxWidth: "600px",
        padding: "40px 30px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid #ffe0b2",
      }}>
        <div style={{
          fontSize: "48px",
          color: "#ff9800",
          marginBottom: "16px",
        }}>
          <FaExclamationTriangle />
        </div>
        <span style={{
          display: "inline-block",
          padding: "4px 14px",
          borderRadius: "20px",
          background: "#fff3e0",
          color: "#e65100",
          fontSize: "12px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          marginBottom: "16px",
        }}>
          {txt.badge}
        </span>
        <h1 style={{
          fontSize: "28px",
          color: "#3e2723",
          marginBottom: "12px",
          fontFamily: "'Playfair Display', serif",
        }}>
          {txt.title}
        </h1>
        <p style={{
          fontSize: "15px",
          color: "#6d4c41",
          lineHeight: "1.6",
          marginBottom: "28px",
        }}>
          {txt.message}
        </p>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #ff9800 0%, #e65100 100%)",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(230, 81, 0, 0.3)",
            transition: "all 0.3s ease",
          }}
        >
          <FaHome /> {txt.btn}
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
