export function getDijkstraSteps(weights, start, end) {
  const steps = [];
  const rows = weights.length;
  const cols = weights[0].length;

  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const parent = {};

  dist[start[0]][start[1]] = 0;

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let found = false;

  while (!found) {
    const current = getMinUnvisitedCell(dist, visited, rows, cols);
    if (current === null) break; // no reachable cell left

    const [r, c] = current;
    visited[r][c] = true;
    steps.push({ type: "visit", cell: [r, c] });

    if (r === end[0] && c === end[1]) {
      found = true;
      break;
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      const inBounds = nr >= 0 && nr < rows && nc >= 0 && nc < cols;
      if (!inBounds) continue;

      const isWall = weights[nr][nc] === 0;
      if (isWall) continue;

      if (visited[nr][nc]) continue;

      const newDist = dist[r][c] + weights[nr][nc];

      if (newDist < dist[nr][nc]) {
        dist[nr][nc] = newDist;
        parent[`${nr},${nc}`] = `${r},${c}`;
        steps.push({ type: "frontier", cell: [nr, nc] });
      }
    }
  }

  if (found) {
    const path = [];
    let key = `${end[0]},${end[1]}`;
    while (key) {
      const [pr, pc] = key.split(",").map(Number);
      path.unshift([pr, pc]);
      key = parent[key];
    }
    steps.push({ type: "path", cells: path });
  }

  steps.push({ type: "done" });
  return steps;
}

function getMinUnvisitedCell(dist, visited, rows, cols) {
  let minDist = Infinity;
  let minCell = null;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!visited[r][c] && dist[r][c] < minDist) {
        minDist = dist[r][c];
        minCell = [r, c];
      }
    }
  }

  return minCell;
}