/*
Here is where you set up your server file.
express middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var cookieParser = require('cookie-parser');
var session = require('express-session'); 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'i56lsza5p1eh0yxi',
  password : 'zwc7f1qkf29w0xdn',
  database : 'r1kt0y6mc7oyncc9'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 
connection.end();

var app = express();

//allow sessions
app.use(session({ 
	secret: 'app', 
	cookie: { maxAge: 60000 },
	resave: true,
	saveUninitialized: true
}));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var cats_controller = require('./controllers/cats_controller.js');
var users_controller = require('./controllers/users_controller.js');

app.use('/', cats_controller);
app.use('/', users_controller);


var port = process.env.PORT || 3000;
app.listen(port);
