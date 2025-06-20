// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import GlassCard from './components/GlassCard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <GlassCard className="navbar-container">
          <nav className="navbar">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/page1" className="navbar-link">Page 1</Link>
            <Link to="/page2" className="navbar-link">Page 2</Link>
            <Link to="/page3" className="navbar-link">Page 3</Link>
          </nav>
        </GlassCard>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;