// Global exports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Local exports

const config = require('./config/config');
const webpackDevServer = require('./utilities/webpack_dev_server');
const isDeveloping = process.env.NODE_ENV !== 'production';
const serverPort = isDeveloping ? config.SERVER_PORT : process.env.PORT;
const app = express();

// =====================================================================//
// API routes
// =====================================================================//
const router = require('./src/server/router.js');
const movies = require('./src/server/routes/movies');

// =====================================================================//
//  Middleware
// =====================================================================//
app.use(morgan('combined'));
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// =====================================================================//
// Body Parser
// =====================================================================//
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', [movies]);
router(app);

// =====================================================================//
// mongoose connection
// =====================================================================//
const dbName = 'movieDB';
const connectionString = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(connectionString);

// =====================================================================//
//  Express App
// =====================================================================//
app.listen(serverPort, () => {
  console.log('Server: listening on port 3000');
});

// =====================================================================//
//  Webpack Dev Server
// =====================================================================//
webpackDevServer.listen(config.DEV_WEBPACK_PORT, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Webpack Port Server: Listening at http://localhost:3001/');
});
