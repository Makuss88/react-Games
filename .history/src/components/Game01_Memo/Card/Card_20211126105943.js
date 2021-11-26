import React from "react";
import "./styled.css";

import backpic from "../image/back.png";

import { CardBack, CardFace, CardImg, CardStyle } from "./CardStyled"

import classnames from "classnames";

const Card = ({ onClick, card, key, isInactive, isFlipped, isDisabled}) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(key);
  };

  return (
    <CardStyle
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
      key={index}
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