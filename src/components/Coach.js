import React from "react";

const Coach = ({photo,name,role,mobile,mail}) => {
  return (
    <div className="coach-card">
      <div className="coach-image-container">
        <img src={photo} alt="Coach" />
      </div>
      <div className="coach-text-container">
      <p className="bold-text">{name}</p>
      <p>{role}</p>
      <p>Telefon: {mobile}</p>
      <p>E-mail: {mail}</p>
      </div>
    </div>
  );
};

export default Coach;
