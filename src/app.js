require('./styles/style.css');
require('./styles/line.css');
var React = require('react');
var Bingo = require('./components/Bingo.js');

React.render(
	<Bingo />,
	document.body
);