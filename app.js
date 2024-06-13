const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const bootstrap = require('bootstrap');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Session management middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Set up Handlebars.js as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/auth', authRoutes);
app.use('/games', gameRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/users', userRoutes); // Add user routes

// Home route
app.get('/', (req, res) => {
  res.redirect('/auth/login');
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};
app.use(errorHandler);

// Sync database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

module.exports = app;