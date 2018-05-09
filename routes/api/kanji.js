const router = require("express").Router();
const kanjiController = require("../../controllers/kanjiController");

//Match with "/api/kanji"

router.route("/")
.get(kanjiController.findAll)
.post(kanjiController.create);

//Matches "/api/kanji/id"
router.route("/:id")
    .get(kanjiController.findById)
    .put(kanjiController.update)
    .delete(kanjiController.remove);

module.exports = router;