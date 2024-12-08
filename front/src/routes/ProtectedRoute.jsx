import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useUserInfo from "../hooks/UserInfo"; // Certifique-se de que o hook está importado corretamente

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { userInfo, loading, error } = useUserInfo(); 
  if (loading || isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    console.log("Erro ao carregar dados do usuário:", error);
  }

  if (!isAuthenticated) {
    console.log("Usuário não autenticado, redirecionando para login.");
    return <Navigate to="/" />; // Redireciona para a página de login se não estiver autenticado
  }


  return children; 
};

export default ProtectedRoute;
