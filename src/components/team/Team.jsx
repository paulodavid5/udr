import React from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Team({ allPlayers }) {
  // const [expandedPlayer, setExpandedPlayer] = useState(null);
  const navigate = useNavigate();

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

  // const handleCardClick = (number) => {
  //   sessionStorage.setItem("scrollPosition", window.scrollY);

  //   navigate(`/udr/${number}`, {
  //     state: { allPlayers },
  //   });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     sessionStorage.setItem("scrollPosition", scrollPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleCardClick = (number) => {
  //   sessionStorage.setItem("scrollPosition", window.scrollY);

  //   navigate(`/udr/${number}`, {
  //     state: { allPlayers },
  //   });
  // };
  const handleCardClick = (number) => {
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    navigate(`/udr/${number}`, {
      state: { allPlayers, scrollPosition },
    });
  };

  // useEffect(() => {
  //   return () => {
  //     const scrollPosition = window.scrollY;
  //     setScrollP(scrollPosition);
  //   };
  // }, []);

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
        // <Link to={`/team/${item.number}`}>
        <m.div
          key={idx}
          className={`container_player ${idx % 2 === 0 ? "even" : ""}`}
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          onClick={() => handleCardClick(item.number)}
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
        // </Link>
      ))}
    </div>
  );
}

export default Team;
