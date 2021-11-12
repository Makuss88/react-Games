
import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-container">
      <div>
        <p>Wrong letters:</p>
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters;