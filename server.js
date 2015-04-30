var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = {};
var colors = ['blue', 'green', 'red', 'orange', 'purple'];

app.use(express.static('build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

function getRandomNumbers() {
	var cells = [];
	var numbers = [
		1, 2, 3, 4, 5, 
		6, 7, 8, 9, 10,
		11, 12, 13, 14, 15,
		16, 17, 18, 19, 20,
		21, 22, 23, 24, 25
	];

	for (var i = 0; i < 25; i++) {
		cells.push({
			id: i + 1,
			selected: false,
			value: numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
		});	
	}
	return cells;
}

io.on('connection', function(socket){
  socket.on('send:number', function(data) {
  	socket.broadcast.emit('send:number', {
  		number: data.number
  	});
  });

  socket.on('join', function(data) {
  	users[data.user] = {
  		cells: getRandomNumbers(),
  		color: colors.splice(Math.floor(Math.random() * colors.length), 1)[0]
  	};

  	socket.emit('init', users[data.user]);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});