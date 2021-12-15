import React from "react";
import { Button } from "react-bootstrap";

import { STAR_COMPONENT } from "../../assets/helper";

import { Text, SubHeader, Move } from './HeaderGameStyled.js';

const HeaderGame = ({ moves, handleRestart, handleStart, isWin, GAME_ROLES, GAME_NAME, isStarted, }) => {

  return (
    <>
      <Text>{GAME_NAME}&nbsp; <STAR_COMPONENT isStarted={isStarted} isWin={isWin} moves={moves} GAME_ROLES={GAME_ROLES} /></Text>
      <SubHeader>
        <Move>
          Moves: {moves}
        </Move>
        {
          !isStarted ?
            (<Button variant="primary" onClick={handleStart}>Start game</Button>) :
            (<Button variant="warning" onClick={handleRestart}>Restart game</Button>)
        }
      </SubHeader>
    </>
  );
};

export default HeaderGame;