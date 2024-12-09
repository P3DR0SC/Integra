import React, { useState } from "react";
import "../styles/FormSol.css"; 

const FormSol = () => {
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao) {
      console.log("Solicitação selecionada:", descricao);
      alert(`Solicitação enviada: ${descricao}`);
      setDescricao(""); 
    } else {
      alert("Por favor, selecione um treino!");
    }
  };



  return (
  <form className="formulario-descricao" onSubmit={handleSubmit}>
    <div className="formulario-campo">
      <label htmlFor="descricao1" className="formulario-label">
        Descrição:
      </label>
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        type="text"
        id="descricao1"
        placeholder="Digite a Descrição"
      />
    </div>
    <button type="submit" className="formulario-botao">
      Enviar
    </button>
  </form>
);

};

export default FormSol;
