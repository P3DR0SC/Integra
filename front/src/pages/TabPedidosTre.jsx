import React, { useState } from "react";
import ConfiguraPerfil from "./ConfigPerfil";
import "../styles/ConfigPerfil.css";

const alunos = [
  { id: 1, nome: "Willian Mathews", cpf: 23, genero: "Masculino", contato: "0987654321", email: "willian@test.com", status: "ativo" },
  { id: 2, nome: "Adam Bradley", cpf: 28, genero: "Masculino", contato: "0987654322", email: "adam@test.com", status: "inativo" },
  { id: 3, nome: "Nicole Sellers", cpf: 36, genero: "Feminino", contato: "0987654323", email: "nicole@test.com", status: "ativo" },
];

const TabAlunos = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState(null);

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
            <tr key={aluno.id}>
              <td>{index + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.genero}</td>
              <td>{aluno.contato}</td>
              <td>{aluno.email}</td>
              <td>{aluno.status}</td>
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
            <ConfiguraPerfil />
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
