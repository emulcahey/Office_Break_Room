const express = require('express');
const router = express.Router();
const { getLeaderboard } = require('../controllers/leaderboardController');
const { isAuthenticated } = require('../config/middleware');

router.get('/:gameId', isAuthenticated, getLeaderboard);

module.exports = router;
