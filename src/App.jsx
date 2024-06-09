import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VinPongPage from './pages/VinPongPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vinpong" element={<VinPongPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

