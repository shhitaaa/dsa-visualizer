export function getInsertionSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0) {
      steps.push({ type: "compare", indices: [j - 1, j] });
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        steps.push({ type: "swap", indices: [j - 1, j] });
        j--;
      } else {
        break;
      }
    }
  }

  steps.push({ type: "done" });
  return steps;
}