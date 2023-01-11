import "./App.css";
import { Icon } from "@iconify/react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Flex-main">
          <div className="Screen-mobile">
            <img
              className="Image-music"
              src="/music image.png"
              alt="imagem musica"
            />
            <div className="Music-information">
              <h1 className="Music-name">Vintage Music</h1>
              <h2 className="Singer-name">Vintage Music</h2>
            </div>
            <div className="Player">
              <Icon width="44px" icon="subway:previous-1" />
              <Icon width="54px" icon="ic:round-play-arrow" />
              <Icon width="44px" icon="subway:next-1" />
            </div>
            <div className="Line">
              <div className="Bar" />
            </div>
            <div className="Flex-Time">
              <h3 className="Music-Time">2:30</h3>
              <h3 className="Music-Time">1:15</h3>
            </div>
          </div>
          <div>
            <div className="Screen-mobile-notification">
              <div className="Flex-content">
                <img
                  className="Image-music-small"
                  src="/music image.png"
                  alt="imagem musica"
                />
                <div>
                  <h1 className="Music-name">Vintage Music</h1>
                  <h2 className="Singer-name">Vintage Music</h2>
                </div>
              </div>
              <div className="Player">
                <Icon width="44px" icon="subway:previous-1" />
                <Icon width="54px" icon="ic:round-play-arrow" />
                <Icon width="44px" icon="subway:next-1" />
              </div>
              <div className="Line">
                <div className="Bar" />
              </div>
              <div className="Flex-Time">
                <h3 className="Music-Time">2:30</h3>
                <h3 className="Music-Time">1:15</h3>
              </div>
            </div>
            <div className="Screen-mobile-notification">
              <div className="Flex-content">
                <img
                  className="Image-music-small"
                  src="/music image.png"
                  alt="imagem musica"
                />
                <div>
                  <h1 className="Music-name">Vintage Music</h1>
                  <h2 className="Singer-name">Vintage Music</h2>
                </div>
              </div>
              <div className="Player">
                <Icon width="44px" icon="subway:previous-1" />
                <Icon width="54px" icon="ic:round-play-arrow" />
                <Icon width="44px" icon="subway:next-1" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
