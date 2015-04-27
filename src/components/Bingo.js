var React = require('react');
var Cell = require('./Cell.js');

var Bingo = React.createClass({
	getInitialState: function() {
		return {
			board: []
		}
	},

	componentDidMount: function() {
		this.setState({board: this._getRandomNumbers()});
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

	_getRandomNumbers: function() {
		var board = [];
		var numbers = [
			1, 2, 3, 4, 5, 
			6, 7, 8, 9, 10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
		for (var i = 0; i < 25; i++) {
			board.push({
				id: i + 1,
				selected: false,
				value: numbers.splice(Math.floor(Math.random() * numbers.length), 1)
			});	
		}
		return board
	}
});

module.exports = Bingo;