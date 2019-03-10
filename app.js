//EXpress Config
var express = require('express'),
    app = express(),
    Datastore = require('nedb'),
    bodyParser = require('body-parser');

//EJS
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(7000);

console.log('Hellow World Test Program started on: ' + 7000);  // This is example of logging message in the console (black screen)

// ---------- do not change above unless you know what you are doing :) -----------


app.get('/', function(req, res) {
    res.render('index');
});

app.post('/save', function(req, res) {
    var firstName = req.body.fname;
    res.render('nextpage', {fname:firstName});
});
