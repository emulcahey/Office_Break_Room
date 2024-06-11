

const User = require('./models/User');
const Game = require('./models/Game');
const Score = require('./models/Score');


Game.hasMany(Score, { foreignKey: 'gameId' });
User.hasMany(Score, { foreignKey: 'userId' });
Score.belongsTo(Game, { foreignKey: 'gameId' });
Score.belongsTo(User, { foreignKey: 'userId' });


module.exports = { User, Game, Score };
