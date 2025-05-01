import React from "react";
import clsx from "clsx";
import { languages } from "./languages";

function App() {

  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function addGuessedletter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

  //   if(guessedLetters.includes(letter) && !currentWord.includes(letter)){
  // setwrongGuessCount(prevCount => prevCount +1)
  // console.log(wrongGuessCount)
  // }

  }
  
  const [currentWord, setCurrentWord] = React.useState("react");
  const wordElements = currentWord.split("").map((letter, index) => {
    return <span key={index}>{guessedLetters.includes(letter)?letter.toUpperCase():""}</span>;
  });
  const wrongGuessCount  = guessedLetters.filter(letter => !currentWord.includes(letter));

  const languageElements = languages.map((language, index) => {
    let styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    const classL = clsx({
      lost: index < wrongGuessCount.length
    });

    console.log(classL)
    return (
      <span key={index} style={styles} className={classL}>
        {language.name}
      </span>
    );
  });


  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElements = alphabets.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={className}
        onClick={() => addGuessedletter(letter)}
        key={index}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
console.log(wrongGuessCount.length)
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
