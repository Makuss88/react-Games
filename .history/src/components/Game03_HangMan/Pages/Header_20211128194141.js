import React from 'react'

const Header = () => {

useEffect(() => {
  if (points === 9) {
    if (moves <= 17) {
      setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
    } else if (moves <= 22) {
      setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
    } else {
      setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
    }
  } else {
    setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
  }
}, [points, moves, iconGood, iconBad])
}, [input])


  return (
    <h1> HANGMAN </h1>
  )
}

export default Header
