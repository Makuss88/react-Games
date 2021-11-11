import React, { useEffect } from 'react'
import { checkWin } from './helper'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {

  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  console.log(checkWin(correctLetters, wrongLetters, selectedWord))
  
  useEffect(() => {
    checkWin(correctLetters, wrongLetters, selectedWord)
  })

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "HURRAY!! YOU WON! :)"
    playable = false;
  } else if (checkWin(correctLetters, correctLetters, selectedWord) === "lose") {
    finalMessage = "OMG, are you looser... :/"
    finalMessageRevealWord = `This magicial word was: ${selectedWord} `;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable)
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
