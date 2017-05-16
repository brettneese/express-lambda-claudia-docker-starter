// const module = require('./module')

const express = require('express');
const app = express();

app.get('/ping', function (req, res) {
  res.send('pong')
});

module.exports = app;