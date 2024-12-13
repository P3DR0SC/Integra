import React from "react";
import "../styles/Grafico_treino_semanal.css";

const Grafico_treino_semanal = () => {
  const data = [
    { day: "Domingo", date: "03/12", workout: null },
    { day: "Segunda", date: "04/12", workout: "Treino A (Peito e Tríceps)" },
    { day: "Terça", date: "05/12", workout: "Treino B (Costas e Bíceps)" },
    { day: "Quarta", date: "06/12", workout: "Treino C (Pernas)" },
    { day: "Quinta", date: "07/12", workout: null },
    { day: "Sexta", date: "08/12", workout: "Treino D (Ombros)" },
    { day: "Sábado", date: "09/12", workout: null },
  ];

  return (
    <div className="weekly-container">
      {data.map((entry, index) => (
        <div
          key={index}
          className={`day-box ${entry.workout ? "has-workout" : "no-workout"}`}
        >
          <h3 className="day-text">{entry.day}</h3>
          <p className="date-text">{entry.date}</p>
          {entry.workout ? (
            <p className="workout-text">{entry.workout}</p>
          ) : (
            <p className="no-workout-text">Sem treino</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grafico_treino_semanal;
