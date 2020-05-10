
const express = require("express");
const app = express();
app.use('/sum.html', express.static('static'));

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.set('view engine', 'pug');

// Assignment-1
app.get('/', (req, res) => {
    res.send('Hello, My Server!');
})
// Assignment-2
app.get('/getData', (req, res) => {
    const number = req.query.number;
    if (number === 'xyz') {
        res.send("Wrong Parameter");
    } else if (!number) {
        res.send('Lack of Parameter');
    } else {
        let sum = 0;
        for (var i = 1; i <= parseInt(number); i++) {
            sum += i;
        }
        res.send(`<h1>${sum}</h1>`);
    }

}
);

//Assignment-4
app.get('/myName', (req, res) => {
    res.render('myName', { name: req.cookies.username });
})

app.post('/myName', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('myName', { name: req.body.username });
})

app.get('/trackName', (req, res) => {

})

app.listen(3000, () => {
    console.log("App is running!");
});
