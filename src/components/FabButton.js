import React, { useState, useEffect } from "react";
import arrowIcon from "../assets/icons/fabbutton_mørk-lys.svg";

const FabButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll handler
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Custom smooth scroll
  const scrollToTop = () => {
    const scrollDuration = 1000; // Varighed i ms (1 sekund)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Beregn scroll-step
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval); // Stop når vi når toppen
      }
    }, 15); // Opdater hver 15ms
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-transparent z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <img
        src={arrowIcon}
        alt="Scroll to top"
        className="h-12 w-12 object-cover" // Sørger for, at SVG fylder hele knappen
      />
    </button>
  );
};

export default FabButton;
