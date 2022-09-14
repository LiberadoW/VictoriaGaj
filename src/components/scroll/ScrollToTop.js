import react, { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={isVisible ? "scroll-button active" : "scroll button"}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-angles-up"></i>
    </div>
  );
};

export default ScrollToTop;
