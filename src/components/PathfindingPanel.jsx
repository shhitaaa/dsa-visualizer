import { useState, useEffect } from "react";
import GridRenderer from "./GridRenderer";
import Controls from "./Controls";

function PathfindingPanel({ label, snapshots }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);

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

  const currentGrid = snapshots[currentIndex];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3>{label}</h3>
      <GridRenderer cellStates={currentGrid} />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying((prev) => !prev)}
        onStepBack={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
        onStepForward={() => setCurrentIndex((i) => Math.min(i + 1, snapshots.length - 1))}
        onReset={() => setCurrentIndex(0)}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </div>
  );
}

export default PathfindingPanel;