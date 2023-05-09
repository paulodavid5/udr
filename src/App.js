import { useCallback, useEffect, useState } from "react";
import { client } from "./client";
import Header from "./components/header/Header";
import video from "./assets/videos/videoRaianos.mp4";
import NextGame from "./components/nextgame/NextGame";
import PrevGame from "./components/prevgame/PrevGame";

function App() {
  const [infogames, setInfogames] = useState([]);

  const reArrangeData = useCallback((rawData) => {
    const cleanData = rawData.map((data) => {
      const { classification, squadfaces, teamsLogos } = data.fields;

      // Previous game
      const prevgameHome = classification.prevgame.home.name;
      const prevgameHomeScore = classification.prevgame.home.score;
      const prevgameAway = classification.prevgame.away.name;
      const prevgameAwayScore = classification.prevgame.away.score;
      const prevgameHomeLogo = teamsLogos.find(
        (item) => item.fields.title === prevgameHome.toLowerCase()
      );
      const prevgameAwayLogo = teamsLogos.find(
        (item) => item.fields.title === prevgameAway.toLowerCase()
      );
      let HomefileUrl = null;
      if (prevgameHomeLogo) {
        HomefileUrl = prevgameHomeLogo.fields.file.url;
      }
      let AwayfileUrl = null;
      if (prevgameAwayLogo) {
        AwayfileUrl = prevgameAwayLogo.fields.file.url;
      }

      // // NEXT GAME
      const nextgameTeam = classification.nextgame.name;
      const nextgamePlace = classification.nextgame.place;
      const nextgameDate = classification.nextgame.date;
      const nextgameTime = classification.nextgame.time;
      const nextgameTeamLogo = teamsLogos.find(
        (item) => item.fields.title === nextgameTeam.toLowerCase()
      );
      let nextgameLogoUrl = null;
      if (nextgameTeamLogo) {
        nextgameLogoUrl = nextgameTeamLogo.fields.file.url;
      }

      const updPrevGame = {
        prevgameHome,
        prevgameHomeScore,
        prevgameAway,
        prevgameAwayScore,
        HomefileUrl,
        AwayfileUrl,
        nextgameTeam,
        nextgamePlace,
        nextgameDate,
        nextgameTime,
        nextgameLogoUrl,
      };

      // const updNextGame = {
      // nextgameTeam,
      // nextgamePlace,
      // nextgameDate,
      // nextgameTime,
      // nextgameLogoUrl,
      // };

      return updPrevGame;
    });

    setInfogames(cleanData);
  }, []);

  const getNextGame = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "raianos" });
      const responseData = response.items;
      // console.log(responseData);
      if (responseData) {
        reArrangeData(responseData);
      } else {
        setInfogames([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [reArrangeData]);

  useEffect(() => {
    getNextGame();
  }, [getNextGame]);

  // console.log(prevgame);

  return (
    <div className="App">
      <Header />
      <section className="landing">
        <div id="background-video">
          <video loop autoPlay muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="Home">
          {infogames.map((item, idx) => {
            const {
              prevgameHome,
              prevgameHomeScore,
              prevgameAway,
              prevgameAwayScore,
              HomefileUrl,
              AwayfileUrl,
            } = item;
            return (
              <PrevGame
                key={idx}
                prevgameHome={prevgameHome}
                prevgameHomeScore={prevgameHomeScore}
                prevgameAway={prevgameAway}
                prevgameAwayScore={prevgameAwayScore}
                HomefileUrl={HomefileUrl}
                AwayfileUrl={AwayfileUrl}
              />
            );
          })}
          {infogames.map((item, idx) => {
            const {
              nextgameTeam,
              nextgamePlace,
              nextgameDate,
              nextgameTime,
              nextgameLogoUrl,
            } = item;
            return (
              <NextGame
                key={idx}
                nextgameTeam={nextgameTeam}
                nextgamePlace={nextgamePlace}
                nextgameDate={nextgameDate}
                nextgameTime={nextgameTime}
                nextgameLogoUrl={nextgameLogoUrl}
              />
            );
          })}
        </div>
      </section>
      <section className="About"></section>
    </div>
  );
}

export default App;
