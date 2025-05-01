import React, { useState, useRef, useEffect } from "react";
import Die from "./die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(generateNewDice());
  const buttonRef = useRef(null);

  // ✅ Corrected gameWon logic
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  // ✅ Generates new dice array
  function generateNewDice() {
    return new Array(10).fill(0).map(() => ({
      // value: 1,
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  // ✅ Toggles die's isHeld status
  function handleHold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  // ✅ Resets game if won, else rolls unheld dice
  function handleRoll() {
    if (gameWon) {
      setDice(generateNewDice());
    } else {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  // ✅ Renders dice
  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      handleHold={() => handleHold(dieObj.id)}
    />
  ));


  useState(function(){
    if(gameWon){
      buttonRef.current.focus()
    }
  }, [gameWon])
  return (
    
    <main className="main">
      {gameWon && <Confetti/>}
      <div className="heading-con">

      <span>Tenzies</span>
      <p>Roll until all dice are same,click each die to freeze it at its current value between the role</p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button className="roll" onClick={handleRoll} 
      ref={buttonRef}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
