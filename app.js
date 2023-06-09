// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// // const fileUpload=require('express-fileupload');


// // var indexRouter = require('./routes/api/leson');
// // var usersRouter = require('./routes/api/auth');
//  const cors = require('cors');

// var app = express();

// // // view engine setup

// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'ejs');

// // app.use(cors({
// //   origin: '*'
// // }));
// app.use(cors());
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   );
//   next();
// })
// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));
// // app.use('/api/leson', indexRouter);
// // app.use('/api/users', usersRouter);
// app.get('/test', (req, res) => {
//   res.send('Hello World!')
// })

// // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   console.log("req",req)
// //   next(createError(404));
// // });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   //res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(function(err, req, res, next) {
  console.log("error")
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;