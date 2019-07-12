const express = require("express");
const cors = require('cors');
const projectRouter = require("./routes/projects/projectRouter");
const actionRouter = require("./routes/actions/actionRouter");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some code!</h2>`);
});

module.exports = server;
