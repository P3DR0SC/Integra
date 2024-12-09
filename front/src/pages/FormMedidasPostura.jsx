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
      peso: parseInt(formData.peso, 10),
      altura: parseInt(formData.altura, 10),
      idade: parseInt(formData.idade, 10),
      ombro: parseInt(formData.ombro, 10),
      antebracoEsquerdo: parseInt(formData.antebracoEsquerdo, 10),
      antebracoDireito: parseInt(formData.antebracoDireito, 10),
      bracoRelachadoEsquerdo: parseInt(formData.bracoRelachadoEsquerdo, 10),
      bracoRelachadoDireito: parseInt(formData.bracoRelachadoDireito, 10),
      coxaEsquerda: parseInt(formData.coxaEsquerda, 10),
      coxaDireita: parseInt(formData.coxaDireita, 10),
      panturrilhaDireita: parseInt(formData.panturrilhaDireita, 10),
      panturrilhaEsquerda: parseInt(formData.panturrilhaEsquerda, 10),
      peitoral: parseInt(formData.peitoral, 10),
      abdomen: parseInt(formData.abdomen, 10),
      cintura: parseInt(formData.cintura, 10),
      quadril: parseInt(formData.quadril, 10),
    };

    try {
      console.log("Enviando dados ao backend:", dadosCompletos);
      const response = await cadastrarAv(dadosCompletos);
      console.log("Resposta do servidor:", response);
      alert("Avaliação cadastrada com sucesso!");
      setFormData({
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
  
      setAlunoSelecionado(''); 
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
      // Decodificando o JWT manualmente
      const base64Url = token.split('.')[1]; // Obtendo a parte do payload
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Corrigindo o formato Base64Url para Base64
      const decodedPayload = JSON.parse(atob(base64)); // Decodificando e convertendo para JSON
      setIdPessoaTrei(decodedPayload.id); // Definindo o idPessoaTrei
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
