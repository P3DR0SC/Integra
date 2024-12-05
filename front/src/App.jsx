import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import MenuLateral from "./components/MenuLateral";
import Cabecalho from "./components/Cabecalho";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <div className="app">
                  <MenuLateral />
                  <div className="main-content">
                    <Cabecalho />
                    <Dashboard />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;