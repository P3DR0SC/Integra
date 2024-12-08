import React from "react";

const Card = ({ title, value, unit, icon, color, chart }) => {
  return (
    <div className={`card card-${color}`}>
      <div className="card-header">
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p className="value">
          {value} <span>{unit}</span>
        </p>
        {chart && <div className="chart-placeholder">[Chart]</div>}
      </div>
    </div>
  );
};

export default Card;
