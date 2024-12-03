import React, { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"; // Usando importação padrão da versão 2.x

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Nenhum token encontrado no localStorage.");
      setIsAuthenticated(false);
      setIsLoading(false); // Finaliza o estado de carregamento
      return;
    }

    try {
      const decoded = jwt_decode(token); // Usando a importação padrão
      console.log("Token decodificado:", decoded);

      const isExpired = decoded.exp * 1000 < Date.now(); // Verifica se o token está expirado
      if (isExpired) {
        console.log("Token expirado.");
        setIsAuthenticated(false);
        localStorage.removeItem("token");
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };

  useEffect(() => {
    checkAuth();
  }, []); // O hook useEffect é chamado apenas uma vez na montagem do componente

  // Enquanto está carregando, você pode exibir um carregamento ou mensagem
  if (isLoading) {
    return <div>Carregando...</div>; // Substitua por um componente de carregamento, se necessário
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
