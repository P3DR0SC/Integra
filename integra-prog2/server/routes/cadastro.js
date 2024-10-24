const express = require ('express');
const router = express.Router();
router.use(express.json());


router.post("/cadastro", (req, res) => {
    console.log('oi'); 
   
});



module.exports = router;