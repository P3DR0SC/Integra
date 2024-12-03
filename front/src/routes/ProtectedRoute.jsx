import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Carregando...</p>; // Mostra um indicador de carregamento
  }

  if (!isAuthenticated) {
    console.log("Usuário não autenticado, redirecionando para login.");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
