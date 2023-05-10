import React from "react";

function NextGame(props) {
  const {
    nextgameTeam,
    nextgamePlace,
    nextgameDate,
    nextgameTime,
    nextgameLogoUrl,
    nextgameStadiumName,
  } = props;
  return (
    <div className="next-game">
      <div className="container-next-game">
        <div className="next-game_details">
          <div className="details_title">
            <h3>Próximo Jogo</h3>
          </div>
          <div className="details_info">
            <div className="details_info_place">
              <h3>{nextgamePlace}</h3>
            </div>
            <div className="details_info_time">
              <div className="date">
                {nextgameDate} <span>{nextgameTime}</span>
              </div>
              <div className="stadium">{nextgameStadiumName}</div>
            </div>
          </div>
        </div>
        <div className="next-game_team">
          <div className="next-game_team-logo">
            <img src={nextgameLogoUrl} alt="" />
          </div>
          <div className="next-game_team-name">
            <h3>{nextgameTeam}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextGame;
