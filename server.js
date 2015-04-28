var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

io.on('connection', function(socket){
  socket.on('send:number', function(data) {
  	socket.broadcast.emit('send:number', {
  		number: data.number
  	});
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});