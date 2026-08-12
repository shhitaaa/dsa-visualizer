export function getMergeSortSteps(array) {
  const steps = [];
  const arr = [...array]; // don't mutate the original

  function mergeSort(start, end) {
    if (end - start <= 1) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    // we'll fill this in next
  }

  mergeSort(0, arr.length);
  return steps;
}