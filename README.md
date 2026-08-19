DSA Visualizer

An interactive web app for visualizing core Data Structures & Algorithms — built to turn algorithm theory into step-by-step, visual intuition.

Features
🎬 Step-by-step animated visualizations with play/pause and step forward/back controls
🎚️ Adjustable playback speed
🎨 Clean, color-coded states (comparing, swapping, sorted/visited/path, etc.)
🧭 Category landing page with real routes for each module
Modules

✅ Sorting

Merge Sort
Quick Sort

Visualizes comparisons, swaps, and pivots on an array of bars, color-coded by state.

✅ Graph / Pathfinding

BFS vs DFS — side-by-side comparison view, each with independent playback
Dijkstra's Algorithm — weighted grid with multiple terrain tiers and a color legend

Runs on a 25×15 grid with preset maze/obstacle patterns.

🚧 Coming soon

Tree/BST — insert, search, in-order traversal
Dynamic Programming — Fibonacci (memoization), 0/1 Knapsack

Tech Stack
React + Vite
Canvas/SVG for custom rendering
React Router for navigation
lucide-react for icons
Fully client-side — no backend

Getting Started
bash
git clone https://github.com/shhitaaa/dsa-visualizer.git
cd dsa-visualizer
npm install
npm run dev

Why this project

Built to turn strong DSA fundamentals into a visual, demo-friendly format — useful both for understanding algorithm behavior deeply and for showcasing that understanding.
