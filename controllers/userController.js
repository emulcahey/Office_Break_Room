const User = require('../models/user');
const Score = require('../models/score');
const Game = require('../models/game');

// Get the profile and scores of the current user
const getProfile = async (req, res) => {
  try {
    const user = req.session.user;
    // Find all scores of the user, including game details
    const scores = await Score.findAll({
      where: { userId: user.id },
      include: [Game],
    });
    // Render the dashboard view with the user details and their scores
    res.render('dashboard', { user, scores });
  } catch (error) {
    // Handle errors when fetching the profile
    res.status(500).json({ error: 'Error fetching profile' });
  }
};

// Update the profile of the current user
const updateProfile = async (req, res) => {
  try {
    const user = req.session.user;
    // Update the user's username and email
    await User.update(
      {
        username: req.body.username,
        email: req.body.email,
      },
      { where: { id: user.id } }
    );
    // Update the session with the new username and email
    req.session.user.username = req.body.username;
    req.session.user.email = req.body.email;
    // Redirect to the dashboard after updating the profile
    res.redirect('/dashboard');
  } catch (error) {
    // Handle errors when updating the profile
    res.status(500).json({ error: 'Error updating profile' });
  }
};

module.exports = { getProfile, updateProfile };
