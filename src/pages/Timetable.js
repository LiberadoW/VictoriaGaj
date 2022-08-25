import React from "react";
import "../styles/Timetable.css";
const Timetable = (props) => {

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };

  const splitArray = (arr) => {
    return arr.split("-");
  };

  const splitTitle = (arr) => {
    const [key, ...rest] = arr.split("-");
    const value = rest.join("-");
    key.trim();
    value.trim();
    return [key, value];
  };

  if (props.scores.length === 0) {
    return null;
  } else {
    return (
      <div className="scores">
        <h1>TERMINARZ</h1>
        <div className="timetable">
          {sliceIntoChunks(props.scores.timetable, 2).map((item) => (
            <div className="timetable-item">
              <div className="timetable-item-title">
                <span>{splitTitle(item[0][0])[0]}</span>
                <span>{splitTitle(item[0][0])[1]}</span>
              </div>
              <div className="timetable-item-text">
                {item[1].map((array) => (
                  <div className="timetable-matchup">
                    <p className="first-team">
                      <span
                        className={
                          splitArray(array)[0].trim() === "Victoria Gaj"
                            ? "bold-text"
                            : ""
                        }
                      >
                        {splitArray(array)[0]}
                      </span>
                    </p>
                    <p className="timetable-score">-</p>
                    <p className="last-team">
                      <span
                        className={
                          splitArray(array)[1].trim() === "Victoria Gaj"
                            ? "bold-text"
                            : ""
                        }
                      >
                        {splitArray(array)[1]}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
           {/* <BackToTopButton/> */}
        </div>
      </div>
    );
  }
};

export default Timetable;
