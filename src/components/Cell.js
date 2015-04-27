var React = require('react/addons');

var Cell = React.createClass({
	getInitialState: function() {
		return {
			selected: false 
		};
	},
	handleClick: function() {
		this.setState({ selected: true });
	},
	render: function() {
		var classes = React.addons.classSet({
				'cell': true,
        'selected': this.state.selected
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