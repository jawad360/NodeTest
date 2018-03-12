const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('calendarYear', () => {
    return new Date().getFullYear();
});
app.get('/', (req, res) => {
    res.render('home.hbs', {
        title : 'Home Page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title : 'About Page'
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});