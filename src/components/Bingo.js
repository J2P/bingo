var socket = require('socket.io-client')('http://localhost:3000');
var React = require('react');
var classNames = require('classNames');
var Cell = require('./Cell.js');
var Line = require('./Line.js');

var Bingo = React.createClass({
	getInitialState: function() {
		socket.on('init', this.setInitial);
		socket.on('change:number', this.changeNumber);

		return {
			title: 'BINGO',
			blue: false,
    	green: false,
    	red: false,
    	orange: false,
    	purple: false,
			board: [],
			lines: [
				'line left_diagonal',
				'line right_diagonal',
				'line horizontal horizontal_line_one',
				'line horizontal horizontal_line_two',
				'line horizontal horizontal_line_three',
				'line horizontal horizontal_line_four',
				'line horizontal horizontal_line_five',
				'line vertical vertical_line_one',
				'line vertical vertical_line_two',
				'line vertical vertical_line_three',
				'line vertical vertical_line_four',
				'line vertical vertical_line_five'
			]
		}
	},

	componentDidMount: function() {
		this.user = 'user_' + Math.random().toString(36).substring(7);
		socket.emit('join', { 
			user : this.user 
		});
	},

	handleClick: function(cell) {
		socket.emit('send:number', {
			user: this.user,
			number: cell.props.value
		});
	},
	
	setInitial: function(data) {
		var initData = { board: data.board };
		initData[data.color] = true;
		this.setState(initData);
	},

	changeNumber: function(data) {
		this.setState({board: data.users[this.user]['board']});
	},

	render: function() {
		var self = this;
		var cells = this.state.board.map(function(cell) {
			return (
				<Cell 
					value={cell.value} 
					key={cell.id} 
					selected={cell.selected} 
					onClick={self.handleClick} />
			);
		});

		var lines = this.state.lines.map(function(line) {
			return (
				<Line position={line} />
			);
		});
		
		var classes = classNames({
				container: true,
        blue: this.state.blue,
        green: this.state.green,
        red: this.state.red,
        orange: this.state.orange,
        purple: this.state.purple,
    });

		return (
			<div className={classes}>
				<h1>{this.state.title}</h1>
				<div className="bingo">
					{lines}
					{cells}
				</div>
			</div>
		);
	}
});

module.exports = Bingo;