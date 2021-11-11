import React, { useState } from 'react'

import { ALPHABET } from './helper';

const Keyboards = (props) => {

  const { selectedWord, setOneKey } = props;
  const [letters, setLetters] = useState([]);
  const [positionLetter, setPositionLetter] = useState({ tags: [] });
  const [wrongLetter, setWrongLetter] = useState(0)

  let flag = true;

  const checkHandler = (key) => {

    let code = key.target.innerHTML.charCodeAt(0);
    setOneKey(code);
    const haslo = selectedWord.toUpperCase();

    let counter = 0;
    for (let i = 0; i < haslo.length; i++) {
      let pos = ALPHABET.indexOf(key.target.innerHTML);
      let styleText = document.getElementById(pos).style
      if (key.target.innerHTML === haslo[i]) {
        styleText.background = "green";
        flag = false;
        setPositionLetter(prev => ({ ...prev, tags: prev.tags.concat(i) }));
        setLetters([...letters, counter])
        setWrongLetter(wrongLetter);
      } else if (flag) {
        styleText.background = "red";
        counter++;
        setWrongLetter(wrongLetter + 1);
        flag = true;
      }
      styleText.pointerEvents = "none";
    }
  }


  return (
    <div>
      <div className="container-keyboard">
        {selectedWord.toUpperCase().split('').map((letter, index) => <div className="letter" key={index}> {letter} </div>)}
        <div style={{ paddingLeft: '20px' }}>{
          wrongLetter > 6 ?
            "=> Przegrana" :
            positionLetter.tags.length === selectedWord.length ?
              "=> Wygrales" :
              ''}
        </div>
      </div>
      <div className="keyboard">
        {ALPHABET.map((letter, index) => <div className="key" key={index} id={index} onClick={(letter) => checkHandler(letter)}>{letter}</div>)}
      </div>
    </div>
  )
}

export default Keyboards;