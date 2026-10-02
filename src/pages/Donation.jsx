import { useState } from "react";
import { 
  FaCopy, 
  FaCheck, 
  FaUniversity, 
  FaQrcode, 
  FaRegHeart, 
  FaHospital, 
  FaGraduationCap, 
  FaTree, 
  FaUtensils,
  FaShieldAlt,
  FaWhatsapp,
  FaEnvelope,
  FaReceipt,
  FaCheckCircle
} from "react-icons/fa";
import { useLang } from "../context/LanguageContext";

function Donation() {
  const { lang } = useLang();
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedPan, setCopiedPan] = useState(false);
  const [copied80G, setCopied80G] = useState(false);
  const [copiedNgo, setCopiedNgo] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "acc") {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else if (type === "ifsc") {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    } else if (type === "upi") {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else if (type === "pan") {
      setCopiedPan(true);
      setTimeout(() => setCopiedPan(false), 2000);
    } else if (type === "80g") {
      setCopied80G(true);
      setTimeout(() => setCopied80G(false), 2000);
    } else if (type === "ngo") {
      setCopiedNgo(true);
      setTimeout(() => setCopiedNgo(false), 2000);
    }
  };

  const t = {
    en: {
      heroTitle: "Support Sri Khakhi Baba Seva Sangh",
      heroSubtitle: "Every contribution helps us serve society, protect nature, and preserve sacred heritage",
      
      taxBadgeTitle: "TAX EXEMPTION AVAILABLE UNDER SECTION 80G",
      taxBadgeDesc: "Donations made to Sri Khakhi Baba Seva Sangh (Regd. 136/97) are eligible for tax deduction under Section 80G of the Income Tax Act, 1961. Donors receive an official 80G donation receipt / Form 10BE certificate for claiming tax benefits in their ITR.",
      
      methodsHeading: "Direct Financial Contributions",
      methodsDesc: "You can make a direct bank transfer or use any UPI app to support our charitable activities. All donations are handled with complete transparency and go directly toward community development, temple preservation, education, and humanitarian services.",
      
      bankCardTitle: "Bank Transfer & Trust Details",
      accName: "Account Name:",
      bankName: "Bank Name:",
      accNumber: "Account Number:",
      ifsc: "IFSC Code:",
      branch: "Branch:",
      trustReg: "Trust Regd. No:",
      panLabel: "Trust PAN No:",
      eightyGLabel: "80G Registration No:",
      ngoLabel: "NGO Darpan ID:",
      taxStatus: "Tax Exemption Status:",
      taxStatusVal: "Eligible for Tax Deduction under Section 80G",
      
      copy: "Copy",
      copied: "Copied",
      
      upiCardTitle: "Scan & Donate via UPI",
      upiDesc: "Scan the QR code using any UPI application (Google Pay, PhonePe, Paytm, BHIM) to make a fast and secure contribution.",
      upiIdLabel: "UPI ID:",
      
      receiptCardTitle: "How to Receive Your 80G Tax Exemption Receipt (Form 10BE)",
      receiptCardSubtitle: "As per the guidelines of the Income Tax Department (CBDT), please follow these simple steps to obtain your 80G donation certificate:",
      step1Title: "1. Make Contribution",
      step1Desc: "Donate via Bank Transfer (NEFT/RTGS/IMPS) or UPI QR Code.",
      step2Title: "2. Save Transaction ID",
      step2Desc: "Note down the UTR / Transaction Reference Number or take a payment screenshot.",
      step3Title: "3. Share Donor Details",
      step3Desc: "Send your Full Name, PAN Number, Postal Address, and Payment Screenshot via WhatsApp or Email.",
      step4Title: "4. Receive 80G Certificate",
      step4Desc: "The Seva Sangh will file Form 10BD and issue your official Section 80G Receipt / Form 10BE.",
      
      btnWa: "Request 80G Receipt via WhatsApp",
      btnMail: "Request 80G Receipt via Email",
      
      impactHeading: "Your Donation at Work",
      impactIntro: "The Seva Sangh utilizes your contributions across key areas of social upliftment, education, and spiritual service:",
      cause1Title: "Dham & Temple Maintenance",
      cause1Desc: "Preserving the historical temple and ancient Dhuna, managing basic amenities for pilgrims, and supporting regular worship and pujas.",
      cause2Title: "Educational Support",
      cause2Desc: "Funding upgrades and resources for the Sri Khakhi Baba Government Senior Secondary School (founded in 1946) to provide quality education for village youth.",
      cause3Title: "Environmental Conservation",
      cause3Desc: "Continuing our mass tree plantation drives to preserve a clean, green ecosystem around the Dham and surrounding hills.",
      cause4Title: "Animal Welfare",
      cause4Desc: "Supporting the village veterinary hospital to provide medical care, vaccines, and shelter for local cattle and livestock.",
      cause5Title: "Annual Bhandara & Annadan",
      cause5Desc: "Providing free sanctified meals (prasadam) to thousands of visiting pilgrims during the annual Falgun Amavasya Mahotsav."
    },
    hi: {
      heroTitle: "श्री खाखी बाबा सेवा संघ को सहयोग दें",
      heroSubtitle: "प्रत्येक योगदान हमें समाज सेवा, पर्यावरण संरक्षण और पावन धरोहर के संवर्धन में संबल प्रदान करता है",
      
      taxBadgeTitle: "आयकर अधिनियम की धारा 80G के अंतर्गत कर छूट उपलब्ध",
      taxBadgeDesc: "श्री खाखी बाबा सेवा संघ (पंजीकृत सं. 136/97) को दिए जाने वाले दान पर आयकर अधिनियम, 1961 की धारा 80G के अंतर्गत कर कटौती का लाभ प्राप्त होता है। आयकर रिटर्न में कर छूट का दावा करने हेतु दानदाताओं को आधिकारिक 80G रसीद / फॉर्म 10BE जारी किया जाता है।",
      
      methodsHeading: "सीधे आर्थिक योगदान के माध्यम",
      methodsDesc: "आप सीधे बैंक ट्रांसफर या किसी भी यूपीआई ऐप के माध्यम से हमारे सेवा कार्यों में सहयोग कर सकते हैं। सभी दान पूर्ण पारदर्शिता के साथ स्थानीय विकास, मंदिर संरक्षण, शिक्षा एवं जनसेवा कार्यों में उपयोग किए जाते हैं।",
      
      bankCardTitle: "बैंक ट्रांसफर एवं न्यास विवरण",
      accName: "खाता नाम:",
      bankName: "बैंक का नाम:",
      accNumber: "खाता संख्या:",
      ifsc: "आईएफएससी (IFSC) कोड:",
      branch: "शाखा:",
      trustReg: "न्यास पंजीकरण सं.:",
      panLabel: "न्यास पैन (PAN) सं.:",
      eightyGLabel: "80G पंजीकरण सं.:",
      ngoLabel: "एनजीओ दर्पण (NGO Darpan) सं.:",
      taxStatus: "कर छूट स्थिति:",
      taxStatusVal: "धारा 80G के तहत कर छूट हेतु पात्र",
      
      copy: "कॉपी करें",
      copied: "कॉपी हुआ",
      
      upiCardTitle: "यूपीआई (UPI) द्वारा स्कैन कर दान करें",
      upiDesc: "किसी भी यूपीआई ऐप (गूगल पे, फोनपे, पेटीएम, भीम) से क्यूआर कोड स्कैन करके त्वरित एवं सुरक्षित दान करें।",
      upiIdLabel: "यूपीआई आईडी:",
      
      receiptCardTitle: "80G कर छूट रसीद (फॉर्म 10BE) प्राप्त करने की प्रक्रिया",
      receiptCardSubtitle: "आयकर विभाग (CBDT) के नियमों के अनुसार 80G दान प्रमाण पत्र प्राप्त करने हेतु कृपया ये सरल चरण अपनाएं:",
      step1Title: "1. सहयोग राशि भेजें",
      step1Desc: "बैंक ट्रांसफर (NEFT/RTGS/IMPS) या यूपीआई क्यूआर कोड द्वारा दान करें।",
      step2Title: "2. ट्रांजेक्शन आईडी सुरक्षित रखें",
      step2Desc: "भुगतान का यूटीआर (UTR) / संदर्भ संख्या नोट करें अथवा स्क्रीनशॉट लें।",
      step3Title: "3. विवरण साझा करें",
      step3Desc: "अपना पूरा नाम, पैन कार्ड (PAN) नंबर, डाक का पता एवं भुगतान स्क्रीनशॉट व्हाट्सएप अथवा ईमेल पर भेजें।",
      step4Title: "4. 80G प्रमाण पत्र प्राप्त करें",
      step4Desc: "न्यास द्वारा आयकर पोर्टल पर फॉर्म 10BD दर्ज कर आपको विधिवत 80G रसीद / फॉर्म 10BE प्रदान की जाएगी।",
      
      btnWa: "व्हाट्सएप पर 80G रसीद हेतु अनुरोध करें",
      btnMail: "ईमेल द्वारा 80G रसीद हेतु अनुरोध करें",
      
      impactHeading: "आपके दान का सदुपयोग",
      impactIntro: "सेवा संघ आपके पावन अंशदान का उपयोग समाज, शिक्षा और धार्मिक उत्थान के इन प्रमुख क्षेत्रों में करता है:",
      cause1Title: "धाम एवं मंदिर जीर्णोद्धार",
      cause1Desc: "ऐतिहासिक मंदिर, पावन धूणा का संरक्षण, तीर्थयात्रियों हेतु मूलभूत सुविधाएं एवं नित्य पूजा-अर्चना का प्रबंधन।",
      cause2Title: "शिक्षा एवं विद्यालय सहयोग",
      cause2Desc: "श्री खाखी बाबा राजकीय उच्च माध्यमिक विद्यालय (स्थापना 1946) के उन्नयन, प्रयोगशालाओं एवं ग्रामीण बच्चों की शिक्षा में सहायता।",
      cause3Title: "पर्यावरण एवं वृक्षारोपण",
      cause3Desc: "आश्रम परिसर और आसपास की अरावली पहाड़ियों पर हरियाली बनाए रखने हेतु निरंतर सघन वृक्षारोपण।",
      cause4Title: "पशु कल्याण एवं चिकित्सा",
      cause4Desc: "ग्राम डाडा फतेहपुरा में स्थापित पशु चिकित्सालय के माध्यम से स्थानीय गौवंश एवं पशुधन को त्वरित निःशुल्क उपचार।",
      cause5Title: "वार्षिक भंडारा एवं अन्नदान",
      cause5Desc: "फाल्गुन बदी अमावस्या मेले में पधारने वाले हजारों श्रद्धालुओं को निरंतर निःशुल्क महाप्रसाद (अन्नदान) वितरण।"
    }
  };

  const txt = t[lang];

  // WhatsApp pre-filled message for 80G receipt
  const waText = encodeURIComponent(
    `Jai Dada ke Nath ki! I have made a donation to Sri Khakhi Baba Seva Sangh and would like to request an 80G tax exemption receipt (Form 10BE).\n\n` +
    `*Donor Full Name:* \n` +
    `*PAN Number:* \n` +
    `*Address with PIN:* \n` +
    `*Donation Amount:* ₹\n` +
    `*Transaction ID / UTR:* \n` +
    `*Date of Payment:* \n\n` +
    `(Payment screenshot attached)`
  );
  const waUrl = `https://wa.me/918686001010?text=${waText}`;

  // Email pre-filled mailto for 80G receipt
  const mailSubject = encodeURIComponent("Request for Section 80G Donation Receipt (Form 10BE)");
  const mailBody = encodeURIComponent(
    `Respected Trustees,\n` +
    `Sri Khakhi Baba Seva Sangh,\n\n` +
    `I have made a contribution to Sri Khakhi Baba Seva Sangh and request an official Section 80G donation receipt / Form 10BE for income tax exemption.\n\n` +
    `Donor Full Name: \n` +
    `PAN Number: \n` +
    `Complete Postal Address: \n` +
    `Donation Amount (INR): ₹\n` +
    `Transaction UTR / Ref No: \n` +
    `Date of Payment: \n` +
    `Contact Phone / Mobile: \n\n` +
    `Trust Reference Details:\n` +
    `Trust PAN: AAKTS3250N | 80G No: AAKTS3250NF2025101 | NGO Darpan: TS/2024/0464716\n\n` +
    `Please find the payment screenshot / confirmation attached.\n\n` +
    `With devotional regards,\n`
  );
  const mailtoUrl = `mailto:srikhakhibabasevasang.hyd@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <section className="donation-page-container">
      {/* Hero Header */}
      <div className="donation-hero">
        <div className="donation-hero-overlay">
          <h1 data-aos="fade-up">{txt.heroTitle}</h1>
          <p data-aos="fade-up" data-aos-delay="100">{txt.heroSubtitle}</p>
        </div>
      </div>

      <div className="donation-content-wrapper">
        
        {/* Left Column: Bank Account, QR & 80G Receipt Guide */}
        <div className="donation-methods-column">

          {/* 80G Tax Exemption Highlight Banner with official PAN, 80G & NGO IDs */}
          <div className="tax-exemption-banner" data-aos="fade-up">
            <div className="tax-badge-header">
              <div className="tax-badge-icon">
                <FaShieldAlt />
              </div>
              <div>
                <span className="tax-badge-pill">Section 80G Approved</span>
                <h3>{txt.taxBadgeTitle}</h3>
              </div>
            </div>
            <p className="tax-badge-text">
              {txt.taxBadgeDesc}
            </p>

            <div className="tax-legal-pills">
              <div className="legal-pill">
                <span className="pill-lbl">PAN:</span>
                <span className="pill-code">AAKTS3250N</span>
                <button 
                  className="copy-pill-btn" 
                  onClick={() => handleCopy("AAKTS3250N", "pan")}
                  title="Copy PAN"
                >
                  {copiedPan ? <FaCheck className="copied-icon" /> : <FaCopy />}
                </button>
              </div>

              <div className="legal-pill">
                <span className="pill-lbl">80G Reg:</span>
                <span className="pill-code">AAKTS3250NF2025101</span>
                <button 
                  className="copy-pill-btn" 
                  onClick={() => handleCopy("AAKTS3250NF2025101", "80g")}
                  title="Copy 80G Number"
                >
                  {copied80G ? <FaCheck className="copied-icon" /> : <FaCopy />}
                </button>
              </div>

              <div className="legal-pill">
                <span className="pill-lbl">NGO Darpan:</span>
                <span className="pill-code">TS/2024/0464716</span>
                <button 
                  className="copy-pill-btn" 
                  onClick={() => handleCopy("TS/2024/0464716", "ngo")}
                  title="Copy NGO Darpan ID"
                >
                  {copiedNgo ? <FaCheck className="copied-icon" /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>

          <h2>{txt.methodsHeading}</h2>
          <p className="donation-method-desc">
            {txt.methodsDesc}
          </p>

          {/* Bank Transfer Card */}
          <div className="bank-transfer-card" data-aos="fade-up">
            <div className="card-header">
              <FaUniversity className="bank-header-icon" />
              <h3>{txt.bankCardTitle}</h3>
            </div>
            
            <div className="bank-info-grid">
              <div className="info-row">
                <span className="info-label">{txt.accName}</span>
                <span className="info-val">Sri Khakhi Baba Seva Sangh</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">{txt.bankName}</span>
                <span className="info-val">Tamilnad Mercantile Bank Ltd (TMB)</span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.accNumber}</span>
                <span className="info-val highlight-val">
                  065100050174003
                  <button className="copy-btn" onClick={() => handleCopy("065100050174003", "acc")} aria-label="Copy Account Number">
                    {copiedAccount ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedAccount ? txt.copied : txt.copy}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.ifsc}</span>
                <span className="info-val highlight-val">
                  TMBL0000065
                  <button className="copy-btn" onClick={() => handleCopy("TMBL0000065", "ifsc")} aria-label="Copy IFSC Code">
                    {copiedIfsc ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedIfsc ? txt.copied : txt.copy}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.branch}</span>
                <span className="info-val">Dada Fatehpura, Khetri, Rajasthan</span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.trustReg}</span>
                <span className="info-val">136/97</span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.panLabel}</span>
                <span className="info-val highlight-val">
                  AAKTS3250N
                  <button className="copy-btn" onClick={() => handleCopy("AAKTS3250N", "pan")} aria-label="Copy PAN Number">
                    {copiedPan ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedPan ? txt.copied : txt.copy}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.eightyGLabel}</span>
                <span className="info-val highlight-val">
                  AAKTS3250NF2025101
                  <button className="copy-btn" onClick={() => handleCopy("AAKTS3250NF2025101", "80g")} aria-label="Copy 80G Number">
                    {copied80G ? <FaCheck className="copied-icon" /> : <FaCopy />} {copied80G ? txt.copied : txt.copy}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">{txt.ngoLabel}</span>
                <span className="info-val highlight-val">
                  TS/2024/0464716
                  <button className="copy-btn" onClick={() => handleCopy("TS/2024/0464716", "ngo")} aria-label="Copy NGO Darpan Number">
                    {copiedNgo ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedNgo ? txt.copied : txt.copy}
                  </button>
                </span>
              </div>

              <div className="info-row tax-status-row">
                <span className="info-label">{txt.taxStatus}</span>
                <span className="info-val tax-highlight">
                  <FaCheckCircle className="tax-check-icon" /> {txt.taxStatusVal}
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="upi-qr-card" data-aos="fade-up">
            <div className="qr-text">
              <h3><FaQrcode className="qr-header-icon" /> {txt.upiCardTitle}</h3>
              <p>{txt.upiDesc}</p>
              <span className="upi-id">
                <strong>{txt.upiIdLabel}</strong> <span>srikakhi174003@tmb</span>
                <button className="copy-btn" style={{ marginLeft: "10px" }} onClick={() => handleCopy("srikakhi174003@tmb", "upi")}>
                  {copiedUpi ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedUpi ? txt.copied : txt.copy}
                </button>
              </span>
            </div>
            <div className="qr-box">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi%3A%2F%2Fpay%3Fpa%3Dsrikakhi174003%40tmb%26pn%3DSRI%2520KHAKHI%2520BABA%2520SEVA%2520SANGH" 
                alt="UPI QR Code" 
                className="qr-image"
              />
            </div>
          </div>

          {/* How to Get 80G Receipt Guide */}
          <div className="receipt-guide-card" data-aos="fade-up">
            <div className="receipt-guide-header">
              <FaReceipt className="receipt-header-icon" />
              <div>
                <h3>{txt.receiptCardTitle}</h3>
                <p>{txt.receiptCardSubtitle}</p>
              </div>
            </div>

            <div className="receipt-steps-grid">
              <div className="receipt-step-item">
                <div className="step-number">1</div>
                <h4>{txt.step1Title}</h4>
                <p>{txt.step1Desc}</p>
              </div>
              <div className="receipt-step-item">
                <div className="step-number">2</div>
                <h4>{txt.step2Title}</h4>
                <p>{txt.step2Desc}</p>
              </div>
              <div className="receipt-step-item">
                <div className="step-number">3</div>
                <h4>{txt.step3Title}</h4>
                <p>{txt.step3Desc}</p>
              </div>
              <div className="receipt-step-item">
                <div className="step-number">4</div>
                <h4>{txt.step4Title}</h4>
                <p>{txt.step4Desc}</p>
              </div>
            </div>

            <div className="receipt-action-buttons">
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="receipt-btn receipt-btn-wa"
              >
                <FaWhatsapp /> {txt.btnWa}
              </a>
              <a 
                href={mailtoUrl} 
                className="receipt-btn receipt-btn-mail"
              >
                <FaEnvelope /> {txt.btnMail}
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Donation Impact */}
        <div className="donation-impact-column">
          <div className="impact-sticky-card" data-aos="fade-left">
            <h2>{txt.impactHeading}</h2>
            <p className="impact-intro">
              {txt.impactIntro}
            </p>

            <div className="impact-list">
              
              <div className="impact-item">
                <div className="impact-icon-wrapper red">
                  <FaRegHeart />
                </div>
                <div className="impact-text-wrapper">
                  <h4>{txt.cause1Title}</h4>
                  <p>{txt.cause1Desc}</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper orange">
                  <FaGraduationCap />
                </div>
                <div className="impact-text-wrapper">
                  <h4>{txt.cause2Title}</h4>
                  <p>{txt.cause2Desc}</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper green">
                  <FaTree />
                </div>
                <div className="impact-text-wrapper">
                  <h4>{txt.cause3Title}</h4>
                  <p>{txt.cause3Desc}</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper blue">
                  <FaHospital />
                </div>
                <div className="impact-text-wrapper">
                  <h4>{txt.cause4Title}</h4>
                  <p>{txt.cause4Desc}</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper maroon">
                  <FaUtensils />
                </div>
                <div className="impact-text-wrapper">
                  <h4>{txt.cause5Title}</h4>
                  <p>{txt.cause5Desc}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Donation;
