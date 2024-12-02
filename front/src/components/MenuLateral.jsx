import React from "react";

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
        <li>🏠 Principal</li>
        <li>📊 Minha evolução</li>
        <li>📅 Treinos</li>
        <li>🍴 Plano de dieta</li>
        <li>💳 Pagamentos</li>
      </ul>
    </div>
  );
};

export default MenuLateral;
