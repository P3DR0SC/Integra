const express = require('express');
const router = express.Router();
router.use(express.json());
const { Pool } = require("pg");  
require("dotenv").config({ path: "../.env" });

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
    release(); 
});

router.get("/treinos", async (req, res) => {
    try {
      const result = await pool.query("SELECT id_treino, nome_treino, video FROM treinos");
      res.json(result.rows); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Erro no servidor ao buscar treinos.");
    }
  });

router.get("/alunos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM aluno;");
        console.log(result.rows); 
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar alunos:", err);
        res.status(500).send("Erro ao consultar alunos");
    }
});

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

router.get("/estoque", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pessoas;"); 
        console.log(result.rows); 
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar estoque:", err);
        res.status(500).send("Erro ao consultar estoque");
    }
});

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

router.post("/solicita-treino", (req, res) => {
    const { nome } = req.body;
    console.log(`${nome} está prestes a solicitar um treino`);
    res.send(`${nome} está prestes a solicitar um treino`);
});

router.get("/solicita-treino", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pessoas;"); 
        console.log(result.rows);
        res.send(result.rows);
    } catch (err) {
        console.error("Erro ao consultar treino:", err);
        res.status(500).send("Erro ao consultar treino");
    }
});

app.post("/add_treino_aluno", async (req, res) => {
  try {
    const { id_pessoa, id_treino, treino, descricao, rep, serie, peso } = req.body;

    if (!id_pessoa || !id_treino || !treino || !descricao || !rep || !serie || !peso) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const query = `
      INSERT INTO treino_aluno (id_pessoa, id_treino, treino, descricao, rep, serie)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    await pool.query(query, [id_pessoa, id_treino, treino, descricao, rep, serie]);

    return res.status(201).json({ message: "Treino cadastrado com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar treino para o aluno:", err.message);
    res.status(500).send("Erro no servidor ao salvar treino.");
  }
});

app.get("/alunos", async (req, res) => {
    try {
      const result = await pool.query("SELECT nome, cpf FROM pessoas where cargo = 3");
      res.json(result.rows); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Erro no servidor ao buscar treinos.");
    }
  });



router.post("/professor", (req, res) => {
    const { nome, email, senha, cpf, dataNascimento, telefone } = req.body;
    res.send(`${nome} ${email} ${senha} ${cpf} ${dataNascimento} ${telefone}`);
});

module.exports = router;
