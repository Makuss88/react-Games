import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, TILE_COUNT, } from "../helper/data";

import { TileIl } from '../GameStyled'

const Tile = ({ tile, index, handleTileClick }) => {

  const { row, col } = getMatrixPosition(index);

  const tileStyle = {
    translateX: col * 100,
    translateY: row * 100,
  };

  const motionStyle = {
    moveX: spring(col * 100),
    moveY: spring(row * 100)
  }

  return (
    <Motion style={motionStyle}>
      {({ moveX, moveY }) => (
        <TileIl
          style={{
            ...tileStyle,
            transform: `translate(${moveX}px, ${moveY}px)`,
            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
          }}
          onClick={() => handleTileClick(index)}
        >
          {`${tile + 1}`}
        </TileIl>
      )}
    </Motion>
  );
}

export default Tile;