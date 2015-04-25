var React = require('react');
var Board = require('./Board.js');

var Bingo = React.createClass({
	getInitialState: function() {
		return {
			board: [
				{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5},
				{value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10},
				{value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15},
				{value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20},
				{value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}
			]
		}
	},
	
	render: function() {
		// var tiles = this.state.board.titles.filter(function(tile) {
		// 	return this.value;
		// }).map(function(tile) {
		// 	return (<Tile ref={tile.id} key={tile.id} tile={tile} />);
		// });
		return (
			<div className="bingo">
				<Board />
			</div>
		);
	}

});

module.exports = Bingo;