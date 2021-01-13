const express = require("express"); // using the express
var router = express.Router(); // using router from express

usersRoute = require("../controllers/userControllers")

router.get("/", usersRoute.usersController)

module.exports = router;