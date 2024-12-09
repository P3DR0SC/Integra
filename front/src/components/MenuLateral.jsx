import React, { useState } from "react";
import useUserInfo from "../hooks/UserInfo"; 
import 'remixicon/fonts/remixicon.css'; 
import { Link } from 'react-router-dom'; 

const MenuLateral = () => {
  const { userInfo, loading, error } = useUserInfo(); 
  const [isSubMenuOpent, setIsSubMenuOpent] = useState(false); 
  const [ isSubMenuOpenp, setIsSubMenuOpenP] = useState(false); 
  const [ isSubMenuOpenS, setIsSubMenuOpenS] = useState(false); 


  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const { cargo } = userInfo || {};
  console.log(userInfo);
  const ProfMaiores = cargo <= 2;
  const Adminjs = cargo === 1;



  const toggleSubMenuT = () => {
    setIsSubMenuOpent(!isSubMenuOpent);
  };
  const toggleSubMenuP = () => {
    setIsSubMenuOpenP(!isSubMenuOpenp);
  };
  const toggleSubMenuS = () => {
    setIsSubMenuOpenS(!isSubMenuOpenS);
  };

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
        <li><Link to="/Main"><i className="ri-home-3-line"></i> Principal</Link></li>
        <li><Link to="/Main/TabAv"><i className="ri-bar-chart-box-ai-line"></i> Minha evolução</Link></li>
        <li onClick={toggleSubMenuT}>
          <i className="ri-settings-3-line"></i> Treino
          <i className={`ri-arrow-right-s-line ${isSubMenuOpent ? "rotate" : ""}`}></i>
        </li>
        {isSubMenuOpent && (
          <ul className="submenu">
            {ProfMaiores && (<li><Link to="/Main/treinos"><i className="ri-table-2"></i>Treinos</Link></li>)}
            {ProfMaiores && (<li><Link to="/Main/FormNovoTreino"><i className="ri-heart-add-2-line"></i> Cadastrar Treinos</Link></li>)}
            {ProfMaiores && (<li><Link to="/Main/TreinoAluno"><i className="ri-add-box-line"></i>Atribuir Treino</Link></li>)}
          </ul>
        )}
        <li><Link to="/Main/AlunoPag"><i className="ri-bank-card-line"></i> Pagamentos</Link></li>
        {ProfMaiores && (<li><Link to="/Main/TabAlunos"><i className="ri-user-add-line"></i> Alunos</Link></li>)}
        {ProfMaiores && (<li><Link to="/Main/TabProfs"><i claclassNamess="ri-group-line"></i> Professores</Link></li>)}
        <li onClick={toggleSubMenuP}>
          <i className="ri-settings-3-line"></i> Avaliações
          <i className={`ri-arrow-right-s-line ${isSubMenuOpenp ? "rotate" : ""}`}></i>
        </li>
        {isSubMenuOpenp && (
          <ul className="submenu">
            {ProfMaiores && (<li><Link to="/Main/FormMedidasPostura"><i className="ri-table-2"></i>Cadastrar</Link></li>)}
            {ProfMaiores && (<li><Link to="/Main/FormNovoTreino"><i className="ri-heart-add-2-line"></i> Cadastrar Treinos</Link></li>)}
            {ProfMaiores && (<li><Link to="/Main/TreinoAluno"><i className="ri-add-box-line"></i>Atribuir Treino</Link></li>)}
          </ul>
        )}
        <li onClick={toggleSubMenuS}>
          <i className="ri-settings-3-line"></i> Cadastros
          <i className={`ri-arrow-right-s-line ${isSubMenuOpenS ? "rotate" : ""}`}></i>
        </li>
        {isSubMenuOpenS && (
          <ul className="submenu">
            {ProfMaiores && (<li><Link to="/Main/FormCad"><i className="ri-table-2"></i>Pessoas</Link></li>)}
          </ul>
        )}
        
      </ul>
    </div>
  );
};

export default MenuLateral;
