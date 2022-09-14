import React, { useEffect, useRef, useState } from "react";

const Modal = ({
  currentPage,
  currentIndex,
  clickedImg,
  handleRightClick,
  setClickedImg,
  handleLeftClick,
  currentPosts,
  postsPerPage,
  photoList,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  const width = window.innerWidth;

  const handleEscape = () => {
    setClickedImg(null);
  };

  const useKey = (key, cb) => {
    const callbackRef = useRef(cb);
    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      const handleKey = (e) => {
        if (e.keyCode === key) {
          callbackRef.current(e);
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [key]);
  };

  useKey(37, handleLeftClick);
  useKey(39, handleRightClick);
  useKey(27, handleEscape);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);


  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? handleRightClick() : handleLeftClick();
    }
    // add your conditional logic here
  };

  if (width > 768) {
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <div className="overlay-image-container dismiss">
            <div
              className="overlay-arrow-left"
              onClick={handleLeftClick}
              style={{
                visibility:
                  currentPage === 1 && currentIndex === 0
                    ? "hidden"
                    : "visible",
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="image-wrapper">
              <div className="photo-number-container">{`${
                photoList.indexOf(currentPosts[currentIndex]) + 1
              }/${photoList.length}`}</div>
              <img src={clickedImg} alt="bigger" />
            </div>
            <div
              className="overlay-arrow-right"
              onClick={handleRightClick}
              style={{
                visibility:
                  currentPage >= photoList.length / postsPerPage &&
                  currentIndex === currentPosts.length - 1
                    ? "hidden"
                    : "visible",
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <span className="dismiss" onClick={handleClick}>
            {" "}
            X
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <div className="overlay-image-container dismiss">
            <div
              className="image-wrapper"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="photo-number-container">{`${
                photoList.indexOf(currentPosts[currentIndex]) + 1
              }/${photoList.length}`}</div>

              <img src={clickedImg} alt="bigger" />
            </div>

            <div className="mobile-arrow-container">
              <div
                className="overlay-arrow-left"
                onClick={handleLeftClick}
                style={{
                  visibility:
                    currentPage === 1 && currentIndex === 0
                      ? "hidden"
                      : "visible",
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div
                className="overlay-arrow-right"
                onClick={handleRightClick}
                style={{
                  visibility:
                    currentPage >= photoList.length / postsPerPage &&
                    currentIndex === currentPosts.length - 1
                      ? "hidden"
                      : "visible",
                }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <span className="dismiss" onClick={handleClick}>
            {" "}
            X
          </span>
        </div>
      </>
    );
  }
};

export default Modal;
