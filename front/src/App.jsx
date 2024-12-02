import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dash1";
import MenuLateral from "./components/MenuLateral";
import MenuPrincipal from "./components/MenuPrincipal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menulateral" element={<MenuLateral />} />
        <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
      </Routes>
    </Router>
  );
};

export default App;
