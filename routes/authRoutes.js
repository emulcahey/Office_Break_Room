const express = require('express');
const { register, loginByUsername, logout } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/loginByUsername', loginByUsername);

// Logout route
router.get('/logout', logout);


// Route to render the login page
router.get('/login', (req, res) => res.render('auth/login'));


// Route to render the registration page
router.get('/register', (req, res) => res.render('auth/signup'));

//logout route
// res.render('header', { loggedIn: req.isAuthenticated() });

module.exports = router;
