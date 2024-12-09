import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState("");
  const navigate = useNavigate(); // Inicialize o navigate

  const alternarMenu = (menu) => {
    setMenuAberto(menuAberto === menu ? "" : menu);
  };

  const handleLogout = () => {
    // Remove o token e redireciona para a página de login
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="user-info">
        {/* Ícone de usuário */}
        <div className="menu-item">
          <span onClick={() => alternarMenu("usuario")}>👤</span>
          {menuAberto === "usuario" && (
            <div className="dropdown">
              <p>Perfil</p>
              <p onClick={handleLogout} style={{ cursor: "pointer", color: "red" }}>
                Sair
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;
