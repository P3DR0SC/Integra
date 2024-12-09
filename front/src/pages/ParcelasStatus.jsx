import React from "react";
import "./ParcelasStatus.css";

const ParcelasStatus = () => {
  // Dados de exemplo das parcelas
  const parcelas = [
    { numero: 1, valor: 150, vencimento: "05/12/2024", status: "Paga" },
    { numero: 2, valor: 150, vencimento: "05/01/2025", status: "Pendência" },
    { numero: 3, valor: 150, vencimento: "05/02/2025", status: "Futura" },
  ];

  // Lógica para calcular a parcela anterior, atual e próxima
  const parcelaAtualIndex = 1; // Exemplo: parcela atual é a 2 (index 1)

  const parcelaAnterior = parcelas[parcelaAtualIndex - 1] || null;
  const parcelaAtual = parcelas[parcelaAtualIndex];
  const parcelaProxima = parcelas[parcelaAtualIndex + 1] || null;

  return (
    <div className="caixa-parcelas-status">
      <h2>Informações das Parcelas</h2>

      <div className="parcelas-container">
        {/* Exibindo a parcela anterior */}
        {parcelaAnterior && (
          <div className="parcela">
            <h3>Parcela Anterior</h3>
            <p><strong>Parcela {parcelaAnterior.numero}:</strong> R$ {parcelaAnterior.valor}</p>
            <p><strong>Vencimento:</strong> {parcelaAnterior.vencimento}</p>
            <p><strong>Status:</strong> {parcelaAnterior.status}</p>
          </div>
        )}

        {/* Exibindo a parcela atual */}
        <div className="parcela parcela-atual">
          <h3>Parcela Atual</h3>
          <p><strong>Parcela {parcelaAtual.numero}:</strong> R$ {parcelaAtual.valor}</p>
          <p><strong>Vencimento:</strong> {parcelaAtual.vencimento}</p>
          <p><strong>Status:</strong> {parcelaAtual.status}</p>
        </div>

        {/* Exibindo a próxima parcela */}
        {parcelaProxima && (
          <div className="parcela">
            <h3>Próxima Parcela</h3>
            <p><strong>Parcela {parcelaProxima.numero}:</strong> R$ {parcelaProxima.valor}</p>
            <p><strong>Vencimento:</strong> {parcelaProxima.vencimento}</p>
            <p><strong>Status:</strong> {parcelaProxima.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParcelasStatus;
