const router = require("express").Router();
const userRoutes = require("./user");
const kanjiRoutes = require("./kanji");

//User Routes
router.use("/user", userRoutes);

//Kanji Routes
router.use("/kanji", kanjiRoutes);

module.exports = router;
