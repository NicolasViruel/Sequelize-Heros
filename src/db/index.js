const {Sequelize , Op } = require("sequelize");
const modelCharacter = require("../models/character");
const modelAbility = require("../models/ability");
const modelRole = require("../models/role");

const user = "postgres";
const pass = "pichones1";
const dbName = "henry_sequelize";

const db = new Sequelize(
    // `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`,
    `postgres://${user}:${pass}@localhost:5432/${dbName}`,
    //para que no salgan los textos de default
    { logging: false }
)

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
    ...db.models,
    db,
    Op
}