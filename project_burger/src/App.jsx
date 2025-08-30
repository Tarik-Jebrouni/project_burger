// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./styles/App.css";

// Components
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/HomePage" element={<HomePage />} />
          {/* Other routes can go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
