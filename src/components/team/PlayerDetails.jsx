import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faCakeCandles,
  faEarthEurope,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

function PlayerDetails() {
  const location = useLocation();
  const { number } = useParams();
  //   const navigate = useNavigate();
  const { allPlayers, scrollPosition } = location.state ?? {};

  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setPlayers(allPlayers);

    if (players) {
      const foundPlayer = players.find(
        (item) => item.number === parseInt(number)
      );
      setPlayer(foundPlayer);
      setDetails(foundPlayer?.details ?? []);
    }
  }, [allPlayers, number, players, player, scrollPosition]);

  //   const handleBackButton = () => {
  //     navigate(`/udr`, { state: { scrollPosition } });
  //   };

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

  const getColor = (name) => {
    if (name === "Raianos") {
      const color = "#F9DB0F";
      return color;
    } else if (name === "Raianos Jun B") {
      const color = "#F9DB0F";
      return color;
    } else if (name === "Monção") {
      const color = "#77a1b5";
      return color;
    } else if (name === "Melgacense") {
      const color = "#eb3c27";
      return color;
    } else if (name === "Campos") {
      const color = "#ba2311";
      return color;
    } else if (name === "Longos Vales") {
      const color = "#34d500";
      return color;
    } else if (name === "Formariz Ac") {
      const color = "#77c1a5";
      return color;
    } else if (name === "Valenciano") {
      const color = "#50C878";
      return color;
    } else if (name === "UD Moreira") {
      const color = "#2D83A1";
      return color;
    } else if (name === "CR Antes") {
      const color = "#hsla(0, 0%, 94%, 1)";
      return color;
    }
  };

  return (
    <div className="playerDetails_page">
      {player && (
        <div className="playerDetails_info">
          <div className={`player_img ${player.name}`}>
            {player?.img && <img src={player.img} alt={player.name} />}
            {divs}
          </div>
          <div className="playerDetails_title">
            <h2>{player.name}</h2>
            <h1>{number}</h1>
          </div>
          <div>
            {details.map((item, idx) => (
              <div className="playerDetails_content" key={idx}>
                <p>
                  <FontAwesomeIcon icon={faCakeCandles} />
                  {item.age}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendar} />
                  {item.bornDate}
                </p>
                <p>
                  <FontAwesomeIcon icon={faEarthEurope} />
                  {item.country}
                </p>
                <div className="playerDetails_content__prevClub">
                  <div className="prevClub_title">
                    <FontAwesomeIcon icon={faFutbol} />
                    Clubes Antigos:
                  </div>
                  <ul>
                    {item.prevClubs?.map((club, id) => (
                      <li key={id} style={{ color: getColor(club.name) }}>
                        <p>{club.name}</p>
                        <p className="season">{club.season}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="playerDetails_button">
        <Link to={`/udr`} state={{ scrollPosition }} preventScrollReset={true}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
      </div>
    </div>
  );
}

export default PlayerDetails;
