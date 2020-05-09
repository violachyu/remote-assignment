const https = require('https');
const express = require('express');
const app = express();
const mysql = require('mysql');

//Create connection
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "user"
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});






















app.listen('3000', () => {
    console.log('Server started on port 3000');
});