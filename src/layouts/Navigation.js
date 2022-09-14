import React, { useState } from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Strona główna", path: "/" },
  { name: "Kadra", path: "/players" },
  { name: "Trenerzy", path: "/coaches" },
  { name: "Treningi", path: "/workouts" },
  { name: "Foto", path: "/photos" },
  { name: "Kontakt", path: "contact" },
];

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  };

  const handleNavClick = () => {
    setClicked(false)
  };

  return (
    <nav className="main-navigation">
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={
            clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"
          }
        ></i>
      </div>
      <ul
        className={
          clicked ? "navigation-items active" : "navigation-items"
        }
      >
        {list.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} onClick={handleNavClick}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
