var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static('style'));
app.use(express.static('/img/emoji'));
app.use(express.static('build'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
console.log('running server at', port);
app.listen(port);

/*

webpack -p
git add .
git commit -am 'yaaa'
git push heroku master

*/
