const {db , Ability} = require("../db");

describe("Ability Model" , () =>{
    beforeAll (async    () =>{
        await db.sync({ force: true });
    });

    describe("Parte Uno", () =>{
        it('should not create the Ability if name is not send' , async () =>{
            expect.assertions(1);
            try {
                await Ability.create({ mana_cost: 150.0});
            } catch (error) {
                expect(error.message).toBeDefined();
            }
        })

        it()
    })






})