import { getDijkstraSteps } from './dijkstra.js';
import { WEIGHTED_PRESET } from './mazePresets.js';

const { weights, start, end } = WEIGHTED_PRESET;
const steps = getDijkstraSteps(weights, start, end);
console.log(`Total steps: ${steps.length}`);
console.log(steps.find(s => s.type === "path"));