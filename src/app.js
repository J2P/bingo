require('./styles/style.css');
require('./styles/line.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Bingo = require('./components/Bingo.js');

ReactDOM.render(
	<Bingo />,
	document.getElementById('root')
);