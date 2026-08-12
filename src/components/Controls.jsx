import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";

function Controls({ isPlaying, onPlayPause, onStepBack, onStepForward, onReset, speed, onSpeedChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginTop: "16px" }}>
      <button onClick={onStepBack}>
        <SkipBack size={20} />
      </button>

      <button onClick={onPlayPause}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button onClick={onStepForward}>
        <SkipForward size={20} />
      </button>

      <button onClick={onReset}>
        <Shuffle size={20} />
      </button>

      <input
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => onSpeedChange(Number(e.target.value))}
      />
    </div>
  );
}

export default Controls;