const API_BASE_URL = "http://localhost:5000";


export const fetchTreinos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/treinos`);
    if (!response.ok) {
      throw new Error("Erro ao buscar treinos.");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const fetchAlunos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/alunos`);
    if (!response.ok) {
      throw new Error("Erro ao buscar alunos.");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const cadastrarTreino = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cadastro/treino-aluno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Erro ao cadastrar treino.");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
