const express = require ('express');
const router = express.Router();
router.use(express.json());
const pgp = require("pg-promise")({});
   
router.post("/pagamento", (req, res) => {
    const { nome, valor, data } = req.body;
    
    res.send('Conta no nome de '+ nome + 'paga no valor de ' + valor+ 'com data de vencimento ' + data);
}); 

const usuarioBD = "progII"; 
const senhaBD = "uffs";
const db =  pgp(`postgres://${usuarioBD}:${senhaBD}@192.168.253.155:5432/progII`);

router.get("/alunos", async (req,res)=>{
    const alunos = await db.any("SELECT * FROM aluno;");
    console.log(alunos);
    res.send(alunos);
})

router.post("/alunos", async (req,res)=>{
    const {nome, matricula, sobrenome, nome_completo} = req.body;
    const new_alunos = await db.any("INSERT INTO aluno (nome, matricula, sobrenome, nome_completo) VALUES ($1, $2, $3, $4);",
    [nome, matricula, sobrenome, nome_completo]);
    res.send("FOi");
})

router.get("/estoque", async (req,res)=>{
    const prod = await db.any("SELECT * FROM estoque;");
    console.log(prod);
    res.send(prod);
})

router.post("/estoque", async (req,res)=>{
    const {descricao, quantidade, valor} = req.body;
    const new_estoque = await db.any("INSERT INTO estoque (descricao, quantidade, valor) VALUES ($1, $2, $3);",
    [descricao, quantidade, valor]);
    res.send("FOi");
})


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
    const nome=req.body.nome;usuario
    const cpf=req.body.cpf;
    const matricula=res.body.matricula;
    const email=res.body.email;
    const telefone=res.body.telefone;
    const nascimento=res.body.nascimento;
    res.send("Lista de Alunos");
});


router.post("/professor", (req,res) => {
    const {nome, email, senha, cpf, dataNasciemento, telefone} = req.body;

    res.send(nome +  " " + email + " " + senha +  " " + cpf + " " + dataNasciemento + " " + telefone);
  
});

module.exports = router;