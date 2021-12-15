import React, { useState } from "react";

import { Container } from 'react-bootstrap'

import HeaderGame from "../HeaderGame/HeaderGame";
import Game from './Game/Game';
import Finish from './Finish/Finish';

import { WORDS } from './Game/Pages/helper';

const GAME_ROLES = [100, 200];
const GAME_NAME = "HANGMAN"

const HangMan = () => {

  const [moves, setMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isStarted, setIsStarted] = useState(false)
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [word, setWord] = useState('')

  const handleStart = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase());
    setIsStarted(true)
  }

  const handleRestart = () => {
    setCorrectLetters([]);
    setWrongLetters([]);
    setIsStarted(true);
    setIsWin(false);
    setMoves(0);
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase());
  }


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
        word={word}
        moves={moves}
        setMoves={setMoves}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
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

export default HangMan;