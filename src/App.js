import Header from "./components/header/Header";
import video from "./assets/videos/videoRaianos.mp4";
import NextGame from "./components/nextgame/NextGame";
import PrevGame from "./components/prevgame/PrevGame";

function App() {
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
          <PrevGame />
          <NextGame />
        </div>
      </section>
      <section className="About"></section>
    </div>
  );
}

export default App;
