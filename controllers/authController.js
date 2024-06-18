const bcrypt = require('bcrypt');
const User = require('../models/user');

// Register a new user
const register = async (req, res) => {
  
  try {
    // Create a new user with the provided username, email, and password (hooks.beforeCreate will hash)
    const user = await User.create({
      "userName": req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Store the user in the session and redirect to the dashboard
    req.session.user = user;
    res.redirect('../users/dashboard');
  } catch (error) {
    console.error(error);
    // Handle errors during registration
    res.status(500).json({ error: 'Error registering user' }); 
  }
};

// Log in an existing user
const loginByUsername = async (req, res) => {
  
  try {
    
    const user = await User.findOne({ where: { "userName": req.body.username } });
    // Check if the user exists and the password is correct
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      // Store the user in the session and redirect to the dashboard
      req.session.user = user;
      res.redirect('../users/dashboard');
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

module.exports = { register, loginByUsername, logout };
