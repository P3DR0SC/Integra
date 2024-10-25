const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const pgp = require("pg-promise")({});

const usuarioBD = "progII"; 
const senhaBD = "uffs";
const db =  pgp(`postgres://${usuarioBD}:${senhaBD}@192.168.253.155:5432/progII`);



app.use(express.json());
const usuario =require("./routes/usuario");
app.use("/usuario", usuario);

const login =require("./routes/login");
app.use("/login", login);

const dashboard =require("./routes/dashboard");
app.use("/dashboard", dashboard);

const cadastro =require("./routes/cadastro");
app.use("/cadastro", cadastro);

// Defina suas rotas da API
app.get('/home', (req, res) => {
  res.json({ message: "Hello from the server!" });
});
 
// Inicia o servidor
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});

