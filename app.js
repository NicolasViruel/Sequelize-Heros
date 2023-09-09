const express = require("express");
// const characterMiddleware = require("");
const characterMiddleware = require("./src/middlewares/characterMd")
const abilityMiddleware = require("./src/middlewares/abilityMd");
require("dotenv").config();

const server = express();

server.use(express.json());

server.use("/character", characterMiddleware);
server.use("/ability", abilityMiddleware);


server.get("/" , (req, res) =>{
    res.send("Henry Sequelize Homework");
});

module.exports = server;