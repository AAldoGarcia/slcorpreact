import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import TeamPage from "./pages/teampage";
import Home from "./pages/Home";
import PersonDetail from './pages/PersonDetail';
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<TeamPage />} />
         <Route path="/equipo/:id" element={<PersonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;