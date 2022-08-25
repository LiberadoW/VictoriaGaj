import React from "react";

const DarkMode = (props) => {
  return (
    <div className="theme-toggle">
      <div className="dark-mode-icons">
        <p><i class="fa-solid fa-sun fa-lg" ></i></p>
    <p> <i
          onClick={props.switchTheme}
          class={
            props.theme === "light"
              ? "fa-solid fa-toggle-off fa-lg"
              : "fa-solid fa-toggle-on fa-lg"
          }
        ></i></p>
       
        <p><i class="fa-solid fa-moon fa-lg"></i></p>
      </div>
    </div>
  );
};

export default DarkMode;
