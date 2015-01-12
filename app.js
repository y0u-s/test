var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello kanker world');
});
 
app.listen(80);
 
module.exports = app;
