import React, { useState, useEffect } from "react";
import Select from "react-select";  // Importando o react-select
import "../styles/FormMedidasPostura.css";
import { cadastrarAv, fetchAlunos } from "../api/CadastrosAPI";


const FormMedidasPostura = () => {
  const [alunos, setAlunos] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState('');
  const [idPessoaTrei, setIdPessoaTrei] = useState(''); 

  const [formData, setFormData] = useState({
    peso: "",
    altura: "",
    idade: "",
    ombro: "",
    antebracoEsquerdo: "",
    antebracoDireito: "",
    bracoRelachadoEsquerdo: "",
    bracoRelachadoDireito: "",
    bracoContraidoDireito: "",
    bracoContraidoEsquerdo: "",
    coxaEsquerda: "",
    coxaDireita: "",
    panturrilhaDireita: "",
    panturrilhaEsquerda: "",
    peitoral: "",
    abdomen: "",
    cintura: "",
    quadril: "",
    hiperlordoseLombar: false,
    hiperlordoseCervical: false,
    hipercifose: false,
    escoliose: false,
    rotacaoInternaOmbros: false,
    trianguloTalesAssimetrico: false,
    protacaoEscapular: false,
    retracaoEscapular: false,
    depressaoEscapular: false,
    encurtamentoTrapezio: false,
    ombrosAssimetricos: false,
    desvioQuadril: false,
    assimetriaQuadril: false,
    protusaoAbdominal: false,
    anteversaoPelvica: false,
    retroversaoPelvica: false,
    genuFlexo: false,
    genuRecurvado: false,
    genuValgo: false,
    genuVaro: false,
    peAbduzido: false,
    peValgo: false,
    peCalcaneo: false,
    peVaro: false,
    pePlano: false,
    peCavo: false,
    peEquino: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const dadosCompletos = {
      ...formData,
      idPessoaTrei,        
      id_pessoa_av: alunoSelecionado,   
      peso: parseInt(formData.peso, 10), // Convertendo para inteiro
      altura: parseInt(formData.altura, 10), // Convertendo para inteiro
      idade: parseInt(formData.idade, 10), // Convertendo para inteiro
      ombro: parseInt(formData.ombro, 10), // Convertendo para inteiro
      antebracoEsquerdo: parseInt(formData.antebracoEsquerdo, 10), // Convertendo para inteiro
      antebracoDireito: parseInt(formData.antebracoDireito, 10), // Convertendo para inteiro
      bracoRelachadoEsquerdo: parseInt(formData.bracoRelachadoEsquerdo, 10), // Convertendo para inteiro
      bracoRelachadoDireito: parseInt(formData.bracoRelachadoDireito, 10), // Convertendo para inteiro
      coxaEsquerda: parseInt(formData.coxaEsquerda, 10), // Convertendo para inteiro
      coxaDireita: parseInt(formData.coxaDireita, 10), // Convertendo para inteiro
      panturrilhaDireita: parseInt(formData.panturrilhaDireita, 10), // Convertendo para inteiro
      panturrilhaEsquerda: parseInt(formData.panturrilhaEsquerda, 10), // Convertendo para inteiro
      peitoral: parseInt(formData.peitoral, 10), // Convertendo para inteiro
      abdomen: parseInt(formData.abdomen, 10), // Convertendo para inteiro
      cintura: parseInt(formData.cintura, 10), // Convertendo para inteiro
      quadril: parseInt(formData.quadril, 10), // Convertendo para inteiro 
    };
    
    console.log("Dados enviados:", dadosCompletos);
    try {
      console.log("Enviando dados ao backend:", dadosCompletos);
      const response = await cadastrarAv(dadosCompletos);  
      console.log("Resposta do servidor:", response);
      alert("Avaliação cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro ao cadastrar a avaliação. Tente novamente.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlunos();
        setAlunos(data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setIdPessoaTrei(decoded.id);  
    }

    fetchData();
  }, []);

  const alunosOptions = alunos.map((aluno) => ({
    value: aluno.id_pessoa,
    label: `${aluno.nome} - ${aluno.cpf}`,
  }));

  const handleAlunoChange = (selectedOption) => {
    setAlunoSelecionado(selectedOption ? selectedOption.value : '');  
  };

  return (
    <form onSubmit={handleSubmit} className="form-medidas">
      <h2>Formulário de Medidas e Avaliação Postural</h2>

      <div style={{ margin: '20px' }}>
        <h2>Selecione o Aluno</h2>
        <div>
          <label>Aluno:</label>
          <Select
            options={alunosOptions}  
            onChange={handleAlunoChange}  
            value={alunosOptions.find(option => option.value === alunoSelecionado)} 
            placeholder="Pesquise e selecione um aluno"
          />
        </div>
      </div>
      <h3>Dados Físicos</h3>
      <label>
        Peso (kg):
        <input
          type="number"
          name="peso"
          value={formData.peso}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Altura (cm):
        <input
          type="number"
          name="altura"
          value={formData.altura}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Idade:
        <input
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleInputChange}
        />
      </label>
      <h3>Medidas Corporais</h3>
      {[
        "ombro", "antebracoEsquerdo", "antebracoDireito", "bracoRelachadoEsquerdo", 
        "bracoRelachadoDireito", "bracoContraidoEsquerdo", "bracoContraidoDireito", 
        "coxaEsquerda", "coxaDireita", "panturrilhaEsquerda", "panturrilhaDireita", 
        "peitoral", "abdomen", "cintura", "quadril"
      ].map((campo) => (
        <label key={campo}>
          {campo.replace(/([A-Z])/g, " $1").toUpperCase()} (cm):
          <input
            type="number"
            name={campo}
            value={formData[campo]}
            onChange={handleInputChange}
          />
        </label>
      ))}

      {/* Sessão de Avaliação Postural */}
      <h3>Avaliação Postural</h3>
      {[
        "hiperlordoseLombar", "hiperlordoseCervical", "hipercifose", "escoliose", 
        "rotacaoInternaOmbros", "trianguloTalesAssimetrico", "protacaoEscapular", 
        "retracaoEscapular", "depressaoEscapular", "encurtamentoTrapezio", 
        "ombrosAssimetricos", "desvioQuadril", "assimetriaQuadril", "protusaoAbdominal", 
        "anteversaoPelvica", "retroversaoPelvica", "genuFlexo", "genuRecurvado", 
        "genuValgo", "genuVaro", "peAbduzido", "peValgo", "peCalcaneo", "peVaro", 
        "pePlano", "peCavo", "peEquino"
      ].map((campo) => (
        <label key={campo}>
          {campo.replace(/([A-Z])/g, " $1").toUpperCase()}:
          <input
            type="checkbox"
            name={campo}
            checked={formData[campo]}
            onChange={handleInputChange}
          />
        </label>
      ))}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormMedidasPostura;
