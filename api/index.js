const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Load the config
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

// Load the database
const db = require('./queries.js');

// Routes
app.get('/users', db.getUsers);

app.listen(config.server.port, () => {
    console.log(`Express server running on port ${config.server.port}`);
})