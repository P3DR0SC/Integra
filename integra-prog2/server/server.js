const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


const usuario =require("./routes/usuario");
app.use("/usuario", usuario);

// Defina suas rotas da API
app.get('/home', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const professor =require("./routes/professor");
app.use("/professor", professor);

const professor =require("./routes/");
app.use("/professor", professor);



// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
