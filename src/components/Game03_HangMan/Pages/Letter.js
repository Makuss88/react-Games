import React from 'react'

const Letter = ({ letter, letterHandle, correctLetters, wrongLetters }) => {

  let colorStyle = ''

  if (correctLetters.includes(letter.toLowerCase())) {
    colorStyle = "green";
  } else if (wrongLetters.includes(letter.toLowerCase())) {
    colorStyle = "red";
  }

  return (
    <div className={`key ${colorStyle}`} onClick={() => letterHandle(letter)} key={letter}>
      {letter}
    </div>
  )
}

export default Letter;