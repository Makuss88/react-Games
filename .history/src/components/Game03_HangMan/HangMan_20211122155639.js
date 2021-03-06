import React, { useState, useEffect, useCallback } from 'react'

import { Container, Button, Row, Col } from 'react-bootstrap';

import Header from './Pages/Header';
import Figure from './Pages/Figure';
import Word from './Pages/Word';
import Popup from './Pages/Popup';
import WrongLetters from './Pages/WrongLetters';
import Letter from './Pages/Letter';

import { WORDS, ALPHABET } from './Pages/helper';

import './HangManStyled.css';

let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();

const Main = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const letterHandle = useCallback((key) => {
    let letter = key.toLowerCase()

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
      }
      return;
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(currentLetters => [...currentLetters, letter]);
      }
      return;
    }
  }, [correctLetters, wrongLetters]);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        letterHandle(key);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable, letterHandle]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    // const random = Math.floor(Math.random() * WORDS.length);
    selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();
  }

  return (
    <Container className='container'>
      <Header />
      <Row>
        <Col sm={4}><Figure wrongLetters={wrongLetters} /></Col>
        <Col sm={8}>
          <Word
            selectedWord={selectedWord}
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
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Button
        variant="warning"
        onClick={playAgain}
      >
        One Again?? Restart??
      </Button>
    </Container >
  )
}

export default Main
