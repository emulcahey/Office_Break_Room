const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../config/middleware');

const router = express.Router();

// Get user profile route
router.get('/dashboard', (isAuthenticated, getProfile));

// Update user profile route
router.post('/update', (isAuthenticated, updateProfile));

module.exports = router;
