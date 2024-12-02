import React from "react";

const Cabecalho = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      <div className="user-info">
        <span>🌍</span>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
};

export default Cabecalho;
