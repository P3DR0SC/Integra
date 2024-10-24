const express = require ('express');

const router = express.Router();

router.post("/cadastro", (req,res) => {
    // const nome=req.body.nome;
    res.send("entrou")
    console.log("entro")
});

module.exports = router;