var React = require('react');
var classNames = require('classNames');
React.initializeTouchEvents(true);

var Cell = React.createClass({
	handleClick: function() {
		this.props.onClick(this);
	},

	render: function() {
		var classes = classNames({
			cell: true,
			selected: this.props.selected
    });

		return (
			<div className={classes} onClick={this.handleClick} onTouchStart={this.handleClick}>
				<div className="circle"></div>
				{this.props.value}
			</div>
		);
	}
});

module.exports = Cell;