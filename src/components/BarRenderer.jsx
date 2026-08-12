const COLORS = {
  default: "#7DB9E8",
  compare: "#D97C7C",
  overwrite: "#D9A76A",
  swap: "#D9A76A",
  pivot: "#D9C46A",
  sorted: "#8FBF8F",
};

function BarRenderer({ array, barStates }) {
  const width = 600;
  const height = 300;
  const barWidth = width / array.length;
  const maxValue = Math.max(...array);

  return (
    <svg width={width} height={height}>
      {array.map((value, index) => {
        const barHeight = (value / maxValue) * (height - 20);
        const x = index * barWidth;
        const y = height - barHeight;
        const state = barStates[index] || "default";

        return (
          <rect
            key={index}
            x={x + 2}
            y={y}
            width={barWidth - 4}
            height={barHeight}
            fill={COLORS[state]}
            rx={3}
          />
        );
      })}
    </svg>
  );
}

export default BarRenderer;