export function getHeapSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  function heapify(size, root) {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size) {
      steps.push({ type: "compare", indices: [left, largest] });
      if (arr[left] > arr[largest]) largest = left;
    }
    if (right < size) {
      steps.push({ type: "compare", indices: [right, largest] });
      if (arr[right] > arr[largest]) largest = right;
    }
    if (largest !== root) {
      [arr[root], arr[largest]] = [arr[largest], arr[root]];
      steps.push({ type: "swap", indices: [root, largest] });
      heapify(size, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    steps.push({ type: "swap", indices: [0, i] });
    heapify(i, 0);
  }

  steps.push({ type: "done" });
  return steps;
}