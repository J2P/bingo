var socket = io();
var React = require('react');
var Cell = require('./Cell.js');

var Bingo = React.createClass({
	getInitialState: function() {
		socket.on('send:number', this.selectNumber);

		return {
			board: []
		}
	},

	componentDidMount: function() {
		this.setState({board: this._getRandomNumbers()});
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
					index={cell.id} 
					selected={cell.selected} />
			);
		});

		return (
			<div className="bingo">
				{cells}
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