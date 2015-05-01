var React = require('react/addons');

var Cell = React.createClass({
	handleClick: function() {
		this.props.onClick(this);
	},

	render: function() {
		var classes = React.addons.classSet({
			cell: true,
			selected: this.props.selected
    });

		return (
			<div className={classes} onClick={this.handleClick}>
				<div className="circle"></div>
				{this.props.value}
			</div>
		);
	}
});

module.exports = Cell;