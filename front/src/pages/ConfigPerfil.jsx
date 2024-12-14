import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import axios from "axios"; 
import "../styles/ConfigPerfil.css";

const ConfigPerfil = ({ aluno, closeModal }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    genero: "",
    senha: "",
    cargo: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(true); 
  useEffect(() => {
    if (aluno) {
      setFormData({
        nome: aluno.nome || "",
        telefone: aluno.telefone || "",
        email: aluno.email || "",
        cpf: aluno.cpf || "",
        genero: aluno.genero || "",
        senha: "",
        cargo: aluno.cargo || "",
      });
    }
  }, [aluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Criptografe a senha somente se ela for alterada
      let hashedPassword = formData.senha;
      if (formData.senha) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(formData.senha, salt);
      }

      const dataToSend = {
        ...formData,
        senha: hashedPassword,
      };

      console.log("Dados enviados ao backend:", dataToSend);

      const alunoId = aluno.id_pessoa;
      const response = await axios.put(`http://localhost:5000/aluno/${alunoId}`, dataToSend);

      if (response.status === 200) {
        alert("Perfil atualizado com sucesso!");
        setIsModalOpen(false); 
      }
    } catch (error) {
      console.error("Erro ao criptografar a senha ou enviar os dados:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  // Função para fechar o modal (agora controlada pelo estado)
  const handleCloseModal = () => {
    setIsModalOpen(false); // Alterando o estado para fechar o modal
  };

  return (
    isModalOpen && ( 
      <div>
        <h2>Editar Perfil</h2>
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
            fone:
            <input
              type="tel"
              name="fone"
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
              value={formData.senha}  // Use formData.senha aqui
              onChange={handleChange}
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
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
            </select>
          </label>
          <button type="submit">Salvar Alterações</button>
        </form>
        <button onClick={handleCloseModal}>Fechar</button> {/* Botão para fechar o modal */}
      </div>
    )
  );
};

export default ConfigPerfil;
