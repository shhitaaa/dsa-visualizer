const LEGEND_ITEMS = [
  { label: "Cost 1", color: "#F0F0F0" },
  { label: "Cost 2", color: "#C9D6E3" },
  { label: "Cost 3", color: "#93AEC9" },
  { label: "Cost 4", color: "#5E7A99" },
  { label: "Wall", color: "#4A4A4A" },
];

function WeightLegend() {
  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "12px" }}>
      {LEGEND_ITEMS.map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "16px", height: "16px", backgroundColor: item.color, borderRadius: "3px" }} />
          <span style={{ fontSize: "13px" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default WeightLegend;