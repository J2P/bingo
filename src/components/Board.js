var React = require('react');
var Cell = require('./Cell.js');

var Board = React.createClass({
	render: function() {
		return (
			<div className="board">
				<div className="row">
					<Cell/><Cell/><Cell/><Cell/><Cell/>
				</div>
				<div className="row">
					<Cell/><Cell/><Cell/><Cell/><Cell/>
				</div>
				<div className="row">
					<Cell/><Cell/><Cell/><Cell/><Cell/>
				</div>
				<div className="row">
					<Cell/><Cell/><Cell/><Cell/><Cell/>
				</div>
				<div className="row">
					<Cell/><Cell/><Cell/><Cell/><Cell/>
				</div>
			</div>
		);
	}
});

moduel.exports = Board;