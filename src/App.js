import { useCallback, useEffect, useState } from "react";
import { client } from "./client";
import { useLocation } from "react-router-dom";

import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import video from "./assets/videos/videoRaianos.mp4";
import NextGame from "./components/nextgame/NextGame";
import PrevGame from "./components/prevgame/PrevGame";
import Classification from "./components/classification/Classification";
import Results from "./components/results/Results";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [infogames, setInfogames] = useState([]);
  const { scrollPosition } = location.state ?? {};
  const [yPosition, setYPosition] = useState(null);

  useEffect(() => {
    if (scrollPosition) {
      console.log(scrollPosition);
      setYPosition(scrollPosition);
      window.scrollTo(0, yPosition);
      setYPosition(0);
    }
  }, [scrollPosition, yPosition]);

  // const reArrangeData = (rawData) => {
  const reArrangeData = useCallback((rawData) => {
    const cleanData = rawData.map((data) => {
      const { classification, teamsLogos } = data.fields;

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
      const nextgameStadium = classification.classification.find(
        (item) => item.name === nextgameTeam
      );
      let nextgameStadiumName = null;
      if (nextgameStadium) {
        if (nextgamePlace === "Casa") {
          nextgameStadiumName = "Campo do Areal";
        } else {
          nextgameStadiumName = nextgameStadium.stadium;
        }
      }

      const nextgameTeamLogo = teamsLogos.find(
        (item) => item.fields.title === nextgameTeam.toLowerCase()
      );
      let nextgameLogoUrl = null;
      if (nextgameTeamLogo) {
        nextgameLogoUrl = nextgameTeamLogo.fields.file.url;
      }

      // classification
      const classificationTeams = classification.classification.map(
        ({ name, points, position }) => ({ name, points, position })
      );

      const classificationTeamsSort = classificationTeams.sort((a, b) => {
        if (a.points === b.points) {
          return a.position - b.position;
        } else {
          return b.points - a.points;
        }
      });

      // players

      const defenderPlayers = classification.squad.defender.map((player) => ({
        name: player.name,
        number: player.number,
        img: player.img,
        position: player.position,
        details: player?.details,
      }));

      const forwardPlayers = classification.squad.forward.map((player) => ({
        name: player.name,
        number: player.number,
        img: player.img,
        position: player.position,
        details: player?.details,
      }));
      const goalkeeperPlayers = classification.squad.goalkeeper.map(
        (player) => ({
          name: player.name,
          number: player.number,
          img: player.img,
          position: player.position,
          details: player?.details,
        })
      );
      const midfielderPlayers = classification.squad.midfielder.map(
        (player) => ({
          name: player.name,
          number: player.number,
          img: player.img,
          position: player.position,
          details: player?.details,
        })
      );

      const allPlayers = [
        ...goalkeeperPlayers,
        ...defenderPlayers,
        ...midfielderPlayers,
        ...forwardPlayers,
      ];

      allPlayers.sort((a, b) => {
        const positions = ["goalkeeper", "defender", "midfielder", "forward"];
        return positions.indexOf(a.position) - positions.indexOf(b.position);
      });

      // results of games

      const resultNext = classification.results.find(
        ({ home }) => home.score === "-"
      );
      const resultNextGame = resultNext ? resultNext.game : null;

      const resultsGames = classification.results.map(
        ({ game, home, away, date }) => {
          const homeLogo = teamsLogos.find(
            (item) => item.fields.title === home.name.toLowerCase()
          );
          const awayLogo = teamsLogos.find(
            (item) => item.fields.title === away.name.toLowerCase()
          );

          return {
            game,
            date,
            resultNextGame,
            homeName: home.name,
            homeScore: home.score,
            homeLogoUrl: homeLogo ? homeLogo.fields.file.url : null,
            awayName: away.name,
            awayScore: away.score,
            awayLogoUrl: awayLogo ? awayLogo.fields.file.url : null,
          };
        }
      );

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
        nextgameStadiumName,
        classificationTeamsSort,
        resultsGames,
        resultNextGame,
        allPlayers,
      };

      return updPrevGame;
    });

    setInfogames(cleanData);
  }, []);

  const getNextGame = useCallback(async () => {
    try {
      setIsPageLoading(true);

      const response = await client.getEntries({ content_type: "raianos" });
      const responseData = response.items;

      if (responseData) {
        reArrangeData(responseData);
        console.log(responseData);
      } else {
        setInfogames([]);
      }

      setIsPageLoading(false);
    } catch (error) {
      console.log(error);
      setIsPageLoading(false);
    }
  }, [reArrangeData]);

  useEffect(() => {
    getNextGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {isPageLoading ? (
        <Loader />
      ) : (
        <div>
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
                  nextgameStadiumName,
                } = item;
                return (
                  <NextGame
                    key={idx}
                    nextgameTeam={nextgameTeam}
                    nextgamePlace={nextgamePlace}
                    nextgameDate={nextgameDate}
                    nextgameTime={nextgameTime}
                    nextgameLogoUrl={nextgameLogoUrl}
                    nextgameStadiumName={nextgameStadiumName}
                  />
                );
              })}
            </div>
          </section>
          <section className="classification">
            {infogames.map((item, idx) => {
              const { classificationTeamsSort, resultsGames, resultNextGame } =
                item;
              return (
                <div className="classification-bg" key={idx}>
                  <Classification
                    key={idx}
                    classificationTeamsSort={classificationTeamsSort}
                  />
                  <Results
                    resultsGames={resultsGames}
                    resultNextGame={resultNextGame}
                  />
                </div>
              );
            })}
          </section>
          <section className="team">
            {infogames.map((item, index) => {
              const { allPlayers } = item;
              return <Team key={index} allPlayers={allPlayers} />;
            })}
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
