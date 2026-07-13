import { useState } from "react";
import { FaCopy, FaCheck, FaUniversity, FaQrcode, FaRegHeart, FaHospital, FaGraduationCap, FaTree, FaUtensils } from "react-icons/fa";

function Donation() {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

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
    }
  };

  return (
    <section className="donation-page-container">
      <div className="donation-hero">
        <div className="donation-hero-overlay">
          <h1>Support Sri Khakhi Baba Seva Sangh</h1>
          <p>Every contribution helps us serve society, protect nature, and preserve heritage</p>
        </div>
      </div>

      <div className="donation-content-wrapper">
        
        {/* Left Column: Bank Account & QR */}
        <div className="donation-methods-column">
          <h2>Direct Financial Contributions</h2>
          <p className="donation-method-desc">
            You can make a direct bank transfer or use a UPI app to support our charitable activities. All donations are handled with complete transparency and go directly toward community development and Dham maintenance.
          </p>

          {/* Bank Transfer Card */}
          <div className="bank-transfer-card">
            <div className="card-header">
              <FaUniversity className="bank-header-icon" />
              <h3>Bank Transfer Details</h3>
            </div>
            
            <div className="bank-info-grid">
              <div className="info-row">
                <span className="info-label">Account Name:</span>
                <span className="info-val">Sri Khakhi Baba Seva Sangh</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">Bank Name:</span>
                <span className="info-val">Tamilnad Mercantile Bank Ltd (TMB)</span>
              </div>

              <div className="info-row">
                <span className="info-label">Account Number:</span>
                <span className="info-val highlight-val">
                  065100050174003
                  <button className="copy-btn" onClick={() => handleCopy("065100050174003", "acc")}>
                    {copiedAccount ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedAccount ? "Copied" : "Copy"}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">IFSC Code:</span>
                <span className="info-val highlight-val">
                  TMBL0000065
                  <button className="copy-btn" onClick={() => handleCopy("TMBL0000065", "ifsc")}>
                    {copiedIfsc ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedIfsc ? "Copied" : "Copy"}
                  </button>
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">Branch:</span>
                <span className="info-val">Dada Fatehpura, Khetri, Rajasthan</span>
              </div>

              <div className="info-row">
                <span className="info-label">Trust Regd. No:</span>
                <span className="info-val">136/97</span>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="upi-qr-card">
            <div className="qr-text">
              <h3><FaQrcode className="qr-header-icon" /> Scan & Donate via UPI</h3>
              <p>Scan the code using any UPI app (GPay, PhonePe, Paytm, BHIM) to make a secure and quick donation.</p>
              <span className="upi-id">
                <strong>UPI ID:</strong> <span>srikakhi174003@tmb</span>
                <button className="copy-btn" style={{ marginLeft: "10px" }} onClick={() => handleCopy("srikakhi174003@tmb", "upi")}>
                  {copiedUpi ? <FaCheck className="copied-icon" /> : <FaCopy />} {copiedUpi ? "Copied" : "Copy"}
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
        </div>

        {/* Right Column: Donation Impact */}
        <div className="donation-impact-column">
          <div className="impact-sticky-card">
            <h2>Your Donation at Work</h2>
            <p className="impact-intro">
              The Seva Sangh utilizes your contributions across key areas of social upliftment and spiritual service:
            </p>

            <div className="impact-list">
              
              <div className="impact-item">
                <div className="impact-icon-wrapper red">
                  <FaRegHeart />
                </div>
                <div className="impact-text-wrapper">
                  <h4>Dham & Temple Maintenance</h4>
                  <p>Preserving the historical temple and ancient Dhuna, managing basic amenities for pilgrims, and supporting regular worship and pujas.</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper orange">
                  <FaGraduationCap />
                </div>
                <div className="impact-text-wrapper">
                  <h4>Educational Support</h4>
                  <p>Funding upgrades and resources for the Sri Khakhi Baba Government Senior Secondary School (originally founded as a primary school in 1946) to provide quality education for village youth.</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper green">
                  <FaTree />
                </div>
                <div className="impact-text-wrapper">
                  <h4>Environmental Conservation</h4>
                  <p>Continuing our plantation efforts (such as the massive 2008–2015 drive) to create a clean, green ecosystem around the Dham and surrounding hills.</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper blue">
                  <FaHospital />
                </div>
                <div className="impact-text-wrapper">
                  <h4>Animal Welfare</h4>
                  <p>Supporting the village veterinary hospital to provide timely medical care and vaccinations for local livestock and stray animals.</p>
                </div>
              </div>

              <div className="impact-item">
                <div className="impact-icon-wrapper maroon">
                  <FaUtensils />
                </div>
                <div className="impact-text-wrapper">
                  <h4>Annual Bhandara</h4>
                  <p>Providing free meals (prasadam) to thousands of visiting devotees during the grand Falgun Krishna Amavasya fair.</p>
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
