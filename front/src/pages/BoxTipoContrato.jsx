import React from "react";
import "../styles/BoxTipoContrato.css";

const BoxTipoContrato = () => {
  // Informações do contrato (dados estáticos para exemplo)
  const contrato = {
    tipoPlano: "Plano Premium",  // Tipo de plano (Ex: Básico, Premium, etc.)
    dataInicio: "2024-01-01",  // Data de início do contrato
    duracao: 12,  // Duração do contrato em meses (exemplo de 12 meses)
  };

  return (
    <div className="caixa-contrato-detalhado">
      <h2>Informações do Contrato</h2>
      <p><strong>Tipo de Plano:</strong> {contrato.tipoPlano}</p>
      <p><strong>Data de Início:</strong> {contrato.dataInicio}</p>
      <p><strong>Duração:</strong> {contrato.duracao} meses</p>
    </div>
  );
};

export default BoxTipoContrato;
