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

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Teste de conexão ao banco de dados
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao conectar ao banco de dados:", err.stack);
  }
  console.log("Conectado ao banco de dados!");
  release();
});

// Middleware para autenticação JWT
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

// Rota de login
app.post("/login", async (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ message: "CPF e senha são obrigatórios" });
  }

  try {
    // Buscar o usuário no banco de dados
    const result = await pool.query("SELECT * FROM pessoas WHERE cpf = $1", [cpf]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    // Verificar a senha
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: user.id_pessoa, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

// Rota protegida para pegar dados do usuário
app.get("/user", authenticateJWT, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query("SELECT * FROM pessoas WHERE id_pessoa = $1", [userId]);
    if (result.rows.length > 0) {
      return res.json({ nome: result.rows[0].nome });
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (err) {
    console.error("Erro ao consultar usuário:", err);
    res.status(500).json({ message: "Erro ao consultar dados do usuário" });
  }
});

// Inicializando o servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
