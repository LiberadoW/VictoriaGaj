import React, { Component } from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Strona główna", path: "/" },
  { name: "Kadra", path: "/players" },
  { name: "Trenerzy", path: "/coaches" },
  { name: "Treningi", path: "/workouts" },
  { name: "Terminarz", path: "/timetable" },
  // { name: "Wideo", path: "/videos" },
  { name: "Foto", path: "/photos" },
  { name: "Kontakt", path: "contact" },
];

class Navigation extends Component {
  state = {
    clicked: false,
  };

  handleClickOutside = (e) => {
    if (e.target.classList.contains(".navigation-items")) {
      console.log("ass");
    } else {
      console.log("nope")
    }
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  handleNavClick = () => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    return (
      <nav className="main-navigation">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"
            }
          ></i>
        </div>
        <ul
          onClick={this.handleClickOutside}
          className={
            this.state.clicked ? "navigation-items active" : "navigation-items"
          }
        >
          {list.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} onClick={this.handleNavClick}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
