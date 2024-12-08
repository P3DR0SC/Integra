// backend/server.js
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao conectar ao banco de dados:", err.stack);
  }
  console.log("Conectado ao banco de dados!");
  release();
});

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado" });
    }
    req.user = user;
    next();
  });
};

app.get('/historico_peso', async (req, res) => {
  const result = await pool.query("SELECT * FROM pessoas LIMIT 1");
    const hist = result.rows[0];
    console.log(hist);
    if (!hist) {
      return res.status(401).json({ message: "Sem hist irmão" });
    }
  res.json(hist);
});

app.post("/login", async (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ message: "CPF e senha são obrigatórios" });
  }

  try {
    const result = await pool.query("SELECT * FROM pessoas WHERE cpf = $1", [cpf]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: user.id_pessoa, email: user.email, cargo: user.cargo }, 
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

app.get("/user", authenticateJWT, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query("SELECT * FROM pessoas WHERE id_pessoa = $1", [userId]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      return res.json({ nome: user.nome, cargo: user.cargo , id: user.id_pessoa_av});
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (err) {
    console.error("Erro ao consultar usuário:", err);
    res.status(500).json({ message: "Erro ao consultar dados do usuário" });
  }
});


app.get("/alunos", async (req, res) => {
  try {
    const result = await pool.query("SELECT nome, cpf, fone, email, cpf, genero, id_pessoa FROM pessoas where cargo = 3");
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erro no servidor ao buscar treinos.");
  }
});

app.get("/Profs", async (req, res) => {
  try {
    const result = await pool.query("SELECT nome, cpf, fone, email, cpf, genero FROM pessoas where cargo = 2");
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erro no servidor ao buscar treinos.");
  }
});

app.get("/InfosAV", async (req, res) => {
  const {id_pessoa} = req.body;
  try {
    const result = await pool.query("SELECT * FROM avaliacao where id_pessoa_av = $1", [id_pessoa]);
    res.json(result.rows); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erro no servidor ao buscar treinos.");
  }
});

app.post("/add_treino_aluno", async (req, res) => {
  try {

    const { id_pessoa, id_treino, video, descricao, rep, serie, peso } = req.body;

    if (!id_pessoa || !id_treino || !video || !descricao || !rep || !serie || !peso) {
      res("Campo faltando ou inválido:", { id_pessoa, id_treino, video, descricao, rep, serie, peso });
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const query = `
      INSERT INTO treino_aluno (id_pessoa, id_treino, video, descricao, rep, serie, peso)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    await pool.query(query, [id_pessoa, id_treino, video, descricao, rep, serie, peso]);

    return res.status(201).json({ message: "Treino cadastrado com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar treino para o aluno:", err.message);
    res.status(500).send("Erro no servidor ao salvar treino.");
  }
});

app.post('/add_av', async (req, res) => {
  try {
      console.log("Dados recebidos no backend:", req.body); // Imprime os dados que estão sendo recebidos

      // Verifique os tipos de dados antes de prosseguir
      if (typeof req.body.peso !== 'number' || typeof req.body.altura !== 'number') {
          return res.status(400).send("Peso e altura devem ser números");
      }

      const { 
        peso, 
        altura, 
        idade, 
        ombro, 
        antebracoEsquerdo, 
        antebracoDireito, 
        bracoRelachadoDireito, 
        bracoRelachadoEsquerdo, 
        coxaEsquerda, 
        coxaDireita, 
        panturrilhaEsquerda, 
        panturrilhaDireita, 
        peitoral, 
        abdomen, 
        cintura, 
        quadril, 
        id_pessoa_av, 
        id_pessoa_trei
    } = req.body;

      // Verifica se os valores necessários estão presentes
      const values = [
        id_pessoa_av, peso, altura, idade, ombro, antebracoEsquerdo, antebracoDireito,
        bracoRelachadoEsquerdo, bracoRelachadoDireito, coxaEsquerda, coxaDireita,
        panturrilhaEsquerda, panturrilhaDireita, peitoral, abdomen, cintura, quadril, 
        new Date(), 
        id_pessoa_trei
      ];

      const query = `
        INSERT INTO avaliacoes 
        (id_pessoa_av, peso, altura, idade, ombro, antebraco_esquerdo, antebraco_direito, 
        braco_relaxado_esquerdo, braco_relaxado_direito, coxa_esquerda, coxa_direita, 
        panturrilha_esquerda, panturrilha_direita, peitoral, abdomen, cintura, quadril, data, id_pessoa_trei)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      `;

      await pool.query(query, values);

      res.status(200).send("Avaliação cadastrada com sucesso!");
  } catch (err) {
      console.error("Erro ao cadastrar avaliação:", err);
      res.status(400).send("Erro ao cadastrar avaliação.");
  }
});


app.get("/treinos", async (req, res) => {
  try {
    const result = await pool.query("SELECT id_treino, nome_treino, video FROM treinos");

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Nenhum treino encontrado" });
    }

    res.status(200).json(result.rows); // Retorna somente as linhas com os treinos
  } catch (err) {
    console.error("Erro ao buscar treinos:", err.message);
    res.status(500).send("Erro no servidor ao buscar treinos.");
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
