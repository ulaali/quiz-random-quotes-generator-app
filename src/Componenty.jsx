import { useState } from "react";

export default function Componenty() {
  let quots = [
    "joey doesnt share food",
    "boyfriend and girlfriend are gonna come and go but friendship is for life",
    "you will never know unless you walk in my shoes",
    "cream soda (google it)",
    "i wil never worry about nothing",
  ];
  let [quot, setQuot] = useState(quots[0]);

  return (
    <div className="generator">
      <h1>Click the button to randomly generate quots</h1>

      <button
        onClick={() => {
          let qq = Math.floor(Math.random() * quots.length);
          setQuot(quots[qq]);
        }}
      >
        {quot}
      </button>
    </div>
  );
}
