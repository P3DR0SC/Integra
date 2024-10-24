const express = require ('express');

const router = express.Router();
router.use(express.json());

router.get("/aluno", (req,res) => {
    const nome=req.body.nome;
    const cpf=req.body.cpf;
    const matricula=res.body.matricula;
    const email=res.body.email;
    const telefone=res.body.telefone;
    const nascimento=res.body.nascimento;
    res.send("Lista de Alunos");
});

router.post("/cadastro", (req,res) => {
    const nome=req.body.nome;
    const cpf=req.body.cpf;
    const email=res.body.email;
    const telefone=res.body.telefone;
    const nascimento=res.body.nascimento;

    res.send("Cadastro realizado com sucesso!")
});

module.exports = router;