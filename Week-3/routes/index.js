const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, My Server!');
})

router.get('/getData', (req, res) => {
    res.send('Lack of Parameter');
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const number = req.query.number;
    if (number === 'xyz') {
        res.send("Wrong Parameter");
    } else {
        let sum = 0;
        for (var i = 1; i <= parseInt(number); i++) {
            sum += i;
            res.send(`<h1>${sum}</h1>`);
        }
    }

})


module.exports = router;