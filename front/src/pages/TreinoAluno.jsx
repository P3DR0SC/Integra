import React, { useState, useEffect } from "react";
import "../styles/TreinoAluno.css";
import { fetchTreinos, fetchAlunos } from "../api/CadastrosAPI";

const TreinoAluno = () => {
  const [alunos, setAlunos] = useState([]);
  const [formData, setFormData] = useState({
    id_treino: "",
    id_pessoa: "",
    descricao: "",
    rep_serie: "",
  });
  const [treinos, setTreinos] = useState([]);

  // Carregar os dados dos treinos e alunos
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosTreinos = await fetchTreinos();  // Chamando a função de API para os treinos
        const dadosAlunos = await fetchAlunos();  // Chamando a função de API para os alunos

        setTreinos(dadosTreinos); // Armazenando os treinos
        setAlunos(dadosAlunos);   // Armazenando os alunos
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    };

    carregarDados();
  }, []); // Dependência vazia: rodará apenas uma vez quando o componente for montado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log("Dados do Formulário:", formData);
  };

  return (
    <div className="cadastro-treino-aluno">
      <h2>Cadastrar Treino para Aluno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecionar Aluno:
          <select
            name="id_pessoa"
            value={formData.id_pessoa}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um aluno</option>
            {alunos.map((aluno) => (
              <option key={aluno.id_pessoa} value={aluno.id_pessoa}>
                {aluno.nome}
              </option>
            ))}
          </select>
        </label>

        <label>
          Selecionar Treino:
          <select
            name="id_treino"
            value={formData.id_treino}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um treino</option>
            {treinos.map((treino) => (
              <option key={treino.id_treino} value={treino.id_treino}>
                {treino.nome_treino}
              </option>
            ))}
          </select>
        </label>

        <label>
          Descrição:
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </label>

        <label>
          Repetições/Série:
          <input
            type="text"
            name="rep_serie"
            value={formData.rep_serie}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Cadastrar Treino</button>
      </form>
    </div>
  );
};

export default TreinoAluno;
