import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
});


const User = sequelize.define(
  "pessoas",
  {
    id_pessoa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

(async () => {
  const users = await User.findAll(); // Busca todos os usuários

  for (const user of users) {
    if (!user.senha.startsWith("$2b$")) { // Verifica se a senha já está criptografada
      const hashedPassword = await bcrypt.hash(user.senha, 10); // Criptografa a senha
      user.senha = hashedPassword; // Atualiza a senha no objeto
      await user.save(); // Salva as alterações no banco
    }
  }

  console.log("Senhas criptografadas com sucesso!");
})();

// Rota de login com CPF e senha
app.post("/login", async (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ message: "CPF e senha são obrigatórios" });
  }

  try {
    // Buscar o usuário no banco de dados usando o CPF
    const user = await User.findOne({ where: { cpf } });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    // Verificar se a senha fornecida corresponde à senha criptografada
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(401).json({ message: "Senha incorreta: " + senha  });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user.id_pessoa, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h", // o token expira após 1 hora
    });

    // Retornar o token para o cliente
    return res.json({ token });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.log("Token não fornecido");
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Erro ao verificar o token:", err);
      return res.status(403).json({ message: "Token expirado ou inválido" });
    }

    console.log("Token válido, usuário:", user);
    req.user = user;
    next();
  });
};


// Rota protegida
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "Você acessou uma rota protegida!", user: req.user });
});

const PORT = process.env.PORT || 5000;

(async () => {
  await sequelize.sync(); 
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
})();
