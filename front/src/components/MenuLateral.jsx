import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
/*import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';*/


<FontAwesomeIcon icon="fa-solid fa-chart-column" />
const MenuLateral = () => {
  const element = <FontAwesomeIcon icon="fa-kit fa-my-icon" />

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
        <li><FontAwesomeIcon icon={faHouse} className="fa-solid" /> Principal</li> 
        <li><FontAwesomeIcon icon={faChartColumn} className="fa-solid" /> Minha evolução</li>
        <li><FontAwesomeIcon icon={faDumbbell} className="fa-solid" /> Treinos</li>  {/* Usando a string */}
        <li><FontAwesomeIcon icon={faCreditCard} className="fa-solid" /> Financeiro</li>
      </ul>
    </div>
  );
};

export default MenuLateral;
