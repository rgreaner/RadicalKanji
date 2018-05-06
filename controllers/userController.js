const db = require("../models");

//Define methods for the userController
module.exports = {
    // findAll: function(req, res) {
    //     db.User
    //     .find(req.query)
    //     .then(function(dbUser)
    // }
    findById: function(req, res) {
        db.User
        .findById(req.params.id)
        .then(dbUser => res.json(dbUser));
    },

    create: function(req, res) {
        db.User
        .create(req.body)
        .then(dbUser => res.json(dbUser));
    },

    update: function(req, res) {
        db.User
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbUser => res.json(dbUser));
    },
    
    remove: function(req, res) {
        db.User
        .findById({_id: req.params.id})
        .then(dbUser => dbUser.remove())
        .then(dbUser => res.json(dbUser));
    }
};