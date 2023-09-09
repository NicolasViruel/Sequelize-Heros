const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Character", {
        code : {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(),
            unique: true,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER(),
        },
        race : {
            type: DataTypes.ENUM(['Human', 'Elf' , 'Machine' , 'Demon', 'Animal', 'Other']),
            defaultValue : "Other", //asi toma el valor por defecto
        },
        hp: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        mana : {
            type : DataTypes.FLOAT(),
            allowNull: false,
        },
        date_added: {
            type: DataTypes.DATEONLY, //dataTime sin el tiempo
            defaultValue: DataTypes.NOW,
        }



    },
    
    { timeStamps: false}
    );
};