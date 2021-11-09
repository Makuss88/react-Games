import React, { useState } from 'react'

import { ALPHABET } from './helper';

const Keyboards = (props) => {

  const { word } = props;
  // const word = "AADUDPA";
  const [letters, setLetters] = useState([]);
  const [positionLetter, setPositionLetter] = useState({ tags: [] });
  const [wrongLetter, setWrongLetter] = useState(0)
  let flag = true;


  const checkHandler = (key) => {

    let code = key.target.innerHTML.charCodeAt(0);
    console.log(code)

    const haslo = word.toUpperCase();
    let counter = 0;
    for (let i = 0; i < haslo.length; i++) {
      let pos = ALPHABET.indexOf(key.target.innerHTML);
      if (key.target.innerHTML === haslo[i]) {
        document.getElementById(pos).style.background = "green";
        flag = false;
        setPositionLetter(prev => ({ ...prev, tags: prev.tags.concat(i) }));
        setLetters([...letters, counter])
        setWrongLetter(wrongLetter);
      } else if (flag) {
        document.getElementById(pos).style.background = "red";
        counter++;
        setWrongLetter(wrongLetter + 1);
        flag = true;
      }
      document.getElementById(pos).style.pointerEvents = "none";
    }
  }

  const startGame = () => {
    console.log('haha');
    window.location.reload();
    setWrongLetter(0);
  }

  return (
    <div>
      <div className="container-keyboard">
        {word.toUpperCase().split('').map((letter) => <div className="letter"> {letter} </div>)}
        <div style={{ paddingLeft: '20px' }}>{
          wrongLetter > 6 ?
            "=> Przegrana" :
            positionLetter.tags.length === word.length ?
              "=> Wygrales" :
              ''}
        </div>
      </div>
      <div className="keyboard">
        {ALPHABET.map((letter, index) => <div className="key" key={index} id={index} onClick={(letter) => checkHandler(letter)}>{letter}</div>)}
      </div>
      <input type="button" value="Odśwież" onClick={startGame} />

    </div>
  )
}

export default Keyboards;