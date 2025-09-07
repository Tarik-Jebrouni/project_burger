// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import PanierDark from "./components/PanierDark";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/PanierDark" element={<PanierDark />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
