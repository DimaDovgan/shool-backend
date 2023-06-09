var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const fileUpload=require('express-fileupload');


// var indexRouter = require('./routes/api/leson');
// var usersRouter = require('./routes/api/auth');
 const cors = require('cors');

var app = express();

// // view engine setup

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(cors({
  origin: '*'
}));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/leson', indexRouter);
// app.use('/api/users', usersRouter);
app.get('/test', (req, res) => {
  res.send('Hello World!')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("cors err")
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
