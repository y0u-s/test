var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('hello world ');
=======
  res.send('hello kanker world');
>>>>>>> 1a2d78ad910b460b7fd6e84093b4f33f39f2d703
});

 
app.listen(80);
 
module.exports = app;
