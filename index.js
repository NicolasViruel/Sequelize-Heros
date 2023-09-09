const app = require("./app");
const { db } = require("./src/db/index");
const PORT = 3001;

app.listen(PORT, () =>{
    console.log(`Server listening on Port ${PORT}`);
    db.sync( { force: true });
});