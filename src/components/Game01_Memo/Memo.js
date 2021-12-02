import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Header from './Header/Header'
import Card from './Card/Card';
import Finish from "./Finish/Finish";
import uniqueCardsArray from './helper/data'

const END_GAME = 1; /////////////////
const GAMES_ROLES = [17, 22];

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const shuffleCards = (array) => {
  for (let i = array.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

const Main = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [isWin, setIsWin] = useState(false)
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);

  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const evaluate = useCallback(() => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setMatchedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 300);
  }, [cards, openCards]);

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };


  useEffect(() => {
    let timeout = null;
    if (Object.keys(matchedCards).length === END_GAME) {
      setIsWin(true)
    }
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 800);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards, evaluate, matchedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };

  const handleRestart = () => {
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    setShouldDisableAllCards(false);
    setMatchedCards({});
    setOpenCards([]);
    setMoves(0);
    setIsWin(false);
  };

  return (
    <Container>
      <Header
        moves={moves}
        handleRestart={handleRestart}
        isWin={isWin}
        GAMES_ROLES={GAMES_ROLES}
      />
      <Row>
        {cards.map((card, index) => {
          return (
            <Col xs={6} md={3} lg={2}>
              <Card
                card={card}
                index={index}
                isDisabled={shouldDisableAllCards}
                isInactive={checkIsInactive(card)}
                isFlipped={checkIsFlipped(index)}
                onClick={handleCardClick}
              />
            </Col>
          );
        })}
      </Row>
      <Finish
        moves={moves}
        handleRestart={handleRestart}
        isWin={isWin}
        GAMES_ROLES={GAMES_ROLES}
        setIsWin={setIsWin} />
    </Container>
  );
}

export default Main;
