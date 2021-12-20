import React, { useState } from "react";
import { Container } from "react-bootstrap";

import HeaderGame from '../HeaderGame/HeaderGame'
import Game from "./Game/Game";
import Finish from "./Finish/Finish";

import { uniqueCardsArray, shuffleCards } from './Game/helper/helper';

const END_GAME = 9;
const GAME_ROLES = [17, 22];
const GAME_NAME = "MEMO"

const Main = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [isWin, setIsWin] = useState(false)
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [isStarted, setIsStarted] = useState(false)

  const handleStart = () => {
    setMoves(0);
    setIsStarted(true)
  }

  const handleRestart = () => {
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    setIsWin(false);
    setOpenCards([]);
    setMatchedCards({});
    setMoves(0);
    setShouldDisableAllCards(false);
  };

  return (
    <Container>
      <HeaderGame
        GAME_NAME={GAME_NAME}
        GAME_ROLES={GAME_ROLES}
        isStarted={isStarted}
        isWin={isWin}
        moves={moves}
        handleStart={handleStart}
        handleRestart={handleRestart}
      />
      <Game
        cards={cards}
        setIsWin={setIsWin}
        shouldDisableAllCards={shouldDisableAllCards}
        setShouldDisableAllCards={setShouldDisableAllCards}
        openCards={openCards}
        setOpenCards={setOpenCards}
        matchedCards={matchedCards}
        setMatchedCards={setMatchedCards}
        setMoves={setMoves}
        END_GAME={END_GAME}
      />
      <Finish
        moves={moves}
        handleRestart={handleRestart}
        isWin={isWin}
        GAME_ROLES={GAME_ROLES}
        setIsWin={setIsWin}
        isStarted={true}
      />
    </Container>
  );
}

export default Main;
