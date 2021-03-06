module.exports = function (sequelize, DataTypes) {
    var Kanji = sequelize.define("Kanji", {
        meaning: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiLook: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        kanjiStory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kanjiStroke: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Kanji.associate = models => {
    //     Kanji.belongsTo(models.User, {
    //         foreignKey: {
    //         allowNull: false}
    //     });
    // };
    return Kanji;
};
