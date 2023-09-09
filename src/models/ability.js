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
        summary:{ //creamos un Campo Virtual (donde podemos concatener elementos)
            //queremos que nos muestre solo la parte entera del mana
            type: DataTypes.VIRTUAL,
            get(){
                return `${this.name}(${Math.floor(this.mana_cost)}) - Description: ${this.description }`
            }
        }
    });
};