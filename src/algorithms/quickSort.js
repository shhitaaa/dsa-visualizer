export function getQuickSortSteps(array) {
  const steps = [];
  const arr = [...array];

  function quickSort(low, high) {
    if (low >= high) return;
    const pivotIndex = partition(low, high);
    quickSort(low, pivotIndex - 1);
    quickSort(pivotIndex + 1, high);
  }

    function partition(low, high) {
        const pivotValue = arr[high];
        steps.push({ type: "pivot", index: high });

        let i = low - 1;

        for (let j = low; j < high; j++) {
            steps.push({ type: "compare", indices: [j, high] });

            if (arr[j] < pivotValue) {
            i++;
            if (i !== j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                steps.push({ type: "swap", indices: [i, j] });
            }
            }
        }

        if (i + 1 !== high) {
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            steps.push({ type: "swap", indices: [i + 1, high] });
        }

        return i + 1;
    }

  quickSort(0, arr.length - 1);
  steps.push({ type: "done" });
  return steps;
}