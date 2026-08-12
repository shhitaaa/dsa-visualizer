export function buildSnapshots(initialArray, steps) {
  const arr = [...initialArray];
  const snapshots = [];

  steps.forEach((step) => {
    const barStates = new Array(arr.length).fill("default");

    switch (step.type) {
      case "compare":
        step.indices.forEach((i) => { barStates[i] = "compare"; });
        break;

      case "swap": {
        const [i, j] = step.indices;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        barStates[i] = "swap";
        barStates[j] = "swap";
        break;
      }

      case "overwrite":
        arr[step.index] = step.value;
        barStates[step.index] = "overwrite";
        break;

      case "pivot":
        barStates[step.index] = "pivot";
        break;

      case "done":
        arr.forEach((_, idx) => { barStates[idx] = "sorted"; });
        break;
    }

    snapshots.push({ array: [...arr], barStates });
  });

  return snapshots;
}