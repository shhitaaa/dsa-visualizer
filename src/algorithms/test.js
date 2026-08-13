import { getDFSSteps } from './dfs.js';
import { MAZE_PRESETS } from './mazePresets.js';

const { walls, start, end } = MAZE_PRESETS.horizontalBarriers;
const steps = getDFSSteps(walls, start, end);
console.log(`Total steps: ${steps.length}`);
console.log(steps[steps.length - 1]); // should be the "done" step
console.log(steps.find(s => s.type === "path")); // should show the reconstructed path