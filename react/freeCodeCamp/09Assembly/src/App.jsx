import React from 'react'
import {languages}  from "./languages";

function App() {
  const languageElements = languages.map(language => {
   let  styles ={
      backgroundColor: language.backgroundColor,
      color: language.color
    }

    return(<span style={styles}>{language.name}</span>)
  })
console.log(languages)
  return (
    <>
     <main className="main">
      <header className="header">
        <h1>Assembly: Endgame </h1>
        <p>Guess the word within 8 attempts to keep the 
          programming world safe from Assembly!
        </p>
      </header>

     <section className="game-status">
      <h2>
        You Win!
      </h2>
      <p>Well Done🎉</p>
     </section>

     <section className="language-chips">
      {languageElements}
     </section>
     </main>
    </>
  )
}

export default App
