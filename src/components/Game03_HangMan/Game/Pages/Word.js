import React from 'react';

const Word = ({ word, correctLetters }) => {
  return (
    <div className="word">
      <h1>MAGIC IT'S WORD!</h1>
      <div className="word-change">
        {
          word.split('').map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {correctLetters.includes(letter) ? letter.toUpperCase() : ''}
              </span>
            )
          })
        }
      </div>
    </div >
  )
}

export default Word