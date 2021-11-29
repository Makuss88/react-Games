import React, {useEffect, useState} from 'react'

const Header = ({isWin, }) => {

  const [star, setStar] = useState('');


  useEffect(() => {



    if (isWi) {
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

return (
  <h1> HANGMAN </h1>
)
}

export default Header
