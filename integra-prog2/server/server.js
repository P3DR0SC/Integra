const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para servir os arquivos estáticos do React (compilados no build)
app.use(express.static(path.join(__dirname, 'build')));

// Defina suas rotas da API
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Rota que redireciona todas as requisições para o React (cliente)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
