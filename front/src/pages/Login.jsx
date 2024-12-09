import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Tela.module.css';
import { createGlobalStyle } from "styled-components";

const LoginPage = () => {

  const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    padding-top: 40px;
    display: grid;
    place-items: center;
  }
`;

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Chamada para a API de login
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf, senha }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message); // Exibe a mensagem de erro
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user); 
      console.log("Token recebido:", data.token);
      console.log("User: ", data.user)
      console.log("Redirecionando para /Main...");
 // Salvar o token no localStorage
      navigate("/Main"); // Redireciona para a página principal
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login, tente novamente!");
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselSlide}>
            <img
              src="https://via.placeholder.com/300"
              alt="Imagem 1"
              className={styles.carouselImage}
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Imagem 2"
              className={styles.carouselImage}
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Imagem 3"
              className={styles.carouselImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
