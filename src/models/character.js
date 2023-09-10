const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Character", {
        code : {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
            validate: {
                customValidator(value){
                    if(value.toLowerCase() ==="henry"){
                        throw new Error("Error no puede ser HENRY"); //validamos el campo que no pueda ser herry y combinacion de mayusculas y minisculas
                    };
                },
            },
        },
        name: {
            type: DataTypes.STRING(),
            unique: true,
            allowNull: false,
            validate: {
                notIn: [[ 'Henry', 'SoyHenry' , 'Soy Henry']], //no pueden ser estos campos
            },
        },
        age: {
            type: DataTypes.INTEGER(),
            //configuramos "Getters" para definir una edad en el modelo
            get() {
                const age = this.getDataValue("age");
                return age ? `${age} years old` : age; //si es null devuelve null, si tiene algo devuelve ese texto armado
            },
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