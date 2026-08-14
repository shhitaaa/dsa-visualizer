import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SortingPage from "./pages/SortingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sorting" element={<SortingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;