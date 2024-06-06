const express = require('express');
const app = express();

app.use(express.static('public'));

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

app.use(errorHandler);

// Routes
app.get('/', (req, res) => {
    res.send('Home page');
});


app.get('', isAuthenticated, (req, res) => {
    res.send('');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});