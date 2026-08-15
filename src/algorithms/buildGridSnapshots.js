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

export function buildWeightedGridSnapshots(weights, start, end, steps) {
  const rows = weights.length;
  const cols = weights[0].length;

  const weightState = (w) => {
    if (w === 0) return "wall";
    if (w === 1) return "weight1";
    if (w === 2) return "weight2";
    if (w === 3) return "weight3";
    return "weight4";
  };

  const baseState = () => {
    const grid = weights.map((row) => row.map((w) => weightState(w)));
    grid[start[0]][start[1]] = "start";
    grid[end[0]][end[1]] = "end";
    return grid;
  };

  let currentGrid = baseState();
  const snapshots = [];

  steps.forEach((step) => {
    const grid = currentGrid.map((row) => [...row]);
    const isPlainWeightState = (val) => val && val.startsWith("weight");

    switch (step.type) {
      case "frontier": {
        const [r, c] = step.cell;
        if (isPlainWeightState(grid[r][c])) grid[r][c] = "frontier";
        break;
      }
      case "visit": {
        const [r, c] = step.cell;
        if (isPlainWeightState(grid[r][c]) || grid[r][c] === "frontier") grid[r][c] = "visited";
        break;
      }
      case "path": {
        step.cells.forEach(([r, c]) => {
          if (isPlainWeightState(grid[r][c]) || grid[r][c] === "visited" || grid[r][c] === "frontier") {
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