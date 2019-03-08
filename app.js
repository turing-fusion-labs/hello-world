//EXpress Config
var express = require('express'),
    app = express(),
    Datastore = require('nedb'),
    bodyParser = require('body-parser');


//EJS
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(7000);



app.get('/', function(req, res) {
  res.render('pages/index');
});


console.log('RESTful API server started on: ' + 7000);  // This is example of logging message in the console (black screen)