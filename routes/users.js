const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("User List")
});

router.get('/new', (req, res) => {
    res.send("User New Form")
});

router.post('/', (req, res) => {
    res.send('create User')
});


router.get("/:id",(req,res) => {
    res.send(`Ger user With ID ${req.params.id}`)
});

router.put("/:id",(req,res) => {
    res.send(`put user With ID ${req.params.id}`)
});

router.delete("/:id",(req,res) => {
    res.send(`delte user With ID ${req.params.id}`)
});


module.exports = router

