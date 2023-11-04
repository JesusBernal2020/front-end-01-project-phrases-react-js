/* eslint-disable react/jsx-no-target-blank */

import { useState } from "react";
import "./App.css";
import dbSpace from "./db/space.json";
import { getRamdom } from "./utils/random";
import Phrase from "./components/Phrase";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {
  const bgimgs = ["bg1", "bg2", "bg3", "bg4"];
  const bgPlanets = ["bt1", "bt2", "bt3", "bt4"];

  const [phrase, setPhrase] = useState(getRamdom(dbSpace));
  const [imageBg, setImageBg] = useState(getRamdom(bgimgs));
  const [planetBg, setPlanetBg] = useState(getRamdom(bgPlanets));

  const handleChangePhrase = () => {
    setPhrase(getRamdom(dbSpace));
    setImageBg(getRamdom(bgimgs));
    setPlanetBg(getRamdom(bgPlanets));
  };

  console.log(phrase);
  return (
    <main className={`app ${imageBg}`}>
      <section className="app__container">
        <Title />
        <Phrase
          handleChangePhrase={handleChangePhrase}
          phrases={phrase.phrase}
        />
      </section>
      <Footer author={phrase.author} planetBg={planetBg} />
    </main>
  );
}

export default App;
