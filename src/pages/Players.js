import React from "react";
import "../styles/Players.css";
import Player from "../components/Player";

const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

const Players = (props) => {
  const players = props.players;

  const sortedPlayers = sortPlayers(players);

  return (
    <div>
      <h1>KADRA ZESPOŁU SEZON 2021-2022</h1>

      {sortedPlayers.map((role) => {
        return (
          <div className="players-container">
            <div className="players-role"><h3>{role.name}</h3></div>
            <div className="players">
              {role.value.map((item) => {
                return (
                  <Player
                    key={item.id}
                    name={item.attributes.Name}
                    photo={item.attributes.Photo.data.attributes.url}
                    role={item.attributes.Role}
                    age={getAge(item.attributes.Birthdate)}
                    nationality={
                      item.attributes.Nationality.data[0].attributes.url
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const sortPlayers = (arr) => {
  const playersFiltered = [
    { id: 1, name: "Bramkarze", value: [] },
    { id: 2, name: "Obrońcy", value: [] },
    { id: 3, name: "Pomocnicy", value: [] },
    { id: 4, name: "Napastnicy", value: [] },
  ];

  arr.forEach((player) => {
    switch (player.attributes.Role) {
      case "Bramkarz":
        playersFiltered[0].value.push(player);
        break;
      case "Obrońca":
        playersFiltered[1].value.push(player);
        break;
      case "Pomocnik":
        playersFiltered[2].value.push(player);
        break;
      case "Napastnik":
        playersFiltered[3].value.push(player);
        break;
      default:
        console.log("no player found");
        break;
    }
  });

  return playersFiltered;
};

export default Players;
