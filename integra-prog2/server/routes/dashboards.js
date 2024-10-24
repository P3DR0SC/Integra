const express = require ('express');
const router = express.Router();
router.use(express.json());


router.post("/$nome", (req, res) => {
    console.log('Você é um {$perm}'); 
   
});



module.exports = router;