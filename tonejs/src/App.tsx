import "./App.css";

import * as Tone from "tone";
import * as abcjs from "abcjs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    abcjs.renderAbc("abc", "X:1\nT:Simple scale\nK:C\nCDEFGABcdefgab", {});
  }, []);
  const play = () => {
    const sampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    Tone.loaded().then(() => {
      const now = Tone.now();
      const chords = [
        ["E4", "G4", "B4"], // Em
        ["C4", "E4", "G4"], // C
        ["C4", "E4", "G4"], // C
        ["A4", "C5", "E5"], // Am
        ["F4", "A4", "C5"], // F
        ["G4", "B4", "D5"], // G
        ["C4", "E4", "G4"], // C
        ["D#4", "F#4", "A4"], // Dm
        ["B4", "D5", "F5"], // Bdim
      ];

      // Each chord will be played for 1.5 seconds with 0.5 seconds interval
      chords.forEach((chord, index) => {
        sampler.triggerAttackRelease(chord, 1.5, now + index * 2);
      });
    });
  };

  return (
    <>
      <button onClick={play}>再生</button>
      <div id="abc"></div>
    </>
  );
}

export default App;
