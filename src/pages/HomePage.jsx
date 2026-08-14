import { Link } from "react-router-dom";

const CATEGORIES = [
  { path: "/sorting", title: "Sorting", description: "Merge Sort & Quick Sort", ready: true },
  { path: "/graph", title: "Graph & Pathfinding", description: "BFS, DFS & Dijkstra's", ready: true },
  { path: "/tree", title: "Tree Traversals", description: "BST Insert, Search & In-order", ready: false },
  { path: "/dp", title: "Dynamic Programming", description: "Fibonacci & 0/1 Knapsack", ready: false },
];

function HomePage() {
  return (
    <div style={{ maxWidth: "800px", margin: "60px auto", textAlign: "center" }}>
      <h1>DSA Visualizer</h1>
      <p>Pick a category to explore</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "32px" }}>
        {CATEGORIES.map((cat) =>
          cat.ready ? (
            <Link key={cat.path} to={cat.path} style={{ textDecoration: "none" }}>
              <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "24px" }}>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            </Link>
          ) : (
            <div key={cat.path} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "24px", opacity: 0.5 }}>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <small>Coming soon</small>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default HomePage;