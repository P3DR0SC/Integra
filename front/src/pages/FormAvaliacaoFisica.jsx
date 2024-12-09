import { useState } from "react";
import React from "react";
import "../styles/FormAvaliacaoFisica.css";

const FormAvaliacaoFisica = () => {
  const [formData, setFormData] = useState({
    nomeTreino: "",
    peso: "",
    altura: "",
    idade: "",
    ombro: "",
    antebracoEsq: "",
    antebracoDir: "",
    bracoRelaxadoEsq: "",
    bracoRelaxadoDir: "",
    bracoContraidoEsq: "",
    bracoContraidoDir: "",
    coxaEsq: "",
    coxaDir: "",
    panturrilhaEsq: "",
    panturrilhaDir: "",
    peitoral: "",
    cintura: "",
    rotacaoInternaOmbros: "",
    trianguloTales: "",
    problemasPosturais: "",
    abdomen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="cadastro-dieta">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Medidas</h2>

        <div className="aluno-forms-div">
          <label>
            Nome do Treino:
            <input
              type="text"
              name="nomeTreino"
              value={formData.nomeTreino}
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
          <label>
            Altura:
            <input
              type="text"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="aluno-forms-div">
          <label>
            Idade:
            <input
              type="text"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ombro:
            <input
              type="text"
              name="ombro"
              value={formData.ombro}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Antebraço Esq:
            <input
              type="text"
              name="antebracoEsq"
              value={formData.antebracoEsq}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Antebraço Dir:
            <input
              type="text"
              name="antebracoDir"
              value={formData.antebracoDir}
              onChange={handleChange}
              required
            />
          </label>
        </div>

                <div className="aluno-forms-div">
                    <label>
                    Braço relaxado esquerdo:
                    <input
                        type="text"
                        name="nomeTreino"
                        value={formData.nomeTreino}
                        onChange={handleChange}
                        required
                    />
                    </label>
            
                    <label>
                    Braço relaxado direito:
                    <input
                        type="text"
                        name="nomeTreino"
                        value={formData.nomeTreino}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
            
                <div className="aluno-forms-div">
                  <label>
                  Braço contraído esquerdo:
                    <input
                      type="text"
                      name="nomeTreino"
                      value={formData.nomeTreino}
                      onChange={handleChange}
                      required
                    />
                  </label>
          
                  <label>
                  Braço contraído direito:
                    <input
                      type="text"
                      name="nomeTreino"
                      value={formData.nomeTreino}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
            
              <div className="aluno-forms-div">
                  <label>
                Coxa esquerda:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                Coxa direita:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            
              <div className="aluno-forms-div">
                  <label>
                Panturrilha esquerda:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
        
                <label>
                Panturrilha direita:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="aluno-forms-div">
                <label>
                Peitoral:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
        
                <label>
            Cintura:
              <input
                type="text"
                name="nomeTreino"
                value={formData.nomeTreino}
                onChange={handleChange}
                required
              />
            </label>
              </div>

              <div className="aluno-forms-div">
                  <label>
                Rotação interna de ombros:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
        
                <label>
                Triângulo de Tales assimétrico:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="aluno-forms-div">
                  <label>
                  Quadril e quaisquer outro problemas Hiperlordose lombar
                  Hiperlordose cervical
                  Hipercifose
                  Escoliose:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
        
                <label>
                Abdômen:
                  <input
                    type="text"
                    name="nomeTreino"
                    value={formData.nomeTreino}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="aluno-forms-div">

              </div>
           
    
            <button type="submit">Cadastrar Treino</button>
          </form>
        </div>
    
  )
}

export default FormAvaliacaoFisica