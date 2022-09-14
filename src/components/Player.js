const Player = ({photo,name,role,age,nationality}) => {
    return (
      <div className="player-card">
        <div className="top-player-card">
          <p className="player-photo">
            <img src={photo} alt="player" />
          </p>
        </div>
        <div className="bottom-player-card">
          <p className="player-name bold-text">{name}</p>
          <p className="space-between">
            <span className="gray-text">Pozycja</span> <span>{role}</span>
          </p>
          <p className="space-between">
            <span className="gray-text">Wiek</span> <span>{age}</span>
          </p>
          <p className="space-between">
            <span className="gray-text">Narodowość</span>
            <span>
              <img src={nationality} alt="flag" />
            </span>
          </p>
        </div>
      </div>
    );
  };

  export default Player;