import { useState, useEffect } from "react";
import BarRenderer from "../components/BarRenderer";
import Controls from "../components/Controls";
import { getMergeSortSteps } from "../algorithms/mergeSort";
import { getQuickSortSteps } from "../algorithms/quickSort";
import { buildSnapshots } from "../algorithms/buildSnapshots";

function generateRandomArray(size = 15) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
}

function SortingPage() {
  const [initialArray, setInitialArray] = useState(generateRandomArray());
  const [algorithm, setAlgorithm] = useState("merge");
  const [snapshots, setSnapshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);

  useEffect(() => {
    const steps =
      algorithm === "merge"
        ? getMergeSortSteps(initialArray)
        : getQuickSortSteps(initialArray);

    setSnapshots(buildSnapshots(initialArray, steps));
    setCurrentIndex(0);
    setIsPlaying(false);
  }, [initialArray, algorithm]);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentIndex >= snapshots.length - 1) {
      setIsPlaying(false);
      return;
    }

    const delay = 1000 / speed;

    const timer = setTimeout(() => {
      setCurrentIndex((i) => Math.min(i + 1, snapshots.length - 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, snapshots, speed]);

  const currentSnapshot = snapshots[currentIndex] || {
    array: initialArray,
    barStates: new Array(initialArray.length).fill("default"),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <h2>{algorithm === "merge" ? "Merge Sort" : "Quick Sort"}</h2>

      <div style={{ marginBottom: "12px" }}>
        <button
          onClick={() => setAlgorithm("merge")}
          style={{ fontWeight: algorithm === "merge" ? "bold" : "normal" }}
        >
          Merge Sort
        </button>
        <button
          onClick={() => setAlgorithm("quick")}
          style={{ fontWeight: algorithm === "quick" ? "bold" : "normal", marginLeft: "8px" }}
        >
          Quick Sort
        </button>
      </div>

      <BarRenderer array={currentSnapshot.array} barStates={currentSnapshot.barStates} />

      <Controls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying((prev) => !prev)}
        onStepBack={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
        onStepForward={() => setCurrentIndex((i) => Math.min(i + 1, snapshots.length - 1))}
        onReset={() => setInitialArray(generateRandomArray())}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </div>
  );
}

export default SortingPage;