const Score = require('../models/score');
const Game = require('../models/game');
const User = require('../models/user');

// Get the leaderboard for a specific game
const getLeaderboard = async (req, res) => {
  try {
    // Find the top scores for the game, including user details, ordered by score in descending order
    const scores = await Score.findAll({
      where: { gameId: req.params.gameId },
      include: [User],
      order: [['score', 'DESC']],
      limit: 10,
    });
    // Find the game details
    const game = await Game.findOne({ where: { id: req.params.gameId } });
    // Render the leaderboard view with the scores, game details, and current user
    res.render('leaderboard', { scores, game, user: req.session.user });
  } catch (error) {
    // Handle errors when fetching the leaderboard
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
};

module.exports = { getLeaderboard };
