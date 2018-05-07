const db = require("../models");

//Methods for the kanjiController
module.exports = {
    findAll: function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId= req.query.user_id;
        } 
        db.Kanji
        .find(req.query)
        .then(dbKanji => res.json(dbKanji))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Kanji
        .findById(req.params.id)
        .then(dbKanji => res.json(dbKanji))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Kanji
        .create(req.body)
        .then(dbKanji => res.json(dbKanji))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Kanji
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbKanji => res.json(dbKanji))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Kanji
        .findById({_id: req.params.id})
        .then(dbKanji => dbKanji.remove())
        .then(dbKanji => res.json(dbKanji))
        .catch(err => res.status(422).json(err));
    }
};