import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      <h1>ZGADNIJ HASELKO!!</h1>
      <div className="word-change">
        {
          selectedWord.split('').map((letter, i) => {
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