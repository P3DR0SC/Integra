import React, { useState, useEffect } from "react";
import "../styles/ConfigPerfil.css"; 

const ConfigPerfil = () => {

  

const [formData, setFormData] = useState({
  nome: "",
  telefone: "",
  email: "",
  cpf: "",
  genero: "",
  senha: "",
  cargo: "aluno", 
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  
};

return (
  <div className="cadastro-pessoas">
    <h2>Alterar Perfil</h2>
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
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
          <option value="adm">Administrador</option>
        </select>
      </label>

      <button type="submit">Alterar</button>
    </form>
  </div>
);
};
  
  


export default ConfigPerfil;
