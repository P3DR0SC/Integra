import React from "react";
import "../styles/AlunoPag.css";

const AlunoPag = () => {
  // Dados estáticos de exemplo
  const parcela = {
    mes: "Dezembro 2024",   // Mês e ano da parcela
    valor: 150.00,          // Valor da parcela
  };

  const formasPagamento = [
    "Cartão de Crédito",
    "Boleto Bancário",
    "Transferência Bancária",
    "Pix"
  ];

  return (
    <div className="caixa-parcelas">
      <h2>Informações da Parcela</h2>
      <p>Status: em aguardo</p>
      <p><strong>Mês:</strong> {parcela.mes}</p>
      <p><strong>Valor da Parcela:</strong> R$ {parcela.valor.toFixed(2)}</p>
      
      <h3>Formas de Pagamento</h3>
      <ul>
        {formasPagamento.map((forma, index) => (
          <li key={index}>{forma}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoPag;
