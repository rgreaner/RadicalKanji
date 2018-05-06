module.exports = function (sequelize, DataTypes) {
    var Kanji = sequelize.define("Kanji", {
        meaning: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiLook: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiStory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiStroke: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Kanji.associate = models => {
        Kanji.belongsTo(models.User, {
            allowNull: false
        });
    };
    return Kanji;
};
