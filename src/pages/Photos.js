import React from "react";
import Thumbnails from "../components/Thumbnails";


const Photos = ({gallery}) => {
  return (
    <div className="thumbnails-container">
      <h1>GALERIA ZDJĘĆ SEZON 2022/2023</h1>
      <ul>
        <Thumbnails gallery={gallery} />
      </ul>
    </div>
  );
};

export default Photos;
