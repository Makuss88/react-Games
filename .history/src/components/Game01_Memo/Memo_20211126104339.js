import React, { useCallback, useEffect, useRef, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

// import Finish from "./components/Finish/index.js";

import Header from './Header/Header'

import Card from './Card/Card';

import uniqueCardsArray from './helper/data'

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

  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState({});
  const [moves, setMoves] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
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

  const checkCompletion = useCallback(() => {
    if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
    }
  }, [bestScore, ma]);

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 800);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards, evaluate]);

  useEffect(() => {
    checkCompletion();
  }, [checkCompletion]);

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
  };



  return (
    <Container>
      <Header
        moves={moves}
        bestScore={bestScore}
        handleRestart={handleRestart}
      />
      {console.log(Object.keys(matchedCards).length)}
      <Row>
        {cards.map((card, index) => {
          return (
            <Col xs={6} md={3} lg={2}>
              <Card
                key={index}
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
    </Container>
  );
}

export default Main;
