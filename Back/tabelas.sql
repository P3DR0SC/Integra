-- Criação da tabela de cargos
CREATE TABLE cargos (
    id_cargo SERIAL PRIMARY KEY,           -- Identificador único para o cargo
    cargo VARCHAR(100) NOT NULL            -- Nome do cargo (máximo de 100 caracteres)
);

-- Criação da tabela de pessoas
CREATE TABLE pessoas (
    id_pessoa SERIAL PRIMARY KEY,          -- Identificador único, autoincrementado
    nome VARCHAR(100) NOT NULL,            -- Nome da pessoa
    fone VARCHAR(15),                      -- Telefone (formato flexível)
    email VARCHAR(100) UNIQUE NOT NULL,    -- Email único, obrigatório
    cpf CHAR(11) UNIQUE NOT NULL,          -- CPF com exatamente 11 caracteres, único
    genero CHAR(1),                        -- Gênero ('M', 'F', ou outros, conforme necessário)
    senha VARCHAR(255) NOT NULL,           -- Senha (armazenada como hash)
    cargo INTEGER NOT NULL,                -- Cargo do usuário, chave estrangeira para cargos
    CONSTRAINT fk_cargo FOREIGN KEY (cargo) REFERENCES cargos (id_cargo) ON DELETE CASCADE
);

-- Criação da tabela de avaliação
CREATE TABLE avaliacao (
    id_av SERIAL PRIMARY KEY,                        -- Identificador único, autoincrementado
    id_pessoa_av INT NOT NULL,                       -- Chave estrangeira para a tabela 'pessoas'
    peso DECIMAL(5, 2) NOT NULL,                    -- Peso com até 5 dígitos (ex: 999.99)
    altura DECIMAL(4, 2) NOT NULL,                  -- Altura com até 4 dígitos (ex: 2.50)
    idade INT NOT NULL,                             -- Idade em anos
    ombro DECIMAL(5, 2),                            -- Medida do ombro
    antebraco_esquerdo DECIMAL(5, 2),
    antebraco_direito DECIMAL(5, 2),
    braco_relaxado_esquerdo DECIMAL(5, 2),
    braco_relaxado_direito DECIMAL(5, 2),
    braco_contraido_esquerdo DECIMAL(5, 2),
    braco_contraido_direito DECIMAL(5, 2),
    coxa_esquerda DECIMAL(5, 2),
    coxa_direita DECIMAL(5, 2),
    panturrilha_esquerda DECIMAL(5, 2),
    panturrilha_direita DECIMAL(5, 2),
    peitoral DECIMAL(5, 2),
    abdomen DECIMAL(5, 2),
    cintura DECIMAL(5, 2),
    quadril DECIMAL(5, 2),
    CONSTRAINT fk_pessoa_av FOREIGN KEY (id_pessoa_av) REFERENCES pessoas (id_pessoa) ON DELETE CASCADE
);

-- Criação da tabela de treinos
CREATE TABLE treinos (
    id_treino SERIAL PRIMARY KEY,          -- Identificador único, autoincrementado
    nome_treino VARCHAR(100) NOT NULL,     -- Nome do treino
    video VARCHAR(255)                     -- Link para o vídeo do treino
);

-- Relacionamento de treinos com alunos
CREATE TABLE treino_aluno (
    id_treino_aluno SERIAL PRIMARY KEY,      -- Identificador único
    id_treino INT NOT NULL,                  -- Chave estrangeira para treinos
    id_pessoa INT NOT NULL,                  -- Chave estrangeira para pessoas
    descricao TEXT,                          -- Descrição do treino
    rep_serie VARCHAR(50),                   -- Repetições e séries
    video VARCHAR(255),                      -- Link do vídeo
    CONSTRAINT fk_treino_aluno FOREIGN KEY (id_treino) REFERENCES treinos (id_treino) ON DELETE CASCADE,
    CONSTRAINT fk_pessoa_treino FOREIGN KEY (id_pessoa) REFERENCES pessoas (id_pessoa) ON DELETE CASCADE
);

-- Criação da tabela de pagamentos
CREATE TABLE pagamentos (
    id_pagamento SERIAL PRIMARY KEY,         -- Chave primária
    id_pessoa INT NOT NULL,                  -- Chave estrangeira para pessoas
    valor DECIMAL(10, 2) NOT NULL,           -- Valor do pagamento
    status VARCHAR(50) NOT NULL,             -- Status do pagamento
    data_inicio TIMESTAMP NOT NULL,          -- Data de início do pagamento
    data_fim TIMESTAMP NOT NULL,             -- Data de fim do pagamento
    CONSTRAINT fk_pessoa_pagamento FOREIGN KEY (id_pessoa) REFERENCES pessoas (id_pessoa) ON DELETE CASCADE
);

-- Criação da tabela de desvios posturais
CREATE TABLE desvio_postura (
    id_desvio SERIAL PRIMARY KEY,             -- Identificador único
    id_pessoa INT NOT NULL,                   -- Chave estrangeira para pessoas
    hiperlordose_lombar BOOLEAN,
    hiperlordose_cervical BOOLEAN,
    hipercifose BOOLEAN,
    escoliose BOOLEAN,
    rotacao_interna_ombros BOOLEAN,
    triangulo_tales_assimetrico BOOLEAN,
    protacao_escapular BOOLEAN,
    retracao_escapular BOOLEAN,
    depressao_escapular BOOLEAN,
    encurtamento_trapezio BOOLEAN,
    ombros_assimetricos BOOLEAN,
    desvio_quadril BOOLEAN,
    assimetria_quadril BOOLEAN,
    protusao_abdominal BOOLEAN,
    anteversao_pelvica BOOLEAN,
    retroversao_pelvica BOOLEAN,
    joelhos BOOLEAN,
    genu_flexo BOOLEAN,
    genu_recurvado BOOLEAN,
    genu_valgo BOOLEAN,
    genu_varo BOOLEAN,
    pe_abduto BOOLEAN,
    pe_valgo BOOLEAN,
    pe_calcaneo BOOLEAN,
    pe_varo BOOLEAN,
    pe_plano BOOLEAN,
    pe_cavo BOOLEAN,
    pe_equino BOOLEAN,
    CONSTRAINT fk_pessoa_desvio FOREIGN KEY (id_pessoa) REFERENCES pessoas (id_pessoa) ON DELETE CASCADE
);
