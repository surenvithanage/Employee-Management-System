const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();
const bodyParser = require('body-parser');

// importing routes
const customerRoutes = require('./customer.js');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'nodejsmysql'
}, 'single'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use('/customers', customerRoutes);

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
