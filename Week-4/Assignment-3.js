const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected!');
});

const app = express();

// Create DB
let sql = 'CREATE DATABASE assignment';
// Create table
let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';

// homepage
app.get('/homepage', (req, res) => { 
    req = new XMLHttpRequest();     //Ajax可以這樣用嗎？
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
                document.getElementsByTagName('p').innerHTML = req.responseText;
            };
        }

    // Add post (未完成)

    let signUp = document.querySelector('#signUp'); 
    signUp.addEventListener('click', () =>{
        let query = db.query(sql, post, (err, result) => {
            let sql = 'SELECT * FROM assignment WHERE email IS NOT NULL'; 
            if(err) throw err;
            console.log(result);
            res.redirect('/memberPage'); 
            res.send("Done!");
        });
    })
    // Check sign-in (待修)
    let signIn = document.querySelector('#signIn'); 
    signIn.addEventListener('click', () =>{
        let query = db.query(sql, post, (err, result) => {
            let signInEmail = document.querySelector('#signInName').value; 
            let signInPassword = document.querySelector('#signInPassword').value; 
            let sql = 'SELECT * FROM assignment WHERE signInEmail = email AND signInPassword = password '; // 應該不是用SELECT(查)
            if(err) throw err;
            console.log(result);
            res.redirect('/memberPage'); 
            res.send("Done!");
        });
    })

    };
    res.open('GET', src, true);
    res.send();
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});