import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Length from "./components/Length/Length.jsx";
import Weight from "./components/Weight/Weight.jsx";
import Temperature from "./components/Temperature/Temperature.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Unit Converter</h1>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/length">Length</Link>
              </li>
              <li>
                <Link to="/weight">Weight</Link>
              </li>
              <li>
                <Link to="/temperature">Temperature</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/length" element={<Length />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/temperature" element={<Temperature />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
