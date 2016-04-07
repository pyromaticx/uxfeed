var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static('style'));
app.use(express.static('build'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
