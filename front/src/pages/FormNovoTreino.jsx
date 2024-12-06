import React, { useState } from "react";
import "../styles/FormNovoTreino.css";

const FormNovoTreino = () => {
  const [formData, setFormData] = useState({
    nomeTreino: "",
    video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cadastro-treino">
      <h2>Cadastro de Treino</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Treino:
          <input
            type="text"
            name="nomeTreino"
            value={formData.nomeTreino}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Link do Vídeo:
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Cadastrar Treino</button>
      </form>
    </div>
  );
};

export default FormNovoTreino;
