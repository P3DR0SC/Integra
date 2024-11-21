const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const { Pool } = require("pg");
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

const pgp = require("pg-promise")({});

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
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
  console.log("Server is running on port "+ PORT);
});

