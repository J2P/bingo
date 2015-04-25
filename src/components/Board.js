var React = require('react');
var Cell = require('./Cell.js');

var Board = React.createClass({
	render: function() {
		var cells = this.props.data.map(function(cell) {
			return (
				<Cell value={cell.value} />
			);
		});
		return (
			<div className="board">
				{cells}
			</div>
		);
	}
});

module.exports = Board;