const { setNoCacheHeaders } = require("./middleware");
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

var pgp = require('pg-promise')( /* options */ )
var db = pgp('postgres://username:password@host:port/database') //connect to your local databasw



const { PORT = 3000, BASE_PATH } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use('/users', userRoutes);

app.use(setNoCacheHeaders);

app.use(express.static(path.join(__dirname, 'public')));


db.one('SELECT $1 AS value', 123) //create a query to pull desired data
    .then(function(data) {
        console.log('DATA:', data.value)
    })
    .catch(function(error) {
        console.log('ERROR:', error)
    })



app.listen(PORT, () => {
    console.log('Link to the server');
    console.log(BASE_PATH);
});