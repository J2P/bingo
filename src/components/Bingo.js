var React = require('react');
var Board = require('./Board.js');

function getRandomNumbers() {
	var board = [];
	var numbers = [
		1, 2, 3, 4, 5, 
		6, 7, 8, 9, 10,
		11, 12, 13, 14, 15,
		16, 17, 18, 19, 20,
		21, 22, 23, 24, 25
	];
	for (var i = 0; i < 25; i++) {
		board.push({value: numbers.splice(Math.floor(Math.random() * numbers.length), 1)});	
	}
	return board
}

var Bingo = React.createClass({
	getInitialState: function() {
		return {
			board: []
		}
	},

	componentDidMount: function() {
		this.setState({board: getRandomNumbers()});
	},
	
	render: function() {
		return (
			<div className="bingo">
				<Board data={this.state.board}/>
			</div>
		);
	}

});

module.exports = Bingo;