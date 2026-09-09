export function getSelectionSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      steps.push({ type: "compare", indices: [minIdx, j] });
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({ type: "swap", indices: [i, minIdx] });
    }
  }

  steps.push({ type: "done" });
  return steps;
}