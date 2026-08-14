export function buildGridSnapshots(walls, start, end, steps) {
  const rows = walls.length;
  const cols = walls[0].length;
  const snapshots = [];

  const baseState = () => {
    const grid = walls.map((row) => row.map((cell) => (cell === 1 ? "wall" : "empty")));
    grid[start[0]][start[1]] = "start";
    grid[end[0]][end[1]] = "end";
    return grid;
  };

  let currentGrid = baseState();

  steps.forEach((step) => {
    const grid = currentGrid.map((row) => [...row]);

    switch (step.type) {
      case "frontier": {
        const [r, c] = step.cell;
        if (grid[r][c] === "empty") grid[r][c] = "frontier";
        break;
      }

      case "visit": {
        const [r, c] = step.cell;
        if (grid[r][c] === "empty" || grid[r][c] === "frontier") grid[r][c] = "visited";
        break;
      }

      case "path": {
        step.cells.forEach(([r, c]) => {
          if (grid[r][c] === "empty" || grid[r][c] === "visited" || grid[r][c] === "frontier") {
            grid[r][c] = "path";
          }
        });
        break;
      }
    }

    currentGrid = grid;
    snapshots.push(grid);
  });

  return snapshots;
}