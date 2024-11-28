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



INSERT INTO pessoas (nome, fone, email, cpf, genero, senha)
VALUES 
('João Silva', '11999999999', 'joao.silva@example.com', '12345678901', 'M', 'hashed_password'),
('Maria Souza', '21988888888', 'maria.souza@example.com', '10987654321', 'F', 'hashed_password');

INSERT INTO avaliacao (id_pessoa_av, peso, altura, idade, ombro, antebraco_esquerdo, antebraco_direito, 
                       braco_relaxado_esquerdo, braco_relaxado_direito, braco_contraido_esquerdo, 
                       braco_contraido_direito, coxa_esquerda, coxa_direita, panturrilha_esquerda, 
                       panturrilha_direita, peitoral, abdomen, cintura, quadril)
VALUES 
(1, 70.5, 1.75, 25, 45.0, 28.0, 28.5, 30.0, 30.5, 32.0, 33.0, 55.0, 56.0, 35.5, 36.0, 90.0, 80.0, 75.0, 95.0);

INSERT INTO treinos (nome_treino, video)
VALUES 
('Treino Cardio', 'https://www.youtube.com/watch?v=xxxxxx'),
('Treino Musculação', 'https://www.youtube.com/watch?v=yyyyyy');

INSERT INTO treino_aluno (id_treino, descricao, rep_serie, video)
VALUES 
(1, 'Treino de musculação para aumento de força', '3x10', 'https://www.youtube.com/watch?v=xxxxxx'),
(2, 'Treino de resistência cardiovascular', '5x15', 'https://www.youtube.com/watch?v=yyyyyy');

INSERT INTO pagamentos (id_pessoa, valor, status, data_inicio)
VALUES 
(1, 150.00, 'Pago', '2024-11-21 08:00:00'),
(2, 200.00, 'Pendente', '2024-11-22 09:00:00');

INSERT INTO cargos (cargo)
VALUES 
('Administrador'),
('Professor'),
('Aluno');

INSERT INTO desvio_postura (
    id_pessoa_ddp,
    hiperlordose_lombar, hiperlordose_cervical, hipercifose, escoliose, 
    rotacao_interna_ombros, triangulo_tales_assimetrico, protacao_escapular,
    retracao_escapular, depressao_escapular, encurtamento_trapezio, 
    ombros_assimetricos, desvio_quadril, assimetria_quadril, protusao_abdominal, 
    anteversao_pelvica, retroversao_pelvica, joelhos, genu_flexo, genu_recurvado, 
    genu_valgo, genu_varo, pe_abduto, pe_valgo, pe_calcaneo, pe_varo, 
    pe_plano, pe_cavo, pe_equino
) 
VALUES 
(1, TRUE, FALSE, TRUE, FALSE, 
 TRUE, FALSE, TRUE, TRUE, FALSE, 
 TRUE, FALSE, TRUE, TRUE, FALSE, 
 TRUE, FALSE, TRUE, FALSE, TRUE, 
 FALSE, TRUE, FALSE, TRUE, FALSE, 
 TRUE, FALSE, FALSE, TRUE);
