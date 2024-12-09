import React, { useState } from "react";
import "../styles/FormCad.css";
import axios from "axios"; // Importando axios para requisição HTTP

const FormCad = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    genero: "",
    senha: "",
    cargo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
 
      const response = await axios.post("http://localhost:5000/cadastrar", formData);
      if (response.status === 200) {
        alert("Cadastro realizado com sucesso!");
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          cpf: "",
          genero: "",
          senha: "",
          cargo: "",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Ocorreu um erro ao realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="cadastro-pessoas">
      <h2>Cadastro de Pessoas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gênero:
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cargo:
          <select
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormCad;
