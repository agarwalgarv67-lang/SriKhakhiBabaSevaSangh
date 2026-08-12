import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window back to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Dynamically update canonical link tag in <head> for proper SEO indexing
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const cleanPath = pathname === "/" ? "/" : pathname.toLowerCase();
    canonicalLink.setAttribute("href", `https://srikhakhibabasevasangh.in${cleanPath}`);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
