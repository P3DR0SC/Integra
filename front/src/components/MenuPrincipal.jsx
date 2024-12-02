import React from "react";


const MenuPrincipal = () => {
  return (
    <div className="main-container">
      {/* Menu lateral esquerdo */}
      <aside className="sidebar">
        <nav className="menu">
          <ul>
            <li className="menu-item">Dashboard</li>
            <li className="menu-item">Relatórios</li>
            <li className="menu-item">Configurações</li>
            <li className="menu-item">Ajuda</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="content">
        {/* Barra superior */}
        <header className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="profile-menu">
            <span className="profile-name">Bem-vindo, Usuário</span>
            <div className="dropdown">
              <button className="dropdown-toggle">Perfil</button>
              <ul className="dropdown-menu">
                <li>Configurações</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        <main>
          <h1>Bem-vindo à Página Principal</h1>
          <p>Aqui está o conteúdo principal.</p>
        </main>
      </div>
    </div>
  );
};

export default MenuPrincipal;
