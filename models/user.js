module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiLearned: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // User.associate = models => {
    //     User.hasMany(models.Kanji, {
    //         onDelete: "no action"
    //     });
    // };
    return User;
};