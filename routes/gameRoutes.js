const express = require('express');
const { getGames, startGame, submitScore } = require('../controllers/gameController');
const { isAuthenticated } = require('../config/middleware');

const router = express.Router();

// Get all games route
router.get('/', (isAuthenticated, getGames));

// Start game route
router.get('/play/:id', (isAuthenticated, startGame));

// Submit score route
router.post('/score', (isAuthenticated, submitScore));

module.exports = router;
