const express = require ('express');

const router = express.Router();
router.use(express.json());

   
router.post("/pagamento", (req, res) => {
    const { nome, valor, data } = req.body;
    
    res.send('Conta no nome de '+ nome + 'paga no valor de ' + valor+ 'com data de vencimento ' + data);
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
    const treino=req.body.treino;

    console.log({nome} + 'está preste a atribuir um treino de '+{treino});
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