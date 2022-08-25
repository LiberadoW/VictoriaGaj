import React from "react";
import { useEffect, useState } from "react";
import "../styles/BackToTopButton.css";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  const calcScrollValue = () => {
    let scrollProgress = document.querySelector("#progress");
    let pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.background = `conic-gradient(#034694 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
      calcScrollValue();
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top-button">
      {backToTopButton && (
        <button onClick={scrollUp} id="progress">
          <div className="progress-value" id="scroll-value">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
