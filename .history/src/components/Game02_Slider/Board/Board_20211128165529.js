import React, { useState } from "react";
import Tile from "../Tile/Tile";
import { canSwap, shuffle, swap, isSolved, TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "../helper/data"

import { Button } from 'react-bootstrap';

const Board = ({ setMovements }) => {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const handleTileClick = (index) => {
    if (canSwap(index, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, index, tiles.indexOf(tiles.length - 1))

      setTiles(swappedTiles)
    }
  }

  const handleShuffleClick = () => {
    shuffleTiles()
    setMovements(0)
  }

  const handleStartClick = () => {
    shuffleTiles()
    setMovements(0)
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div><h1>Puzzle solved!</h1></div>}
      {!isStarted ?
        (<Button variant="primary" className="button2" onClick={handleStartClick}>Start game</Button>) :
        (<Button variant="warning" className="button2" onClick={handleShuffleClick}>Restart game</Button>)}
    </>
  );
}

export default Board;