//require dependencies
var express = require('express');
var app = express();
var port = 8080;
var router = require('./app/routes.js');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

//use ejs,  express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body-parser
app.use(bodyParser.urlencoded());

//route our app
app.use('/', router);

//set static files (css, images)
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function() {
    console.log('app started...');
});
