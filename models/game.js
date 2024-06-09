const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Game extends Model {}

Game.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Game',
});

module.exports = Game;
