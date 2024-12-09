import { useState, useEffect } from "react";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null); // Estado para armazenar as informações do usuário
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar as informações do usuário
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Usando o token armazenado no localStorage
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar os dados do usuário");
      }

      const data = await response.json();
      console.log("Dados retornados:", data); // Verificando os dados no console
      setUserInfo(data); // Atualiza as informações do usuário
    } catch (error) {
      setError(error.message); // Se houver erro, armazena a mensagem de erro
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  // UseEffect para buscar as informações do usuário ao carregar o componente
  useEffect(() => {
    fetchUserInfo();
  }, []); // O hook será executado apenas uma vez, na montagem do componente

  return { userInfo, loading, error };
};

export default useUserInfo;
