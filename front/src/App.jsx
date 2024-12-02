import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import MenuLateral from "./components/MenuLateral";
import Cabecalho from "./components/cabecalho";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />      
        <Route 
          path="/main" 
          element={
            <div className="app">
              <MenuLateral />
              <div className="main-content">
                <Cabecalho />
                <Dashboard />
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
