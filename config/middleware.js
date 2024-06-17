const express = require('express');
const session = require('express-session');
const app = express();

// Load configuration from config.json
const config = require('./config.json')['development'];

// Session middleware setup
app.use(session({
    secret: config.session.secret,  // Use the session secret from your config file
    resave: false,
    saveUninitialized: false
    // Add other session options as needed
}));

app.use(express.static('public'));

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Checks to see if the user has logged in for the session, else it will redirect to login page
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};


// Routes
app.get('/', (req, res) => {
    res.send('Home page');
});


app.get('/protected-route', isAuthenticated, (req, res) => {
    res.send('This is a protected route');
})

//error handling middleware
app.use(errorHandler);

module.exports = app;