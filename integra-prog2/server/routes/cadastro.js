const express = require ('express');

const router = express.Router();
router.use(express.json());

router.post("/cadastro", (req,res) => {
    const nome=req.body.nome;
    const cpf=req.body.cpf;
    const email=res.body.email;
    const telefone=res.body.telefone;
    const nascimento=res.body.nascimento;

    const new_cad = db.any("SELECT * FROM aluno;");


    res.send("Você está tentando cadastrar um usuario com \n" +
        "Nome: "+ nome + "\n" +
        "Cpf: "+ cpf + "\n" +
        "Email: " + email + "\n"+
        "Telefone: "+ telefone + "\n"+
        "Data Nasc: " + nascimento + "\n"
    )

});


router.post("/new-table", (req,res)=>{

})
module.exports = router;