
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
})

app.get('/getData', (req, res) => {
    res.send('Lack of Parameter');
})

// app.get('/', (req, res) => {   
//     res.send('Hello, My Server!');
// })

app.listen(3000);