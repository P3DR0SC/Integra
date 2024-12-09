import React from "react";
import "../styles/DuracaoContrato.css";

const DuracaoContrato = () => {
  // Data final do contrato (defina a data final desejada)
  const dataFimContrato = new Date("2024-12-31");

  // Data atual
  const dataAtual = new Date();

  // Cálculo dos dias restantes
  const diffTime = dataFimContrato - dataAtual; 
  const diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter de milissegundos para dias

  // Duração do contrato (exemplo de 1 ano)
  const duracaoContrato = 365; // Número de dias de duração do contrato (modifique conforme necessário)

  return (
    <div className="caixa-contrato">
      <h2>Informações do Contrato</h2>
      <p><strong>Duração do Contrato:</strong> {duracaoContrato} dias</p>
      <p><strong>Faltam:</strong> {diasRestantes} dias</p>
      {diasRestantes <= 0 ? (
        <p className="finalizado">O contrato foi finalizado.</p>
      ) : (
        <p className="aviso">Atenção! O contrato está prestes a expirar.</p>
      )}
    </div>
  );
};

export default DuracaoContrato;
