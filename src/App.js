import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./sections/About";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
