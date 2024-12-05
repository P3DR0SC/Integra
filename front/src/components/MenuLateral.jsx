import React, { useEffect } from "react";
/*  icones ---> https://remixicon.com   */
import 'remixicon/fonts/remixicon.css';  // Importe o CSS para usar os ícones

const MenuLateral = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="profile-picture"
        />
        <h3>CELESC</h3>
        <p className="plan">Silver Plan</p>
      </div>
      <ul className="menu">
        <li><i className="ri-home-3-line"></i> Principal</li>  {/* Usando o ícone */}
        <li>📊 Minha evolução</li>
        <li><i className="ri-dumbbell-line"></i> Treinos</li>  {/* Usando o ícone */}
        <li>💳 Pagamentos</li>
      </ul>
    </div>
  );
};

export default MenuLateral;