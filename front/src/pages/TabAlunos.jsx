import React, { useState, useEffect } from "react";
import ConfiguraPerfil from "./ConfigPerfil";
import "../styles/ConfigPerfil.css";

const TabAlunos = () => {
  const [alunos, setAlunos] = useState([]); // Define o estado inicial para alunos
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState(null);

  // Função para buscar os alunos do backend
  const fetchAlunos = async () => {
    try {
      const response = await fetch("http://localhost:5000/alunos");
      if (!response.ok) {
        throw new Error("Erro ao buscar os alunos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os alunos:", error);
      return [];
    }
  };

  // Carrega os dados dos alunos ao montar o componente
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosAlunos = await fetchAlunos();
        setAlunos(dadosAlunos);
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    };

    carregarDados();
  }, []);

  const handleEdit = (aluno) => {
    setSelectedAluno(aluno);
    setIsEditModalOpen(true);
  };

  const handleDelete = (aluno) => {
    setSelectedAluno(aluno);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedAluno(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedAluno(null);
  };

  const confirmDelete = () => {
    alert(`Cliente ${selectedAluno.nome} excluído com sucesso!`);
    setIsDeleteModalOpen(false);
    setSelectedAluno(null);
  };

  return (
    <div className="tabela-alunos">
      <h2>Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Gênero</th>
            <th>Contato</th>
            <th>Email</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={aluno.cpf}>
              <td>{index + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.genero || "Não informado"}</td>
              <td>{aluno.telefone || "Não informado"}</td>
              <td>{aluno.email || "Não informado"}</td>
              <td>{aluno.status || "Ativo"}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(aluno)}>
                  ✏️
                </button>
                <button className="btn-delete" onClick={() => handleDelete(aluno)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && (
        <div className="modal_e">
          <div className="modal-content_e">
            <h3>Editar: {selectedAluno?.nome}</h3>
            <ConfiguraPerfil aluno={selectedAluno} />
            <button className="btn-close_e" onClick={closeEditModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Tem certeza que deseja excluir?</h3>
            <p>
              Cliente: <strong>{selectedAluno?.nome}</strong>
            </p>
            <div className="modal-buttons">
              <button className="btn-cancel" onClick={closeDeleteModal}>
                Cancelar
              </button>
              <button className="btn-confirm" onClick={confirmDelete}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabAlunos;
