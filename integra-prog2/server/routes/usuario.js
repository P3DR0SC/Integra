const express = require ('express');
const router = express.Router();
router.use(express.json());


router.post("/pagamento", (req, res) => {
    const { nome } = req.body;

    console.log(nome); 
});

router.post("/conta", (req, res) => {
    const { nome } = req.body;

    console.log('está é a conta do ' + nome); 
});

router.post("/solicita-treino", (req, res) => {
    const { nome } = req.body;

    console.log(nome + ' está preste a solicitar um treino'); 
});

router.post("/atribuir-treino", (req, res) => {
    const { nome } = req.body;

    console.log({nome} + 'está preste a solicitar um treino'); 
});

module.exports = router;