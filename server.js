const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.use( (req, res, next) => {
    var now = new Date().toString();
    var log = `${now} : ${req.method} - ${req.url}`;
    fs.appendFile('server.log', log+'\n', (error) => {

    });
    next();
});

// app.use( (req, res, next) => {
//     res.render('maintenance.hbs');
// });

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('calendarYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title : 'Home Page',
        welcomeMessage : 'welcome to my page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title : 'About Page'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        title : 'Projects Page'
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});