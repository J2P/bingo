var React = require('react');
var Board = require('./Board.js');

var Bingo = React.createClass({
	getInitialState: function() {
		return {
			board: {
				tiles: [
					[1, 2, 3, 4, 5],
					[6, 7, 8, 9, 10],
					[11, 12, 13, 14, 15],
					[16, 17, 18, 19, 20],
					[21, 22, 23, 24, 25]
				]
			} 
		};
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