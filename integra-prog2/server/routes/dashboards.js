const express = require ('express');
const router = express.Router();
router.use(express.json());


router.post("/assinante", (req, res) => {
    console.log('Você é um Assiannte'); 
   
});

router.post("/adm", (req, res) => {
    console.log('Você é um adm'); 
   
});

router.post("/professor", (req, res) => {
    console.log('Você é um professor'); 
   
});


module.exports = router;