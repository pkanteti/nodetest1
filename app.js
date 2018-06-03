var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// get the hook to db
var mongo = require('mongodb');
var monk = require('monk');
// var db = monk('localhost:27017/nodetest1');

//get the hook to db from mLab Mongo
	// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname
	var uri = 'mongodb://heroku_cwntx8n9:ttg2pro7osoaia4tm2pra6o74f@ds247690.mlab.com:47690/heroku_cwntx8n9';
	var db;
	mongo.MongoClient.connect(uri, function(err, client) {
		if(err) throw err;

		db = client.db('heroku_cwntx8n9');
	});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next) {
	req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
