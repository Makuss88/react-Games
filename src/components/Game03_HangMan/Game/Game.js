import React, { useEffect, useCallback } from 'react'

import { Row, Col } from 'react-bootstrap';

import Figure from './Pages/Figure';
import Word from './Pages/Word';
import WrongLetters from './Pages/WrongLetters';
import Letter from './Pages/Letter';

import { ALPHABET } from './Pages/helper';
import '../HangManStyled.css';

const Game = ({
  setMoves,
  word,
  isStarted,
  correctLetters,
  setCorrectLetters,
  wrongLetters,
  setWrongLetters,
  setIsWrongWin,
  setIsWin,
}) => {

  const letterHandle = useCallback((key) => {
    let letter = key.toLowerCase()

    if (word.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
      }
      return;
    } else {
      if (!wrongLetters.includes(letter)) {
        setMoves((moves) => moves + 1);
        setWrongLetters(currentLetters => [...currentLetters, letter]);
      }
      return;
    }
  }, [correctLetters, wrongLetters, setWrongLetters, setCorrectLetters, word, setMoves]);

  const checkWin = (correct, word) => {
    let status = true;

    word.split('').forEach(letter => {
      if (!correct.includes(letter)) {
        status = false;
      }
    });

    return status
  }


  useEffect(() => {
    if (wrongLetters.length === 7) {
      setIsWrongWin(true)
    }
    if (isStarted) {
      setIsWin(checkWin(correctLetters, word));
    }

    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (isStarted && keyCode >= 65 && keyCode <= 90) {
        setMoves((moves) => moves + 1);
        letterHandle(key);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, isStarted, letterHandle, setMoves, setIsWrongWin, word, setIsWin]);

  return (
    <>
      <Row>
        <Col sm={4}><Figure wrongLetters={wrongLetters} /></Col>
        <Col sm={8}>
          <Word
            word={word}
            correctLetters={correctLetters}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="keyboard">
            {ALPHABET.map((letter, index) =>
              <Letter
                key={index}
                letter={letter}
                letterHandle={letterHandle}
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
              />
            )}
          </div>
        </Col>
        <Col sm={8}> <WrongLetters wrongLetters={wrongLetters} /> </Col>
      </Row>
    </>
  )
}

export default Game;
