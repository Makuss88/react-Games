import React, { useEffect, useRef, useCallback } from 'react'
import { DivStyled } from './Card/CardStyled';
import { Col } from "react-bootstrap";
import Card from './Card/Card';

const Game = ({
  END_GAME,
  cards,
  setIsWin,
  shouldDisableAllCards,
  setShouldDisableAllCards,
  openCards,
  setOpenCards,
  matchedCards,
  setMatchedCards,
  setMoves
}) => {

  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = useCallback(() => {
    setShouldDisableAllCards(false);
  }, [setShouldDisableAllCards]);

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
  }, [cards, openCards, enable, setMatchedCards, setOpenCards]);

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
  }, [openCards, evaluate, matchedCards, END_GAME, setIsWin]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };
  return (
    <DivStyled>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(card)}
            isFlipped={checkIsFlipped(index)}
            onClick={handleCardClick}
          />
        );
      })}
    </DivStyled>
  )
}

export default Game
