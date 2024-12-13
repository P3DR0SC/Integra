import React from "react";
import Card from "../components/Card";
import HistoricoPeso from "./componentes/HistPeso";
import Grafico_treino_semanal from "./Grafico_treino_semanal";


const Dashboard = () => {
  return (
    <div className="dashboard">
        <Grafico_treino_semanal/>
        <HistoricoPeso/>
    </div>
  );
};

export default Dashboard;