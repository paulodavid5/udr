import React from "react";
import raianos from "../../assets/img/UDRlogo.png";
import anais from "../../assets/img/anais.png";

function PrevGame() {
  return (
    <div className="prev-game">
      <div className="container-prev">
        <div className="teams">
          <div className="home">
            <img src={anais} alt="adversario" />
            <h2>ANAIS</h2>
          </div>
          <div className="details">
            <h2>0</h2>
            <h3>-</h3>
            <h2>5</h2>
          </div>
          <div className="away">
            <img src={raianos} alt="raianos" />
            <h2>UDR</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevGame;
