const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');
const dataFile = './data.json';
const dataFormat = 'utf8';
const verbose = false;
const server = app.listen(3000);
const io = require('socket.io').listen(server);
var debug = require('debug')('app');

console.log("\nRunning  backend server.");

// CORS
// We are enabling CORS so that our 'ng serve' Angular server can still access
// our Node server.
const cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Basic Routes
app.use(express.static(path.join(__dirname, '../farah/dist/farah')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../farah/farah/dist/farah/index.html'));

});

app.post('/api/', function(req, res) {
  data = {result:true};
  res.send(data);
});

// const MongoClient = require('mongodb').MongoClient
// const assert = require('assert');


// const url = 'mongodb://localhost:27017'




