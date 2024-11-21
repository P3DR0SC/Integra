const express = require('express');
const router = express.Router();
router.use(express.json());
const { Pool } = require("pg");  // Usando apenas o pacote 'pg'
require("dotenv").config({ path: "../banco/.env" });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error("Error connecting to the database:", err.stack);
    }
    console.log("Connected to the database!");
    release(); // Libera a conexão de volta para o pool
});

// Rota POST para pagamento
router.post("/pagamento", (req, res) => {
    const { nome, valor, data } = req.body;
    res.send(`Conta no nome de ${nome} paga no valor de ${valor} com data de vencimento ${data}`);
});

// Rota GET para listar alunos
router.get("/alunos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM aluno;"); // Usando pool.query no lugar de db.any
        console.log(result.rows); // Acessando os dados com result.rows
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar alunos:", err);
        res.status(500).send("Erro ao consultar alunos");
    }
});

// Rota POST para adicionar aluno
router.post("/alunos", async (req, res) => {
    const { nome, matricula, sobrenome, nome_completo } = req.body;
    try {
        await pool.query("INSERT INTO aluno (nome, matricula, sobrenome, nome_completo) VALUES ($1, $2, $3, $4);",
            [nome, matricula, sobrenome, nome_completo]);
        res.send("Aluno inserido com sucesso!");
    } catch (err) {
        console.error("Erro ao inserir aluno:", err);
        res.status(500).send("Erro ao inserir aluno");
    }
});

// Rota GET para listar estoque
router.get("/estoque", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pessoas;"); // Usando pool.query
        console.log(result.rows); // Acessando os dados com result.rows
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar estoque:", err);
        res.status(500).send("Erro ao consultar estoque");
    }
});

// Rota POST para adicionar produto no estoque
router.post("/estoque", async (req, res) => {
    const { descricao, quantidade, valor } = req.body;
    try {
        await pool.query("INSERT INTO estoque (descricao, quantidade, valor) VALUES ($1, $2, $3);",
            [descricao, quantidade, valor]);
        res.send("Produto inserido no estoque com sucesso!");
    } catch (err) {
        console.error("Erro ao inserir produto no estoque:", err);
        res.status(500).send("Erro ao inserir produto no estoque");
    }
});

// Rota POST para solicitar treino
router.post("/solicita-treino", (req, res) => {
    const { nome } = req.body;
    console.log(`${nome} está prestes a solicitar um treino`);
    res.send(`${nome} está prestes a solicitar um treino`);
});

// Rota GET para listar pessoas (ou alunos, dependendo da tabela)
router.get("/solicita-treino", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pessoas;"); // Usando pool.query
        console.log(result.rows);
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar treino:", err);
        res.status(500).send("Erro ao consultar treino");
    }
});

// Rota POST para atribuir treino
router.post("/atribuir-treino", (req, res) => {
    const { nome, treino } = req.body;
    console.log(`${nome} está prestes a atribuir um treino de ${treino}`);
    res.send(`${nome} está prestes a atribuir um treino`);
});

// Rota GET para aluno (corrigindo nome e acesso a parâmetros)
router.get("/aluno", (req, res) => {
    const { nome, cpf, matricula, email, telefone, nascimento } = req.query; // Alterando para query (GET)
    console.log(`Aluno: ${nome}, CPF: ${cpf}, Matrícula: ${matricula}`);
    res.send("Lista de Alunos");
});

// Rota POST para professor
router.post("/professor", (req, res) => {
    const { nome, email, senha, cpf, dataNascimento, telefone } = req.body;
    res.send(`${nome} ${email} ${senha} ${cpf} ${dataNascimento} ${telefone}`);
});

module.exports = router;
