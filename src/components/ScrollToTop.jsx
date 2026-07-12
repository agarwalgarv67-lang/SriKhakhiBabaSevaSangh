import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window back to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instant jump to top prevents visible scrolling animation during transitions
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
