const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);
//console.log("did we make it here?")
//If no API routes hit, send the React App
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;