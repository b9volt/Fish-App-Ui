
var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
var moment = require('moment-timezone');
var port = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, function() {
  console.info('Server is responding on port ' + port + ' ',
  moment(new Date(), 'America/Chicago').format());
});
