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

export const fetchInfos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/InfosAV`);
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
export const fetchProfs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Profs`);
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
    const response = await fetch(`${API_BASE_URL}/treino`, {
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

export const cadastrarAv = async (dados) => {
  const response = await fetch("http://localhost:5000/add_av", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),  
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar avaliação");
  }

  return await response.json();
};

export const cadastrarTreinoAluno = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add_treino_aluno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Erro ao Atribuir treino.");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};