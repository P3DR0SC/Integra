import React, { useState } from "react";
import styles from './Tela.module.css';

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login com:", usuario, password);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Formulário de Login */}
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>

      {/* Carrossel de Imagens */}
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
  );
};

export default LoginPage;
