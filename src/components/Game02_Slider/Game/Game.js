import React from "react";

import Tile from "./Tile/Tile";

import { canSwap, swap} from "./helper/data"

import { Board, DivStyled } from './GameStyled'

const Game = ({ moves, setMoves, tiles, setTiles }) => {
  const handleTileClick = (index) => {
    if (canSwap(index, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, index, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
      setMoves(moves + 1)
    }
  }

  return (
    <DivStyled>
      <Board>
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            handleTileClick={handleTileClick}
          />
        ))}
      </Board>
    </DivStyled>
  );
}

export default Game;