var socket = io();
var React = require('react');
var Cell = require('./Cell.js');

var Bingo = React.createClass({
	setInitial: function(data) {
		var initData = { board: data.cells };
		initData[data.color] = true;
		this.setState(initData);
	},

	getInitialState: function() {
		socket.on('send:number', this.selectNumber);
		socket.on('init', this.setInitial);

		return {
			blue: false,
	      	green: false,
	      	red: false,
	      	orange: false,
	      	purple: false,
			board: []
		}
	},

	componentDidMount: function() {
		socket.emit('join', {user:'user' + Math.random().toString(36).substring(7)});
	},

	handleClick: function(cell) {
		var number = cell.props.value;
		socket.emit('send:number', {number: number});
		this.setState({board: this.getSelectNumber(number)});
	},
	
	render: function() {
		var self = this;
		var cells = this.state.board.map(function(cell) {
			return (
				<Cell 
					value={cell.value} 
					key={cell.id} 
					selected={cell.selected} 
					onClick={self.handleClick} />
			);
		});
		
		var classes = React.addons.classSet({
				container: true,
        blue: this.state.blue,
        green: this.state.green,
        red: this.state.red,
        orange: this.state.orange,
        purple: this.state.purple,
    });

		return (
			<div className={classes}>
				<h1>Bingo Game</h1>
				<div className="bingo">
					{cells}
				</div>
			</div>
		);
	},

	selectNumber: function(data) {
		var board = this.getSelectNumber(data.number);
		this.setState({board: board});
	},

	getSelectNumber: function(number) {
		var cells = this.state.board;
		var board = [];

		for (var i = 0; i < cells.length; i++) {
			if (cells[i].value == number) {
				board.push({
					id: cells[i].id,
					selected: true,
					value: cells[i].value
				});
			} else {
				board.push({
					id: cells[i].id,
					selected: cells[i].selected,
					value: cells[i].value
				});
			}
		}

		return board
	},

	getRandomNumbers: function() {
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
		return cells
	}
});

module.exports = Bingo;