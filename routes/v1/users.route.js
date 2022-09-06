const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");


const router = express.Router();

router.route("/all")
    .get(limiter, usersControllers.getAllUsers)

router.route("/random")
    .get(usersControllers.getRandomUser)

router.route("/save")
    .post(usersControllers.saveAUser)

router.route("/update/:id")
    .patch(usersControllers.updateUser)

router.route("/bulk-update/")
    .patch(usersControllers.updateBulkUser)

router.route("/delete/:id")
    .delete(usersControllers.deleteUser)

module.exports = router;