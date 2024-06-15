const express = require('express');
const app = express();

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


app.get('', isAuthenticated, (req, res) => {
    res.send('');
})

//error handling middleware
app.use(errorHandler);