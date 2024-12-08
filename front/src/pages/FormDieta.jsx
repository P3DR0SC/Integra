import React, { useState, useEffect } from "react";
import "../styles/FormDieta.css";

const FormDieta = () => {
  const [pessoas, setPessoas] = useState([]);  
  const [formData, setFormData] = useState({
    id_pessoa: "",
    nome_prato: "",
    hora: "",
    calorias: "",
    proteinas: "",
    carboidratos: "",
    gorduras: "",
    data: "", 
  });

  useEffect(() => {
    fetch("http://localhost:5000/pessoas") 
      .then((res) => res.json())
      .then((data) => setPessoas(data))
      .catch((err) => console.error("Erro ao carregar pessoas:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados enviados:", formData);

    alert("Dieta cadastrada com sucesso!");
    setFormData({
      id_pessoa: "",
      nome_prato: "",
      hora: "",
      calorias: "",
      proteinas: "",
      carboidratos: "",
      gorduras: "",
      data: "", 
    });
  };

  return (
    <div className="cadastro-dieta">
      <h2>Cadastrar Dieta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecionar Pessoa:
          <select
            name="id_pessoa"
            value={formData.id_pessoa}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma pessoa</option>
            {pessoas.map((pessoa) => (
              <option key={pessoa.id_pessoa} value={pessoa.id_pessoa}>
                {pessoa.nome}
              </option>
            ))}
          </select>
        </label>

        <label>
          Nome do Prato:
          <input
            type="text"
            name="nome_prato"
            value={formData.nome_prato}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Hora:
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Calorias:
          <input
            type="number"
            name="calorias"
            value={formData.calorias}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Proteínas (g):
          <input
            type="number"
            name="proteinas"
            value={formData.proteinas}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Carboidratos (g):
          <input
            type="number"
            name="carboidratos"
            value={formData.carboidratos}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Gorduras (g):
          <input
            type="number"
            name="gorduras"
            value={formData.gorduras}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Data da Dieta:
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Cadastrar Dieta</button>
      </form>
    </div>
  );
};

export default FormDieta;
