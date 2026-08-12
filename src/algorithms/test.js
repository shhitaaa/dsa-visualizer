import { getQuickSortSteps } from './quickSort.js';

const steps = getQuickSortSteps([5, 2, 8, 1, 9]);
console.log(`Total steps: ${steps.length}`);
console.log(steps);