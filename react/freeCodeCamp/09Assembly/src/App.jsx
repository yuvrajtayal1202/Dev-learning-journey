import React from "react";
import { languages } from "./languages";

function App() {
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  console.log(guessedLetters);
  function addGuessedletter(letter) {
    setGuessedLetters((prevLetters) =>(  
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    ))};


  const languageElements = languages.map((language, index) => {
    let styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span key={index} style={styles}>
        {language.name}
      </span>
    );
  });

  const [currentWord, setCurrentWord] = React.useState("React");
  const wordElements = currentWord.split("").map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElements = alphabets.split("").map((letter, index) => {
    return (
      <button onClick={() => addGuessedletter(letter)} key={index}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <>
      <main className="main">
        <header className="header">
          <h1>Assembly: Endgame </h1>
          <p>
            Guess the word within 8 attempts to keep the programming world safe
            from Assembly!
          </p>
        </header>

        <section className="game-status">
          <h2>You Win!</h2>
          <p>Well Done🎉</p>
        </section>

        <section className="language-chips">{languageElements}</section>

        <section className="word-display">{wordElements}</section>

        <section className="keyboard-display">{keyboardElements}</section>
        <section className="new-game-btn">
          <button>New Game</button>
        </section>
      </main>
    </>
  );
}

export default App;
