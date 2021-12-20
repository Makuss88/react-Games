import React from 'react';

import { NavStyledRight, LinkElem } from './HeaderStyled';

const RightBar = ({ open }) => {

  return (
    <NavStyledRight open={open} variant="pills">
      <LinkElem to="/" exact  >HOME</LinkElem>
      <LinkElem to="/memo" >MEMO</LinkElem>
      <LinkElem to="/slider" >SLIDER</LinkElem>
      <LinkElem to="/hangman" >HANGMAN</LinkElem>
      <LinkElem to="/tictactoe">TIC_TAK_TOE</LinkElem>
    </NavStyledRight >
  )
}

export default RightBar;