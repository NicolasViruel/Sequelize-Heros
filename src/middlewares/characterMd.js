const { Router } =require('express');
const { Character, Op, Role }= require("../db");
const router = Router();

router.post("/", async (req, res) =>{
    try {
        const {code ,name, age, race, hp , mana, date_added } = req.body
        if(!code || !name || !mana || !hp){
            return res.status(404).send("falta enviar datos al formulario");
        }
        const newCharacter = await Character.create(req.body); 
        res.status(201).send(newCharacter);
    } catch (error) {
        console.log(error);
        return res.status(404).send("Error en alguno de los datos provistos");
    };
});

router.get("/" , async (req, res) =>{
    const {race , age} = req.query;
    try {
        if (!race && !age) {
            const characters = await Character.findAll();
            return res.status(200).send(characters)
        }else{
            const miObj = {}; //creo un objeto para validar que tengo esos parametros
            if(race) miObj["race"] = race;
            if(age) miObj["age"] = age;
            const characters = await Character.findAll({ where: { miObj} });
            return res.status(200).send(characters)
        }
    } catch (error) {
        console.log(error);
        return res.status(404).send("Error en alguno de los datos provistos");
    };
});

//traer todos los personajes jovenes hasta 25 años
router.get("/young" , async (req,res) =>{
    try {
        const youngCaracters = await Character.findAll({
            where: {
                age: {[Op.lt]:25}, //operador de igualdad
            },
        });
        res.status(200).send(youngCaracters);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

//traer al psersonaje en base a su codigo (llave primaria)
//los que tienen req.params siempre van abajo de las rutas sino los toma como parametros
router.get("/:code" , async (req, res) =>{
        const {code} = req.params;
        try {
            const character = await Character.findByPk(code);
            if(!character)
                throw new Error(
                    `El codigo ${code} no corresponde a ningun personaje existente`
            );
            res.status(200).send(character);
        } catch (error) {
            return res.status(404).send(error.message);
        };
});

router.put("/:attribute" , async (req, res) =>{
    const { attribute } = req.params;
    const { value } = req.body;
    try {
        const characters = await Character.update(
            {
                [attribute] : value,        
            },
            {
            where : { [attribute]: null },
        });
        res.status(200).send("Personajes actualizados");
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = router;