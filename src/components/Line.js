var React = require('react/addons');

var Line = React.createClass({
	render: function() {
		return (
			<div className={this.props.position}></div>
		);
	}
});

module.exports = Line;