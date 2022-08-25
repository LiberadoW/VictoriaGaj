import React from "react";
import "../styles/Coaches.css";
import Coach from "../components/Coach";

import MarcinPhoto from "../images/MarcinWozniakTrener.jpg";
import RadekPhoto from "../images/RadoslawPiwowarczykTrener.jpg";
import TomekPhoto from "../images/TomaszWozniakTrener.jpg";

const coachInfo = [
  {
    id: 1,
    name: "Marcin Woźniak",
    role: "Trener",
    photo: MarcinPhoto,
    mobile: "+48 516466577",
    mail: "marcin.wozniak1@o2.pl",
  },
  {
    id: 2,
    name: "Radosław Piwowarczyk",
    role: "Trener",
    photo: RadekPhoto,
    mobile: "+48 501586736",
    mail: "marcin.wozniak1@o2.pl",
  },
  {
    id: 3,
    name: "Tomasz Woźniak",
    role: "Trener bramkarzy",
    photo: TomekPhoto,
    mobile: "+48 501415076",
    mail: "marcin.wozniak1@o2.pl",
  },
];


const Coaches = () => {
  
  return (
    <div className="coaches">
      <h1>SZTAB TRENERSKI</h1>
      <div className="coach-info-container">
        {coachInfo.map((item) => {
          
          return (
            <Coach
              key={item.id}
              name={item.name}
              role={item.role}
              photo={item.photo}
              mobile={item.mobile}
              mail={item.mail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Coaches;
