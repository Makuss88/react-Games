export const TILE_COUNT = 16;
export const GRID_SIZE = 4;
export const BOARD_SIZE = 400;

export const isSolved = (tiles) => {
  for (let i = 0, l = tiles.length; i < l; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }
  return true;
};

export const isSolvable = (tiles) => {
  let product = 1;
  for (let i = 1, l = TILE_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

export const getMatrixPosition = (index) => {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE
  }
}

export const getIndex = (row, col) => {
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10)
}

export const shuffle = (tiles) => {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];
  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
    ? shuffledTiles
    : shuffle(shuffledTiles);
}

export const canSwap = (srcIndex, destIndex) => {
  const { row: srcRow, col: srcCol } = getMatrixPosition(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPosition(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

export const swap = (tiles, src, dest) => {
  const tilesResult = [...tiles];
  [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
  return tilesResult;
}
