const express = require("express");
const app = express();

app.use("/users", require("./routes/usersRoute"))

app.listen(3001, function(){
    console.log("Server runnning");
})