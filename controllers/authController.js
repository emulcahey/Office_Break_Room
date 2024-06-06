const bcrypt = require('bcrypt');
const User = require('../models/user');

// Register a new user
const register = async (req, res) => {
  try {
    // Hash the user's password before saving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user with the provided username, email, and hashed password
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // Store the user in the session and redirect to the dashboard
    req.session.user = user;
    res.redirect('/dashboard');
  } catch (error) {
    // Handle errors during registration
    res.status(500).json({ error: 'Error registering user' });
  }
};

// Log in an existing user
const login = async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ where: { email: req.body.email } });
    // Check if the user exists and the password is correct
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      // Store the user in the session and redirect to the dashboard
      req.session.user = user;
      res.redirect('/dashboard');
    } else {
      // Handle invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle errors during login
    res.status(500).json({ error: 'Error logging in' });
  }
};

// Log out the current user
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      // Handle errors during logout
      res.status(500).json({ error: 'Error logging out' });
    } else {
      // Redirect to the home page after successful logout
      res.redirect('/');
    }
  });
};

module.exports = { register, login, logout };
