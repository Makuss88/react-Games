import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header from './Pages/Header';
import Game from './Pages/Game';
import Popup from './Pages/Popup';


const GAMES_ROLES = [3, 5]

const TicTacToe = () => {

  const [square, setSquare] = useState(Array(9).fill(null))
  const [moves, setMoves] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const [whoWon, setWhoWon] = useState('')

  const handleRestart = () => {
    setSquare(Array(9).fill(null))
    setMoves(0)
    setIsWin(false)
    setWhoWon('')
  }

  return (
    <Container>
      <Header
        moves={moves}
        handleRestart={handleRestart}
        isWin={isWin}
        GAMES_ROLES={GAMES_ROLES}
      />
      <Game
        square={square}
        setSquare={setSquare}
        moves={moves}
        setMoves={setMoves}
        setIsWin={setIsWin}
        setWhoWon={setWhoWon}
      />
      <Popup
        whoWon={whoWon}
        handleRestart={handleRestart}
        isWin={isWin}
      />
    </Container>
  )
}

export default TicTacToe
