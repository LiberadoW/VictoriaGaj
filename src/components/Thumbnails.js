import React from "react";
import "../styles/Thumbnails.css";
import { Link } from "react-router-dom";

const Thumbnails = ({gallery}) => {
  return (
    <div className="thumbnail-list-container">
      <ul>
        {gallery.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`gallery/${item.id}`} state={gallery}>
                <div className="thumbnail">
                  <div className="thumbnail-photo">
                    <img
                      src={
                        item.attributes.Photos.data[0].attributes.formats
                          .thumbnail.url
                      }
                      alt=""
                    />
                  </div>
                  <div className="thumbnail-title">{item.attributes.Title}</div>
                </div>
              </Link>
            </li>
          );
        })}
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
        <div className="flex-dummy"></div>
      </ul>
    </div>
  );
};

export default Thumbnails;
