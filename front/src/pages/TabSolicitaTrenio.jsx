import React, { useState, useEffect } from "react";
import ConfiguraPerfil from "./ConfigPerfil";
import "../styles/ConfigPerfil.css";

const TabSolicitaTreino = () => {
  const [Treinos, setTreinos] = useState([]); // Define o estado inicial para Treinos
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTreino, setselectedTreino] = useState(null);

  // Função para buscar os Treinos do backend
  const fetchTreinos = async () => {
    try {
      const response = await fetch("http://localhost:5000/Treinos");
      if (!response.ok) {
        throw new Error("Erro ao buscar os Treinos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os Treinos:", error);
      return [];
    }
  };

  // Carrega os dados dos Treinos ao montar o componente
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosTreino = await fetchTreinos();
        setTreinos(dadosTreino);
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    };

    carregarDados();
  }, []);

  const handleEdit = (Treino) => {
    setselectedTreino(Treino);
    setIsEditModalOpen(true);
  };

  const handleDelete = (Treino) => {
    setselectedTreino(Treino);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setselectedTreino(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setselectedTreino(null);
  };

  const confirmDelete = () => {
    alert(`Cliente ${selectedTreino.nome} excluído com sucesso!`);
    setIsDeleteModalOpen(false);
    setselectedTreino(null);
  };

  return (
    <div className="tabela-Treinos">
      <h2>Lista de Treinos</h2>
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
          {Treinos.map((Treino, index) => (
            <tr key={Treino.cpf}>
              <td>{index + 1}</td>
              <td>{Treino.nome}</td>
              <td>{Treino.cpf}</td>
              <td>{Treino.genero || "Não informado"}</td>
              <td>{Treino.fone || "Não informado"}</td>
              <td>{Treino.email || "Não informado"}</td>
              <td>{Treino.status || "Ativo"}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(Treino)}>
                  ✏️
                </button>
                <button className="btn-delete" onClick={() => handleDelete(Treino)}>
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
            <h3>Editar: {selectedTreino?.nome}</h3>
            <ConfiguraPerfil Treino={selectedTreino} />
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
              Cliente: <strong>{selectedTreino?.nome}</strong>
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

export default TabSolicitaTreino;
