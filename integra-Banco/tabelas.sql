CREATE TABLE if not exists pessoas (
    id_pessoa SERIAL PRIMARY KEY,      -- Identificador único, autoincrementado
    nome VARCHAR(100) NOT NULL,        -- Nome da pessoa
    fone VARCHAR(15),                  -- Telefone (formato flexível)
    email VARCHAR(100) UNIQUE NOT NULL,-- Email único, obrigatório
    cpf CHAR(11) UNIQUE NOT NULL,      -- CPF com exatamente 11 caracteres, único
    genero CHAR(1),                    -- Gênero ('M', 'F', ou outros, conforme necessário)
    senha VARCHAR(255) NOT NULL,       -- Senha (armazenada como hash)
    cargo INTEGER NOT NULL             -- Cargo de usuario, recebe uma chave estrangeira de cargo
    CONSTRAINT fk_cargo FOREIGN KEY (cargo) REFERENCES cargo (id_cargo) ON DELETE CASCADE
);

CREATE TABLE if not exists avaliacao (
    id_av SERIAL PRIMARY KEY,                     -- Identificador único, autoincrementado
    id_pessoa_av INT NOT NULL,                   -- Chave estrangeira para a tabela 'pessoas'
    peso DECIMAL(5, 2) NOT NULL,                 -- Peso com até 5 dígitos (ex: 999.99)
    altura DECIMAL(4, 2) NOT NULL,               -- Altura com até 4 dígitos (ex: 2.50)
    idade INT NOT NULL,                          -- Idade em anos
    ombro DECIMAL(5, 2),                         -- Medida do ombro
    antebraco_esquerdo DECIMAL(5, 2),            -- Medida do antebraço esquerdo
    antebraco_direito DECIMAL(5, 2),             -- Medida do antebraço direito
    braco_relaxado_esquerdo DECIMAL(5, 2),       -- Medida do braço relaxado esquerdo
    braco_relaxado_direito DECIMAL(5, 2),        -- Medida do braço relaxado direito
    braco_contraido_esquerdo DECIMAL(5, 2),      -- Medida do braço contraído esquerdo
    braco_contraido_direito DECIMAL(5, 2),       -- Medida do braço contraído direito
    coxa_esquerda DECIMAL(5, 2),                 -- Medida da coxa esquerda
    coxa_direita DECIMAL(5, 2),                  -- Medida da coxa direita
    panturrilha_esquerda DECIMAL(5, 2),          -- Medida da panturrilha esquerda
    panturrilha_direita DECIMAL(5, 2),           -- Medida da panturrilha direita
    peitoral DECIMAL(5, 2),                      -- Medida do peitoral
    abdomen DECIMAL(5, 2),                       -- Medida do abdômen
    cintura DECIMAL(5, 2),                       -- Medida da cintura
    quadril DECIMAL(5, 2),                       -- Medida do quadril
    CONSTRAINT fk_pessoa FOREIGN KEY (id_pessoa_av) REFERENCES pessoas (id_pessoa) ON DELETE CASCADE
);

CREATE TABLE if not exists treinos (
    id_treino SERIAL PRIMARY KEY,     -- Identificador único, autoincrementado
    nome_treino VARCHAR(100) NOT NULL,-- Nome do treino (máximo de 100 caracteres)
    video VARCHAR(255)               -- Link para o vídeo do treino (máximo de 255 caracteres)
);

CREATE TABLE if not exists treino_aluno (
    id_treino_aluno SERIAL PRIMARY KEY,   -- Identificador único para a tabela
    id_treino INT NOT NULL,               -- Chave estrangeira para a tabela 'treinos'
    id_pessoa INT NOT NULL,               -- Chave estrangeira para a tabela 'pessoas'
    descricao TEXT,                       -- Descrição do treino
    rep_serie VARCHAR(50),                -- Repetições e séries (ex: "3x10", "4x15")
    video VARCHAR(255),                   -- Link para o vídeo do treino
    CONSTRAINT fk_treino FOREIGN KEY (id_treino) REFERENCES treinos(id_treino) ON DELETE CASCADE,
    CONSTRAINT fk_pessoa FOREIGN KEY (id_pessoa) REFERENCES pessoas(id_pessoa) ON DELETE CASCADE
);

