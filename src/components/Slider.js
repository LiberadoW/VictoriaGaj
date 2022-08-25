import React, { useState } from "react";
import "../styles/Slider.css";
// import BtnSlider from "./BtnSlider";

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    const isLastSlide = currentIndex === props.photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  console.log(window.innerWidth);

  return (
    <div className="slider-container">
      <div className="slide-image">
        <img
          src={props.photos[currentIndex].attributes.formats.medium.url}
          alt=""
        />
        <div className="slider-controls-container">
          <div className="left-arrow">
            <span onClick={handleLeftClick}>❰</span>
          </div>
          <div className="right-arrow">
            <span onClick={handleRightClick}>❱</span>
          </div>
          <div className="dots-container">
            {props.photos.map((slide, slideIndex) => (
              <div
                className={slideIndex === currentIndex ? "dots active" : "dots"}
                key={slideIndex}
                onClick={() => handleDotClick(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
