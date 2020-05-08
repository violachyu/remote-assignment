
const express = require("express");
const app = express();

const mainRoutes = require('./routes/index');
// const getDataRoutes = require('./routes/getData');

app.use('/', mainRoutes);
// app.use('/getData', getDataRoutes);

// app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log("App is running!");
});
