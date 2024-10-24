const express = require ('express');

const router = express.Router();

router.post("/cadastro", (req,res) => {
    // const nome=req.body.nome;
    res.send("entrou")
    console.log("entro")
});

router.post("/professor", (req,res) => {
    const {nome, email, senha, cpf, dataNasciemento, telefone} = req.body;

    res.send(nome +  " " + email + " " + senha +  " " + cpf + " " + dataNasciemento + " " + telefone);
  
});

module.exports = router;