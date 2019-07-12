const express = require('express');
const projectRouter = require('./routes/projects/projectRouter');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some code!</h2>`)
});

module.exports = server;