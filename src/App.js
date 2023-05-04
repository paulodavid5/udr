import Header from "./components/header/Header";
import video from "./assets/videos/videoRaianos.mp4";
// import jogador from "./assets/img/Intersect.png";
import NextGame from "./components/nextgame/NextGame";

function App() {
  return (
    <div className="App">
      <section className="landing">
        <Header />
        <div id="background-video">
          <video loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        {/* <div id="background-image">
        <img src={jogador} alt="img" />
      </div> */}
        <NextGame />
      </section>
      <section className="second"></section>
    </div>
  );
}

export default App;
