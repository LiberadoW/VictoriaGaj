const Player = (props) => {
    return (
      <div className="player-card">
        <div className="top-player-card">
          <p className="player-photo">
            <img src={props.photo} alt="player" />
          </p>
        </div>
        <div className="bottom-player-card">
          <p className="player-name bold-text">{props.name}</p>
          <p className="space-between">
            <span className="gray-text">Pozycja</span> <span>{props.role}</span>
          </p>
          <p className="space-between">
            <span className="gray-text">Wiek</span> <span>{props.age}</span>
          </p>
          <p className="space-between">
            <span className="gray-text">Narodowość</span>
            <span>
              <img src={props.nationality} alt="flag" />
            </span>
          </p>
        </div>
      </div>
    );
  };

  export default Player;