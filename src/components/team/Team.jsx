import React from "react";
import { motion as m } from "framer-motion";

function Team({ allPlayers }) {
  const divs = [];

  for (let i = 0; i < 10; i++) {
    divs.push(
      <div
        key={i}
        style={{
          width: "100%",
          left: `${i * 10}px`,
          zIndex: "0",
        }}
      ></div>
    );
  }

  return (
    <div className="team_container">
      <m.h1
        className="team_title"
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Plantel
      </m.h1>
      {allPlayers.map((item, idx) => (
        <m.div
          key={idx}
          className={`container_player ${idx % 2 === 0 ? "even" : ""}`}
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={`player_img ${item.name}`}>
            {item?.img && <img src={item.img} alt={item.name} />}
            {divs}
          </div>
          <div className="player_details">
            <div className="player_info">
              <h2>{item.name}</h2>
              <h3>{item.position}</h3>
            </div>
            <div className="player_number">
              <h1>{item.number}</h1>
            </div>
          </div>
          <div className="player_line"></div>
        </m.div>
      ))}
    </div>
  );
}

export default Team;
