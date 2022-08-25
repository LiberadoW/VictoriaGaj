import React from "react";
import headerImg from "../images/headerimage.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <img className="main-image" src={headerImg} alt="" />
    </div>
  );
};

export default Header;
