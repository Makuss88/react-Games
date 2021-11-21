import React, { useEffect } from 'react'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {

  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  let changeWordToSet = new Set(selectedWord);

  if (changeWordToSet.size === correctLetters.length) {
    finalMessage = "HURRAY!! YOU WON! :)"
    playable = false;
  } else if (wrongLetters.length >= 7) {
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
