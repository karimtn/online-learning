const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

const api = require('./server/routing/api')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api',api);

app.listen(port, err =>{
    if(err) throw err;
    console.log('Nesma3 fik 3al port ' + port);
} )
