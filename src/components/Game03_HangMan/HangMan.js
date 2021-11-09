import React, { useEffect, useState } from 'react'

import Header from './Pages/Header';
import Figure from './Pages/Figure';
import Word from './Pages/Word';
import WrongLetter from './Pages/WrongLetter';
import Keyboards from './Pages/Keyboards';

import { WORDS } from './Pages/helper';

import { Container, Row } from 'react-bootstrap';

import './HangManStyled.css';


// const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];

const Main = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <Container className='container'>
      <Header />

      <Figure />
      {/* <WrongLetter /> */}
      {console.log(selectedWord)}
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />

      <Keyboards word={selectedWord} />
    </Container>
  )
}

export default Main
