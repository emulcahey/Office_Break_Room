const Game = require('../models/game');
const Score = require('../models/score');
const User = require('../models/user');

// Start a game by retrieving game details
const startGame = async (req, res) => {
  try {
    // Find the game by its ID
    const game = await Game.findOne({ where: { id: req.params.gameId } });
    // Render the game play view with the game details and current user
    res.render('game/play', { game, user: req.session.user });
  } catch (error) {
    // Handle errors when starting the game
    res.status(500).json({ error: 'Error starting game' });
  }
};

// Submit a score for a game
const submitScore = async (req, res) => {
  try {
    const { gameId, score } = req.body;
    const user = req.session.user;

    // Create a new score record for the user and game
    await Score.create({
      userId: user.id,
      gameId,
      score,
    });

    // Redirect to the leaderboard for the game
    res.redirect(`/leaderboard/${gameId}`);
  } catch (error) {
    // Handle errors when submitting the score
    res.status(500).json({ error: 'Error submitting score' });
  }
};

// Retrieve all available games
const getGames = async (req, res) => {
  try {
    // Find all games
    const games = await Game.findAll();
    // Render the game hub view with the list of games and current user
    res.render('game/hub', { games, user: req.session.user });
  } catch (error) {
    // Handle errors when retrieving games
    res.status(500).json({ error: 'Error fetching games' });
  }
};

module.exports = { startGame, submitScore, getGames };
