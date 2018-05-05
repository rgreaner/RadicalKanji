var db = require ("../models");

module.exports = function(app) {
    app.get("/api/kanji", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId= req.query.user_id;
        } 
        db.Kanji.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbKanji) {
            res.json(dbKanji);
        });
    });

    app.get("/api/kanji/:id", function (req, res) {
        db.Kanji.findOne({
            where: {
                id: req.params.id
            },
            include: [db.UserId]
        }).then(function(dbKanji) {
            res.json(dbKanji);
        });
    });

    app.post("/api/kanji", function (req, res) {
        db.Kanji.create(req.body).then(function(dbKanji) {
            res.json(dbKanji);
        });
    });


    app.put("/api/kanji", function (req, res) {
        db.Kanji.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbKanji) {
                res.json(dbKanji);
            });
    });
}

