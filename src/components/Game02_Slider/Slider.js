import React, { useEffect, useState } from "react";

import { Container } from 'react-bootstrap'
import { shuffle, isSolved, TILE_COUNT } from "./Game/helper/data"

import HeaderGame from "../HeaderGame/HeaderGame";
import Game from './Game/Game';
import Finish from './Finish/Finish';

const GAME_ROLES = [100, 200];
const GAME_NAME = "SLIDER"

const Slider = () => {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [moves, setMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isStarted, setIsStarted] = useState(false)

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }
  const handleStart = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const handleRestart = () => {
    shuffleTiles()
    setIsWin(false);
    setMoves(0);
  }

  useEffect(() => {
    setIsWin(isSolved(tiles))
  }, [setIsWin, tiles])

  return (
    <Container>
      <HeaderGame
        isStarted={isStarted}
        handleStart={handleStart}
        GAME_NAME={GAME_NAME}
        moves={moves}
        handleRestart={handleRestart}
        isWin={isWin}
        GAME_ROLES={GAME_ROLES}
      />
      <Game
        tiles={tiles}
        setTiles={setTiles}
        moves={moves}
        setMoves={setMoves}
        setIsWin={setIsWin}
        isStarted={isStarted}
        handleRestart={handleRestart}
      />
      <Finish
        moves={moves}
        isWin={isWin}
        isStarted={isStarted}
        GAME_ROLES={GAME_ROLES}
        handleRestart={handleRestart} />
    </Container >
  );
}

export default Slider;