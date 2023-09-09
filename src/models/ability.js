const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Ability", {
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
            unique: "name_mc" //de esta forma indicamos que estos dos campos son unicos
        },
        description: {
            type: DataTypes.TEXT(),
        },
        mana_cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
            unique: "name_mc" //de esta forma indicamos que estos dos campos son unicos
        },
    });
};