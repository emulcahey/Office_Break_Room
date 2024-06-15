const User = require('./user');
const Game = require('./game');
const Score = require('./score');


Game.hasMany(Score, { foreignKey: 'gameId' });
User.hasMany(Score, { foreignKey: 'userId' });
Score.belongsTo(Game, { foreignKey: 'gameId' });
Score.belongsTo(User, { foreignKey: 'userId' });


module.exports = { User, Game, Score };
