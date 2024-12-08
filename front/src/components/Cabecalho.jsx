import React, { useState } from "react";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState("");

  const alternarMenu = (menu) => {
    setMenuAberto(menuAberto === menu ? "" : menu);
  };

  return (
    <div className="header">
      <div className="user-info">
        {/* Ícone de idioma */}
        <div className="menu-item">
          <span onClick={() => alternarMenu("idioma")}>🌍</span>
          {menuAberto === "idioma" && (
            <div className="dropdown">
              <p>Português</p>
              <p>English</p>
              <p>Español</p>
            </div>
          )}
        </div>

        {/* Ícone de notificações */}
        <div className="menu-item">
          <span onClick={() => alternarMenu("notificacoes")}>🔔</span>
          {menuAberto === "notificacoes" && (
            <div className="dropdown">
              <p>Notificação 1</p>
              <p>Notificação 2</p>
              <p>Notificação 3</p>
            </div>
          )}
        </div>

        {/* Ícone de usuário */}
        <div className="menu-item">
          <span onClick={() => alternarMenu("usuario")}>👤</span>
          {menuAberto === "usuario" && (
            <div className="dropdown">
              <p>Perfil</p>
              <p>Configurações</p>
              <p>Sair</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;
