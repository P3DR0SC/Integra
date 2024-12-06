import React from "react";
import "../styles/TabelaDieta.css";

const TabelaDieta = () => {
  const refeicoes = [
    {
      nome: "Café da Manhã",
      hora: "07:00",
      calorias: 350,
      macronutrientes: {
        proteinas: 20,
        carboidratos: 40,
        gorduras: 15,
      },
    },
    {
      nome: "Almoço",
      hora: "12:30",
      calorias: 600,
      macronutrientes: {
        proteinas: 30,
        carboidratos: 60,
        gorduras: 20,
      },
    },
    {
      nome: "Lanche da Tarde",
      hora: "16:00",
      calorias: 200,
      macronutrientes: {
        proteinas: 15,
        carboidratos: 25,
        gorduras: 5,
      },
    },
    {
      nome: "Jantar",
      hora: "19:30",
      calorias: 500,
      macronutrientes: {
        proteinas: 35,
        carboidratos: 50,
        gorduras: 18,
      },
    },
    {
      nome: "Ceia",
      hora: "22:00",
      calorias: 250,
      macronutrientes: {
        proteinas: 20,
        carboidratos: 30,
        gorduras: 10,
      },
    },
  ];

  // Função para calcular o total de macros
  const calcularSomaMacros = () => {
    return refeicoes.reduce(
      (totals, refeicao) => {
        totals.proteinas += refeicao.macronutrientes.proteinas;
        totals.carboidratos += refeicao.macronutrientes.carboidratos;
        totals.gorduras += refeicao.macronutrientes.gorduras;
        return totals;
      },
      { proteinas: 0, carboidratos: 0, gorduras: 0 }
    );
  };

  const totaisMacros = calcularSomaMacros();

  return (
    <div className="tabela-dieta">
      <h2>Refeições do Dia</h2>
      <table>
        <thead>
          <tr>
            <th>Refeição</th>
            <th>Hora</th>
            <th>Calorias</th>
            <th>Proteínas</th>
            <th>Carboidratos</th>
            <th>Gorduras</th>
          </tr>
        </thead>
        <tbody>
          {refeicoes.map((refeicao, index) => (
            <tr key={index}>
              <td>{refeicao.nome}</td>
              <td>{refeicao.hora}</td>
              <td>{refeicao.calorias}</td>
              <td>{refeicao.macronutrientes.proteinas}g</td>
              <td>{refeicao.macronutrientes.carboidratos}g</td>
              <td>{refeicao.macronutrientes.gorduras}g</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totais-macros">
        <h3>Totais do Dia</h3>
        <p><strong>Proteínas:</strong> {totaisMacros.proteinas}g</p>
        <p><strong>Carboidratos:</strong> {totaisMacros.carboidratos}g</p>
        <p><strong>Gorduras:</strong> {totaisMacros.gorduras}g</p>
      </div>
    </div>
  );
};

export default TabelaDieta;
