var _ = require('underscore')
  , express = require('express')
  , app = exports = module.exports = express();

exports.callbacks    = require('./controllers/receiver');

app.post('/', exports.callbacks.push);