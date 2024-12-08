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
      <div className="table-container">
        <h2 className="table-title">Resumo das suas Avaliações</h2>
        <table className="styled-table" style={{ maxWidth: "60%", margin: "0 auto"}}>
          <thead>
            <tr>
              <th>TIPO</th>
              <th>PRIMEIRA</th>
              <th>ATUAL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.tipo}</td>
                <td>{row.ultima}</td>
                <td>{row.atual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="composicao-corporal">
      <h2>Composição Corporal</h2>
      <table className="resultado-tabela"  style={{ maxWidth: "60%", margin: "0 auto"}}>
        <thead>
          <tr>
            <th>Resultado</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peso: {dados.peso.valor}</td>
            <td>
              {dados.peso.avaliacao} <span className="ideal">(Ideal: {dados.peso.ideal})</span>
            </td>
          </tr>
          <tr>
            <td>Massa gorda: {dados.massaGorda.valor} ({dados.massaGorda.peso})</td>
            <td>{dados.massaGorda.avaliacao}</td>
          </tr>
          <tr>
            <td>Massa magra: {dados.massaMagra.valor} ({dados.massaMagra.peso})</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Relação cintura-quadril: {dados.relacaoCinturaQuadril.valor}</td>
            <td>{dados.relacaoCinturaQuadril.avaliacao}</td>
          </tr>
          <tr>
            <td>IMC: {dados.imc.valor}</td>
            <td>{dados.imc.avaliacao}</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
  );
};

export default App;
