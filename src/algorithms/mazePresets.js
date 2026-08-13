const ROWS = 15;
const COLS = 25;

function emptyGrid() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}

function makeOpenField() {
  const walls = emptyGrid();
  return { walls, start: [7, 2], end: [7, 22] };
}

function makeHorizontalBarriers() {
  const walls = emptyGrid();
  for (let c = 3; c < 20; c++) walls[4][c] = 1;
  for (let c = 5; c < COLS; c++) walls[10][c] = 1;
  return { walls, start: [1, 2], end: [13, 22] };
}

function makeSpiral() {
  const walls = emptyGrid();
  for (let c = 2; c < 22; c++) walls[2][c] = 1;
  for (let r = 2; r < 12; r++) walls[r][22] = 1;
  for (let c = 4; c < 22; c++) walls[12][c] = 1;
  for (let r = 4; r < 12; r++) walls[r][4] = 1;
  return { walls, start: [7, 7], end: [7, 15] };
}

export const MAZE_PRESETS = {
  openField: makeOpenField(),
  horizontalBarriers: makeHorizontalBarriers(),
  spiral: makeSpiral(),
};