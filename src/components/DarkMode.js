import React from "react";

const DarkMode = ({theme,switchTheme}) => {
  return (
    <div className="theme-toggle">
      <div className="dark-mode-icons">
        <p><i className="fa-solid fa-sun fa-lg" ></i></p>
    <p> <i
          onClick={switchTheme}
          class={
            theme === "light"
              ? "fa-solid fa-toggle-off fa-lg"
              : "fa-solid fa-toggle-on fa-lg"
          }
        ></i></p>
       
        <p><i className="fa-solid fa-moon fa-lg"></i></p>
      </div>
    </div>
  );
};

export default DarkMode;
