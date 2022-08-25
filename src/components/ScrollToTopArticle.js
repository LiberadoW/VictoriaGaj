import { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopArticle() {
  const { pathname } = useLocation();

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    
    const header = document.querySelector(".main-image");
    const height = header.offsetHeight
  
    window.scrollTo(0, height);
  }, [pathname]);
  
  return null;
}