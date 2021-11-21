import React from 'react'

const Letter = ({ letter, letterHandle, color }) => {

  return (
    <div className={`key ${color}`} onClick={() => letterHandle(letter)} key={letter}>
      {letter}
    </div>
  )
}

export default Letter;