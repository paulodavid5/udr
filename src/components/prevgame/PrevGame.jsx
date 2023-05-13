import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="prev-game"
      initial={{ opacity: 0, translateY: "50%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="container-prev">
        <div className="teams">
          <div className="home">
            <img src={HomefileUrl} alt="home" />
            <h2 className={prevgameHome === "Raianos" ? "raianos" : ""}>
              {prevgameHome}
            </h2>
          </div>
          <div className="details">
            <h2>{prevgameHomeScore}</h2>
            <h3>-</h3>
            <h2>{prevgameAwayScore}</h2>
          </div>
          <div className="away">
            <img src={AwayfileUrl} alt="away" />
            <h2 className={prevgameAway === "Raianos" ? "raianos" : ""}>
              {prevgameAway}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PrevGame;
