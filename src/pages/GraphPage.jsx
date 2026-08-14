import { useState, useMemo } from "react";
import PathfindingPanel from "../components/PathfindingPanel";
import { getBFSSteps } from "../algorithms/bfs";
import { getDFSSteps } from "../algorithms/dfs";
import { buildGridSnapshots } from "../algorithms/buildGridSnapshots";
import { MAZE_PRESETS } from "../algorithms/mazePresets";

function GraphPage() {
  const [presetKey, setPresetKey] = useState("horizontalBarriers");
  const preset = MAZE_PRESETS[presetKey];

  const bfsSnapshots = useMemo(() => {
    const steps = getBFSSteps(preset.walls, preset.start, preset.end);
    return buildGridSnapshots(preset.walls, preset.start, preset.end, steps);
  }, [presetKey]);

  const dfsSnapshots = useMemo(() => {
    const steps = getDFSSteps(preset.walls, preset.start, preset.end);
    return buildGridSnapshots(preset.walls, preset.start, preset.end, steps);
  }, [presetKey]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>BFS vs DFS</h2>

      <select value={presetKey} onChange={(e) => setPresetKey(e.target.value)}>
        <option value="openField">Open Field</option>
        <option value="horizontalBarriers">Horizontal Barriers</option>
        <option value="spiral">Spiral</option>
      </select>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "24px" }}>
        <PathfindingPanel label="BFS" snapshots={bfsSnapshots} />
        <PathfindingPanel label="DFS" snapshots={dfsSnapshots} />
      </div>
    </div>
  );
}

export default GraphPage;