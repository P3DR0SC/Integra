import React from "react";
import useUserInfo from "../hooks/UserInfo"; 
import 'remixicon/fonts/remixicon.css'; 
import { Link } from 'react-router-dom'; 

const MenuLateral = () => {
  const { userInfo, loading, error } = useUserInfo(); // Usando o hook para obter as informações do usuário

  // Exibe "Carregando..." enquanto os dados estão sendo carregados
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Exibe erro caso algo aconteça durante a requisição
  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={userInfo?.profilePicture || "https://via.placeholder.com/80"} // Foto do perfil
          alt="Profile"
          className="profile-picture"
        />
        <h3>{userInfo?.nome || "Usuário"}</h3> {/* Nome do usuário */}
        <p className="plan">{userInfo?.plan || "Plano padrão"}</p> {/* Plano do usuário */}
      </div>
      <ul className="sidebar-menu">
        {/* Navegação relativa a /main */}
        <li><Link to="/main"><i className="ri-home-3-line"></i> Principal</Link></li>
        <li><Link to="/main/minha_evolucao"><i className="ri-bar-chart-box-ai-line"></i> Minha evolução</Link></li>
        <li><Link to="/main/treinos"><i className="ri-book-marked-line"></i> Treinos</Link></li>
        <li><Link to="/main/pagamentos"><i className="ri-bank-card-line"></i> Pagamentos</Link></li>
      </ul>
    </div>
  );
};

export default MenuLateral;
