import React from "react";
import "../styles/TabAv.css"; 
import HistPeso from './componentes/HistPeso';
import Infos from './componentes/Infos';
import ResumoAV from './componentes/ResumoAV';

const App = () => {
  const data = [
    { tipo: "Tempo", ultima: "15/08/2024", atual: "01/11/2024" },
    { tipo: "Peso", ultima: "86,15kg", atual: "86,35kg" },
    { tipo: "Massa gorda", ultima: "24,2% (20,9kg)", atual: "19,1% (16,5kg)" },
    { tipo: "Massa magra", ultima: "75,8% (65,3kg)", atual: "80,9% (69,9kg)" },
  ];
  const dados = {
    peso: { valor: "86,35kg", avaliacao: "Acima (4,14 kg)", ideal: "82,21 kg" },
    massaGorda: { valor: "19,1%", peso: "16,47kg", avaliacao: "Pior que a média" },
    massaMagra: { valor: "80,9%", peso: "69,88kg" },
    relacaoCinturaQuadril: { valor: "0,85", avaliacao: "Moderado" },
    imc: { valor: "29,88", avaliacao: "Acima do peso" }
  };

  const classificacoes = ["Excelente", "Bom", "Melhor que a média", "Média", "Pior que a média", "Ruim", "Muito ruim"];



  return (
    <div className="container">
        <Infos/>
        <ResumoAV/>
        <HistPeso/>
    </div>
  );
};

export default App;
