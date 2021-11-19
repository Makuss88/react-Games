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
  const [oneKey, setOneKey] = useState('');
  const [color, setColor] = useState('')



  const letterHandle = useCallback((key) => {
    let letter = key.toLowerCase()
    console.log(letter)

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
      }
      // setColor('green')
      return;
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(currentLetters => [...currentLetters, letter]);
      }
      // setColor('red')
      return;
    }
  }, [correctLetters, wrongLetters]);

  letterHandle(oneKey);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        letterHandle(letter);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable, letterHandle]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setOneKey('');

    const random = Math.floor(Math.random() * WORDS.length);
    selectedWord = WORDS[random].toLowerCase();
  }

  return (
    <Container className='container'>
      <Header />
      <Row>
        <Col sm={4}><Figure wrongLetters={wrongLetters} /></Col>
        <Col sm={8}><Word selectedWord={selectedWord} correctLetters={correctLetters} /></Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="keyboard">
            {ALPHABET.map((letter) =>
              <Letter
                letter={letter}
                letterHandle={letterHandle}
                key={letter}
                color={color}
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
      {console.log(selectedWord)}
      <Button variant="warning" onClick={playAgain}>One Again?? Restart??</Button>
    </Container>
  )
}

export default Main
