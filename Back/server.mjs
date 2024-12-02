import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [
  { id: 1, usuario: "user@example.com", password: bcrypt.hashSync("123456", 10) },
];

// Configuração da estratégia local
passport.use(
  new LocalStrategy({ usernameField: "usuario" }, (usuario, password, done) => {
    const user = users.find((u) => u.usuario === usuario); // Match correto
    if (!user) return done(null, false, { message: "Usuário não encontrado" });
    if (!bcrypt.compareSync(password, user.password))
      return done(null, false, { message: "Senha incorreta" });

    return done(null, user);
  })
);

// Middleware para proteger rotas
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    req.user = user;
    next();
  });
};

// Rota de login
app.post("/login", (req, res, next) => {
  console.log("Credenciais recebidas:", req.body); // Verifique o que o cliente enviou
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      console.error("Erro do Passport:", err);
      return res.status(500).send(err);
    }
    if (!user) {
      console.warn("Erro de autenticação:", info);
      return res.status(401).send(info);
    }

    const token = jwt.sign({ id: user.id, email: user.usuario }, "secreta", {
      expiresIn: "1h",
    });
    console.log("Token gerado:", token);
    return res.json({ token });
  })(req, res, next);
});


// Rota protegida (exemplo)
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "Você acessou uma rota protegida!", user: req.user });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
