const express = require ('express');
const router = express.Router();
router.use(express.json());


router.post("/pagamento", (req, res) => {
    const { nome } = req.body;

    console.log(nome); 
    res.send(nome);
});

router.post("/conta", (req, res) => {
    const { nome } = req.body;

    console.log('está é a conta do ' + nome);
    res.send('está é a conta do ' + nome); 
});

router.post("/solicita-treino", (req, res) => {
    const { nome } = req.body;

    console.log(nome + ' está preste a solicitar um treino');
    res.send(nome + ' está preste a solicitar um treino'); 
});

router.post("/atribuir-treino", (req, res) => {
    const { nome } = req.body;

    console.log({nome} + 'está preste a atribuir um treino');
    res.send({nome} + 'está preste a atribuir um treino');
     
});

router.get("/aluno", (req,res) => {
    const nome=req.body.nome;
    const cpf=req.body.cpf;
    const matricula=res.body.matricula;
    const email=res.body.email;
    const telefone=res.body.telefone;
    const nascimento=res.body.nascimento;
    res.send("Lista de Alunos");
});

module.exports = router;