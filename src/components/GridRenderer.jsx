const COLORS = {
  empty: "#F0F0F0",
  wall: "#4A4A4A",
  start: "#7DB9E8",
  end: "#D9C46A",
  frontier: "#D97C7C",
  visited: "#EFD2D2",
  path: "#8FBF8F",
  weight1: "#F0F0F0",
  weight2: "#C9D6E3",
  weight3: "#93AEC9",
  weight4: "#5E7A99",
};

const ROWS = 15;
const COLS = 25;

function GridRenderer({ cellStates }) {
  const cellSize = 24;
  const width = COLS * cellSize;
  const height = ROWS * cellSize;

  return (
    <svg width={width} height={height}>
      {cellStates.map((row, r) =>
        row.map((state, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * cellSize + 1}
            y={r * cellSize + 1}
            width={cellSize - 2}
            height={cellSize - 2}
            fill={COLORS[state]}
            rx={2}
          />
        ))
      )}
    </svg>
  );
}

export default GridRenderer;