CREATE TABLE  if not exists pagamentos (
    id_pessoa INT NOT NULL,           -- Chave estrangeira para a tabela 'pessoas'
    valor DECIMAL(10, 2) NOT NULL,    -- Valor do pagamento (máximo de 10 dígitos, sendo 2 após a vírgula)
    status VARCHAR(50) NOT NULL,      -- Status do pagamento (ex: 'Pendente', 'Pago', 'Cancelado')
    data_inicio TIMESTAMP NOT NULL,   -- Data de início do pagamento
    data_fim TIMESTAMP NOT NULL,   -- Data de fim do pagamento
    CONSTRAINT fk_pessoa FOREIGN KEY (id_pessoa) REFERENCES pessoas(id_pessoa) ON DELETE CASCADE
);

CREATE TABLE if not exists cargos (
    id_cargo SERIAL PRIMARY KEY,   -- Identificador único para o cargo
    cargo VARCHAR(100) NOT NULL  -- Nome do cargo (máximo de 100 caracteres)
);

CREATE TABLE if not exists desvio_postura (
    id_pessoa_ddp INT NOT NULL,                          -- Chave estrangeira para a tabela 'pessoas'
    hiperlordose_lombar BOOLEAN,                         -- Indica presença de hiperlordose lombar (verdadeiro ou falso)
    hiperlordose_cervical BOOLEAN,                       -- Indica presença de hiperlordose cervical
    hipercifose BOOLEAN,                                 -- Indica presença de hipercifose
    escoliose BOOLEAN,                                   -- Indica presença de escoliose
    rotacao_interna_ombros BOOLEAN,                      -- Indica presença de rotação interna de ombros
    triangulo_tales_assimetrico BOOLEAN,                 -- Indica presença de triângulo de Tales assimétrico
    protacao_escapular BOOLEAN,                          -- Indica presença de protação escapular
    retracao_escapular BOOLEAN,                          -- Indica presença de retração escapular
    depressao_escapular BOOLEAN,                         -- Indica presença de depressão escapular
    encurtamento_trapezio BOOLEAN,                       -- Indica encurtamento do trapézio
    ombros_assimetricos BOOLEAN,                         -- Indica presença de ombros assimétricos
    desvio_quadril BOOLEAN,                              -- Indica presença de desvio de quadril
    assimetria_quadril BOOLEAN,                          -- Indica presença de assimetria de quadril
    protusao_abdominal BOOLEAN,                          -- Indica presença de protusão abdominal
    anteversao_pelvica BOOLEAN,                          -- Indica presença de anteversão pélvica
    retroversao_pelvica BOOLEAN,                         -- Indica presença de retroversão pélvica
    joelhos BOOLEAN,                                     -- Indica presença de problemas nos joelhos
    genu_flexo BOOLEAN,                                  -- Indica genu flexo (joelho dobrado para frente)
    genu_recurvado BOOLEAN,                              -- Indica genu recurvado (joelho para trás)
    genu_valgo BOOLEAN,                                  -- Indica genu valgo (joelho para dentro)
    genu_varo BOOLEAN,                                   -- Indica genu varo (joelho para fora)
    pe_abduto BOOLEAN,                                   -- Indica pé abduto
    pe_valgo BOOLEAN,                                    -- Indica pé valgo (pé para dentro)
    pe_calcaneo BOOLEAN,                                 -- Indica pé calcâneo (pé com calcanhar elevado)
    pe_varo BOOLEAN,                                     -- Indica pé varo (pé para fora)
    pe_plano BOOLEAN,                                    -- Indica pé plano (falta de arco)
    pe_cavo BOOLEAN,                                     -- Indica pé cavo (arco muito elevado)
    pe_equino BOOLEAN,                                   -- Indica pé equino (movimento limitado de flexão plantar)
    CONSTRAINT fk_pessoa FOREIGN KEY (id_pessoa_ddp) REFERENCES pessoas(id_pessoa) ON DELETE CASCADE
);

