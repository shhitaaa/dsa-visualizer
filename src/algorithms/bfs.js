export function getBFSSteps(walls, start, end) {
  const steps = [];
  const rows = walls.length;
  const cols = walls[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const parent = {};
  const queue = [start];
  visited[start[0]][start[1]] = true;

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let found = false;

  while (queue.length > 0 && !found) {
    const [r, c] = queue.shift();
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

      const isWall = walls[nr][nc] === 1;
      if (isWall) continue;

      if (visited[nr][nc]) continue;

      visited[nr][nc] = true;
      parent[`${nr},${nc}`] = `${r},${c}`;
      queue.push([nr, nc]);
      steps.push({ type: "frontier", cell: [nr, nc] });
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