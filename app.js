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

console.log('Hellow World Test Program started on http://localhost:7000');  // This is example of logging message in the console (black screen)

app.get('/', function(request, response) {
    response.render('index');
});

function calculateAge(yearOfBirth){
    var age = 2019-yearOfBirth;
    return age;
}

// ---------- do not change above unless you know what you are doing :) -----------


app.post('/save', function(request, response) {

    var firstName = request.body.firstname;

    response.render('nextpage', { fname:firstName });
});
