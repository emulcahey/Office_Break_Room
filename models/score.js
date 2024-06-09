const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
const Game = require("./game");
const User = require('./user');

class Score extends Model {}

Score.init({
    gameId: {
        type: DataTypes.INTEGER,
        references: {
            model: Game,
            key: 'id',
        },
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    score: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Score',
});

Game.hasMany(Score, { foreignKey: 'gameId' });
User.hasMany(Score, { foreignKey: 'userId' });
Score.belongsTo(Game, { foreignKey: 'gameId' });
Score.belongsTo(User, { foreignKey: 'userId' });

module.exports = Score;
