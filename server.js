const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

const api = require('./server/routing/api')
const auth = require('./server/routing/auth') 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/coursesDb');
mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
});
mongoose.connection.on('error', (err) => {
    console.log('Unable to connect to the database ' + err);
});

app.use('/api',api);

app.use('/auth',auth);

app.listen(port, err =>{
    if(err) throw err;
    console.log('Nesma3 fik 3al port ' + port);
} )
