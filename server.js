const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>ALL THE MIDDLEWARE!</h2>`);
});

// custom middleware

function logger(req, res, next) {}

module.exports = server;
