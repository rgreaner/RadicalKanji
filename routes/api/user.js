const router = require("express").Router();
const userController = require("../../controllers/userController");
console.log("are we hereeee?")
//Matches with "/api/user"
router.route("/")
.get(userController.findAll)
.post(userController.create);

//Matches "/api/user/:id"
router
console.log("are we here?")
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;
