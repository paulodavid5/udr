import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Results({ resultsGames, resultNextGame }) {
  return (
    <div className="results">
      <Swiper
        modules={[Navigation]}
        initialSlide={resultNextGame - 1}
        centeredSlides
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {resultsGames.map((item) => (
          <SwiperSlide key={item.game}>
            <div className="container-result">
              <div className="teams">
                <div className="home">
                  <img src={item.homeLogoUrl} alt="home" />
                  <h2 className={item.homeName === "Raianos" ? "raianos" : ""}>
                    {item.homeName}
                  </h2>
                </div>
                <div className="details">
                  <h2 className={item.homeName === "Raianos" ? "raianos" : ""}>
                    {item.homeScore}
                  </h2>
                  <h3>-</h3>
                  <h2 className={item.awayName === "Raianos" ? "raianos" : ""}>
                    {item.awayScore}
                  </h2>
                </div>
                <div className="away">
                  <img src={item.awayLogoUrl} alt="away" />
                  <h2 className={item.awayName === "Raianos" ? "raianos" : ""}>
                    {item.awayName}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Results;
