import React, { useRef } from 'react'

import { ALPHABET } from './helper';

const Keyboards = ({ selectedWord, setOneKey, styleKey, setStyleKey }) => {

  let flag = true;;
  const dupa = useRef(null)

  const checkHandler = (key) => {

    let styleText = document.getElementById(key.target.id).style;
    let smallLetter = key.target.innerHTML.toLowerCase();
    setOneKey(smallLetter);

    console.log('id ', styleText)

    for (let i = 0; i < selectedWord.length; i++) {
      if (smallLetter === selectedWord[i]) {
        // setStyleKey("key green");
        styleText.background = "green";
        flag = false;
      } else if (flag) {
        // setStyleKey("key red");
        styleText.background = "red";
        flag = true;
      }
      styleText.pointerEvents = "none";
    }
  }

  return (
    <div className="keyboard">
      {ALPHABET.map((letter, index) => <div ref={dupa} className={styleKey} key={letter} id={index} onClick={(letter) => checkHandler(letter)}>{letter}</div>)}
    </div>
  )
}

export default Keyboards;