import React from "react";
import "./styled.css";

import backpic from "../image/back.png";

import { CardBack, CardFace, CardImg, CardStyle } from "./CardStyled"

import classnames from "classnames";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled, key }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <CardStyle
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
      key={indexObject.keys(matchedCards).length}
    >
      <CardBack>
        <CardImg src={card.image} alt="frontpic" />
      </CardBack>
      <CardFace>
        <CardImg src={backpic} alt="backpic" />
      </CardFace>
    </CardStyle >
  );
};
export default Card;