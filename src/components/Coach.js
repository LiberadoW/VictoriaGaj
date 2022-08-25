import React from "react";

const Coach = (props) => {
  return (
    <div className="coach-card">
      <div className="coach-image-container">
        <img src={props.photo} alt="Coach" />
      </div>
      <div className="coach-text-container">
      <p className="bold-text">{props.name}</p>
      <p>{props.role}</p>
      <p>Telefon: {props.mobile}</p>
      <p>E-mail: {props.mail}</p>
      </div>
    </div>
  );
};

export default Coach;
