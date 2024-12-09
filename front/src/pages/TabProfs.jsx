<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ConfiguraPerfil from "./ConfigPerfil";
import "../styles/Tab.css";

// Simulação de dados locais
const Pessoas = [
  { id: 1, nome: "Willian Mathews", cpf: 23, genero: "Masculino", contato: "0987654321", email: "willian@test.com" },
  { id: 2, nome: "Adam Bradley", cpf: 28, genero: "Masculino", contato: "0987654322", email: "adam@test.com" },
  { id: 3, nome: "Nicole Sellers", cpf: 36, genero: "Feminino", contato: "0987654323", email: "nicole@test.com" },
];

const TabProfs = () => {
  const [professores, setProfessores] = useState([]); // Estado para armazenar professores
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  // Função para buscar os professores do backend
  const fetchProfessores = async () => {
    try {
      const response = await fetch("http://localhost:5000/profs");
      if (!response.ok) {
        throw new Error("Erro ao buscar os professores");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os professores:", error);
      return [];
    }
  };

  // Carregar dados ao montar o componente
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosProfessores = await fetchProfessores();
        setProfessores(dadosProfessores);
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        setProfessores(Pessoas); // Fallback para dados locais em caso de erro
      }
    };

    carregarDados();
  }, []);

  const handleEdit = (professor) => {
    setSelectedProfessor(professor);
    setIsEditModalOpen(true);
  };

  const handleDelete = (professor) => {
    setSelectedProfessor(professor);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProfessor(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProfessor(null);
  };

  const confirmDelete = () => {
    alert(`Professor ${selectedProfessor.nome} excluído com sucesso!`);
    setIsDeleteModalOpen(false);
    setSelectedProfessor(null);
  };

  return (
    <div className="tabela-professores">
      <h2>Lista de Professores</h2>
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
          {professores.map((professor, index) => (
            <tr key={professor.id}>
              <td>{index + 1}</td>
              <td>{professor.nome}</td>
              <td>{professor.cpf}</td>
              <td>{professor.genero || "Não informado"}</td>
              <td>{professor.fone || "Não informado"}</td>
              <td>{professor.email || "Não informado"}</td>
              <td>{"Ativo"}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(professor)}>
                  ✏️
                </button>
                <button className="btn-delete" onClick={() => handleDelete(professor)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Edição */}
      {isEditModalOpen && (
        <div className="modal_e">
          <div className="modal-content_e">
            <h3>Editar: {selectedProfessor?.nome}</h3>
            <ConfiguraPerfil professor={selectedProfessor} />
            <button className="btn-close_e" onClick={closeEditModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Tem certeza que deseja excluir?</h3>
            <p>
              Professor: <strong>{selectedProfessor?.nome}</strong>
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

export default TabProfs;
=======
import React, { useState, useEffect } from "react";
import ConfigPerfilProfs from "./ConfigPerfilProfs";
import "../styles/Tab.css";
import axios from "axios";  // Importing axios to handle HTTP requests

const TabProfs = () => {
  const [professores, setProfessores] = useState([]); // State to store professors
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  // Fetch professors from the backend
  const fetchProfessores = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profs");
      setProfessores(response.data);  // Setting data in state
    } catch (error) {
      console.error("Erro ao buscar os professores:", error);
      setProfessores([]); // Fallback for error case
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchProfessores();  // Fetch professors when the component is mounted
  }, []);

  // Open edit modal
  const handleEdit = (professor) => {
    setSelectedProfessor(professor);
    setIsEditModalOpen(true);
  };

  // Open delete modal
  const handleDelete = (professor) => {
    setSelectedProfessor(professor);
    setIsDeleteModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProfessor(null);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProfessor(null);
  };

  // Delete the professor
  const confirmDelete = async () => {
    try {
      if (selectedProfessor) {
        console.log(`Deletando professor com ID: ${selectedProfessor.id_pessoa}`);
        const response = await axios.delete(`http://localhost:5000/profs/${selectedProfessor.id_pessoa}`);
        if (response.status === 200) {
          alert(`Professor ${selectedProfessor.nome} excluído com sucesso!`);
          setIsDeleteModalOpen(false);
          setSelectedProfessor(null);
          // Reload the list of professors after deletion
          fetchProfessores();
        }
      }
    } catch (error) {
      console.error("Erro ao excluir o professor:", error);
      alert("Ocorreu um erro ao excluir o professor. Tente novamente.");
    }
  };

  return (
    <div className="tabela-professores">
      <h2>Lista de Professores</h2>
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
          {professores.length > 0 ? (
            professores.map((professor, index) => (
              <tr key={professor.id_pessoa}>
                <td>{index + 1}</td>
                <td>{professor.nome}</td>
                <td>{professor.cpf}</td>
                <td>{professor.genero || "Não informado"}</td>
                <td>{professor.fone || "Não informado"}</td>
                <td>{professor.email || "Não informado"}</td>
                <td>{professor.status || "Ativo"}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(professor)}>
                    ✏️
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(professor)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Nenhum professor encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Editing */}
      {isEditModalOpen && (
        <div className="modal_e">
          <div className="modal-content_e">
            <h3>Editar: {selectedProfessor?.nome}</h3>
            <ConfigPerfilProfs professor={selectedProfessor} />
            <button className="btn-close_e" onClick={closeEditModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal for Delete Confirmation */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Tem certeza que deseja excluir?</h3>
            <p>
              Professor: <strong>{selectedProfessor?.nome}</strong>
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

export default TabProfs;
>>>>>>> origin/feature/celesc
