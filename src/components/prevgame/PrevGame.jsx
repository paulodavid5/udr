import React from "react";

function PrevGame(props) {
  const {
    prevgameHome,
    prevgameHomeScore,
    prevgameAway,
    prevgameAwayScore,
    HomefileUrl,
    AwayfileUrl,
  } = props;
  return (
    <div className="prev-game">
      <div className="container-prev">
        <div className="teams">
          <div className="home">
            <img src={HomefileUrl} alt="home" />
            <h2>{prevgameHome}</h2>
          </div>
          <div className="details">
            <h2>{prevgameHomeScore}</h2>
            <h3>-</h3>
            <h2>{prevgameAwayScore}</h2>
          </div>
          <div className="away">
            <img src={AwayfileUrl} alt="away" />
            <h2>{prevgameAway}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevGame;
