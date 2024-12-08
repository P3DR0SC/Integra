import React from "react";
import "../../styles/TabAv.css"; 

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
    <div>
      <div className="users-info">
        <div className="info-block">
          <p className="info-label">Cliente</p>
          <p className="info-value">PEDRO SANCHES</p>
        </div>
        <div className="info-item">
          <p className="info-label">Idade</p>
          <p className="info-value">21 anos</p>
        </div>
        <div className="info-item">
          <p className="info-label">Altura</p>
          <p className="info-value">1,70(m)</p>
        </div>
        <div className="info-item">
          <p className="info-label">Peso</p>
          <p className="info-value">86,35kg</p>
        </div>
        <div className="info-item">
          <p className="info-label">Sexo</p>
          <p className="info-value">Masculino</p>
        </div>
      </div>

      <hr className="divider" />
      <div className="evaluator-info">
        <div className="info-block">
          <p className="info-label">Avaliado por</p>
          <p className="info-value">Diego Bornholdo de Almeida</p>
        </div>
        <div className="info-item">
          <p className="info-label">Contato</p>
          <p className="info-value">(49) 30252-122</p>
        </div>
        <div className="info-item">
          <p className="info-label">Conselho</p>
          <p className="info-value">CREF</p>
        </div>
        <div className="info-item">
          <p className="info-label">Número</p>
          <p className="info-value">029257-G/SC</p>
        </div>
      </div>
      </div>
  );
};

export default App;
