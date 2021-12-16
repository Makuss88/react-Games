import React, { useState } from "react";

import { Container } from 'react-bootstrap'

import HeaderGame from "../HeaderGame/HeaderGame";
import Game from './Game/Game';
import Finish from './Finish/Finish';
import Popup from './Game/Pages/Popup.js'

import { WORDS } from './Game/Pages/helper';

const GAME_ROLES = [3, 5];
const GAME_NAME = "HANGMAN"

const HangMan = () => {

  const [moves, setMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isStarted, setIsStarted] = useState(false)
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [word, setWord] = useState('')
  const [isWrongWin, setIsWrongWin] = useState(false)

  const handleRestart = () => {
    setMoves(0);
    setCorrectLetters([]);
    setWrongLetters([]);
    setIsStarted(true);
    setIsWin(false);
    setIsWrongWin(false);
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase());
  }

  return (
    <Container>
      <HeaderGame
        isStarted={isStarted}
        handleStart={handleRestart}
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
        setIsWrongWin={setIsWrongWin}
      />
      <Finish
        moves={wrongLetters.length}
        isWin={isWin}
        isStarted={isStarted}
        GAME_ROLES={GAME_ROLES}
        handleRestart={handleRestart}
      />
      {isWrongWin ? <Popup word={word} handleRestart={handleRestart} /> : null}
    </Container >
  );
}

export default HangMan;