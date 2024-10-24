const express = require ('express');

const router = express.Router();
router.use(express.json());

router.post("/login", (req,res) => {
    const nome=req.body.nome;
    const senha=req.body.senha;


    res.send("Seje bem vindo!")
});


module.exports = router;