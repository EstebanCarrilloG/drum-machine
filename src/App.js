import sounds from "./data/sounds";
import "./App.css";
import { useState } from "react";

function App() {
  const [displayName, setDisplayName] = useState("");
  const playSound = (key, name) => {
    setDisplayName(name);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  window.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();

    if (
      key === "Q" ||
      key === "W" ||
      key === "E" ||
      key === "A" ||
      key === "S" ||
      key === "D" ||
      key === "Z" ||
      key === "X" ||
      key === "C"
    ) {
      const audio = document.getElementById(key);

      audio.parentElement.classList.add("active");
      setDisplayName(audio.attributes.name.value);
      setTimeout(() => {
        audio.parentElement.classList.remove("active");
      }, 200);
      audio.currentTime = 0;
      audio.play();
    }

    return;
  });

  return (
    <div className="App">
      <main>
        <div id="drum-machine">
          <h1>Drum Machine</h1>
          <div className="pad-bank-and-display">
            <div id="display">{displayName}</div>

            <div className="pad-bank">
              {sounds.map((sound) => (
                <div
                  key={sound.name}
                  className="drum-pad"
                  id={sound.name}
                  onClick={() => playSound(sound.key, sound.name)}
                >
                  <audio
                    className="clip"
                    name={sound.name}
                    id={sound.key}
                    src={sound.url}
                  ></audio>
                  {sound.key}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
