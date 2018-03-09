var express  = require('express');
var app      = express();
var path     = require('path');
var mongoose = require('mongoose');
var session  = require('express-session');

// database
mongoose.connect(process.env.PZGS_MONGO_DB);

// middlewares
app.use(express.static(path.join(__dirname, 'public')));


//server start
var db = mongoose.connection;
 db.once("open",function () {
  console.log("DB connected!");
});
db.on("error",function (err) {
  console.log("DB ERROR :", err);
});

// routes
app.use('/', require('./routes/manage.js'));
/*
app.use('/', require('./routes/home'));
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
*/
// start server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!');
});
