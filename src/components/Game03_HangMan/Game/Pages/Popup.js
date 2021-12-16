import React from 'react';

const Popup = ({ word, handleRestart }) => {

  return (
    <div className="popup-container" style={word !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2> Sorry, you loose...</h2>
        <h2>My word was: {word}</h2>
        <button onClick={handleRestart}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup