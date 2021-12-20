import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import HeaderGame from '../HeaderGame/HeaderGame';
import Finish from './Finish/Finish';
import Game from './Pages/Game';
import Popup from './Pages/Popup';

const GAME_NAME = "TIC TAC TOE"
const GAME_ROLES = [3, 5]

const TicTacToe = () => {

  const [square, setSquare] = useState(Array(9).fill(null))
  const [moves, setMoves] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const [whoWon, setWhoWon] = useState('')
  const [isStarted, setIsStarted] = useState(false)

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleRestart = () => {
    setSquare(Array(9).fill(null))
    setMoves(0)
    setIsWin(false)
    setWhoWon('')
  }

  return (
    <Container>
      <HeaderGame
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        GAME_NAME={GAME_NAME}
        moves={moves}
        handleStart={handleStart}
        handleRestart={handleRestart}
        isWin={isWin}
        GAME_ROLES={GAME_ROLES}
      />
      <Game
        square={square}
        setSquare={setSquare}
        moves={moves}
        setMoves={setMoves}
        setIsWin={setIsWin}
        whoWon={whoWon}
        setWhoWon={setWhoWon}
      />
      {whoWon === "Wygrał: X" &&
        <Finish
          moves={moves}
          isWin={isWin}
          isStarted={isStarted}
          GAME_ROLES={GAME_ROLES}
          handleRestart={handleRestart}
        />
      }
      {whoWon === "Wygrał: O" || whoWon === "REMISIK" ? <Popup whoWon={whoWon} handleRestart={handleRestart} /> : null}
    </Container>
  )
}

export default TicTacToe
