import React, { useState, useEffect } from "react";
import "../styles/TreinoAluno.css";
import { fetchTreinos, fetchAlunos, cadastrarTreinoAluno } from "../api/CadastrosAPI";

const TreinoAluno = () => {
  const [alunos, setAlunos] = useState([]);
  const [formData, setFormData] = useState({
    id_pessoa: "",
    id_treino: "",
    video: "",
    descricao: "",
    rep: "",
    serie: "",
    peso:"",
    dia:"",
  });
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosTreinos = await fetchTreinos();  
        const dadosAlunos = await fetchAlunos();  

        setTreinos(dadosTreinos); 
        setAlunos(dadosAlunos);   
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    };

    carregarDados();
  }, []); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("ID Treino Selecionado:", formData.id_treino);
  
    const treinoSelecionado = treinos.find(
      (e) => e.id_treino === parseInt(formData.id_treino)
    );
  
    if (treinoSelecionado) {
      const formDataAtualizado = { ...formData, video: treinoSelecionado.video };
      try {
        await cadastrarTreinoAluno(formDataAtualizado);
        alert("Treino Cadastrado com sucesso!!");

        setFormData({
          id_pessoa: "",
          id_treino: "",
          video: "",
          descricao: "",
          rep: "",
          serie: "",
          peso: "",
          dia: "",
        });
      } catch (erro) {
        console.error("Erro ao cadastrar treino:", erro);
      }
    } else {
      console.error("Treino não encontrado.");
    }
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
          Selecionar Dia:
          <select
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um treino</option>
              <option value='1'>Domingo</option>
              <option value='2'>Segunda</option>
              <option value='3'>Terça</option>
              <option value='4'>Quarta</option>
              <option value='5'>Quinta</option>
              <option value='6'>Sexta</option>
              <option value='7'>Sabado</option>
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
          Repetições:
          <input
            type="text"
            name="rep"
            value={formData.rep}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Série:
          <input
            type="text"
            name="serie"
            value={formData.serie}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Peso:
          <input
            type="text"
            name="peso"
            value={formData.peso}
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
