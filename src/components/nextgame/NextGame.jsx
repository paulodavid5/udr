import React from "react";
import { motion } from "framer-motion";

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
      <motion.div
        className="container-next-game"
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
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
      </motion.div>
    </div>
  );
}

export default NextGame;
