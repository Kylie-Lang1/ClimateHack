import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Components/Header";
import Home from "./Pages/Home"
import Survey from "./Pages/Survey"
import Results from "./Pages/Results"
import Actions from "./Pages/Action"

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey results={results} setResults={setResults} />} />
            <Route path="/results" element={<Results results={results} />} />
            <Route path="/actions" element={<Actions />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
