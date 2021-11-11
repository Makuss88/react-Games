import React, { useState, useEffect } from 'react'

import Header from './Pages/Header';
import Figure from './Pages/Figure';
import Word from './Pages/Word';
import Popup from './Pages/Popup';
import Notification from './Pages/Notification';
import WrongLetters from './Pages/WrongLetters';
import Keyboards from './Pages/Keyboards';

import { WORDS, showNotification as show } from './Pages/helper';

import { Container } from 'react-bootstrap';

import './HangManStyled.css';

let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();

const Main = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);


  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * WORDS.length);
    selectedWord = WORDS[random].toLowerCase();
  }

  return (
    <Container className='container'>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      {/* <Keyboards setOneKey={setOneKey} selectedWord={selectedWord} /> */}
    </Container>
  )
}

export default Main
