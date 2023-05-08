import React from "react";
import raianos from "../../assets/img/UDRlogo.png";
import anais from "../../assets/img/anais.png";

function NextGame() {
  return (
    <div className="next-game">
      <div className="container-next">
        <div className="teams">
          <div className="home">
            <img src={raianos} alt="raianos" />
            <h2>UDR</h2>
          </div>
          <div className="details">
            <h2>VS</h2>
            <h2>15:00</h2>
            <h3>Campo do Areal</h3>
          </div>
          <div className="away">
            <img src={anais} alt="adversario" />
            <h2>ANAIS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextGame;
