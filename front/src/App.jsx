import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import MenuLateral from "./components/MenuLateral";
import Cabecalho from "./components/Cabecalho";
import Dashboard from "./pages/Dashboard";
import Minha_evolucao from "./pages/Minha_evolucao";
import Treinos from "./pages/Treinos";
import Pagamentos from "./pages/Pagamentos";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota de login */}
          <Route path="/" element={<LoginPage />} />

          {/* Rota principal protegida */}
          <Route
            path="/main/*"
            element={
              <ProtectedRoute>
                <div className="app">
                  <MenuLateral />
                  <Cabecalho />
                  <div className="main-content">
                    {/* Roteamento interno de /main */}
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="minha_evolucao" element={<Minha_evolucao />} />
                      <Route path="treinos" element={<Treinos />} />
                      <Route path="pagamentos" element={<Pagamentos />} />
                    </Routes>
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
