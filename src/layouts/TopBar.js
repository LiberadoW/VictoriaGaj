import React from "react";
import "../styles/TopBar.css";
import smallLogo from "../images/small-logo.png";

const TopBar = () => {
  return (
    <div className="icon-container">
      <img src={smallLogo} alt="" className="small-logo" />
      <h3>Victoria Gaj</h3>
      <a href="https://www.facebook.com/uks.victoria.gaj" target="_blank" ><i className="fa-brands fa-square-facebook fa-lg"></i></a>
    </div>
  );
};

export default TopBar;
