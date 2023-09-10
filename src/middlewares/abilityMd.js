const { Router } =require('express');
const { Ability }= require("../db");
const router = Router();

//crear habilidad
router.post("/" , async(req, res) =>{
    try {
        const {mana_cost , name }= req.body;
        if (!name || !mana_cost) {
            return res.status(404).send("Falta enviar datos obligatorios");
        }
        const ability = await Ability.crete(req.body);
        res.status(201).send(ability);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error al crear esa habilidad")
    }
});

//Setear la habilidad a un personaje
router.put("/setCharacter", async(req, res) =>{
    const {idAbility , codeCharacter} = req.body;
    const ability = await Ability.findByPk(idAbility);
    await ability.setCharacter(codeCharacter);
    res.status(200).send(ability);

});





module.exports = router;