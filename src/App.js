import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home"
import Survey from "./Pages/Survey"
import Solutions from "./Pages/Solutions"
import Actions from "./Pages/Action"

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey results={results} setResults={setResults} />} />
            <Route path="/solutions" element={<Solutions results={results} />} />
            <Route path="/actions" element={<Actions />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
