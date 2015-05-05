var socket = require('socket.io-client')('http://localhost:3000');
var React = require('react');
var classNames = require('classNames');
var Cell = require('./Cell.js');
var Line = require('./Line.js');
React.initializeTouchEvents(true);

var Bingo = React.createClass({
	getInitialState: function() {
		socket.on('init', this.setInitial);
		socket.on('select:number', this.selectNumber);

		return {
			title: 'BINGO',
			blue: false,
    	green: false,
    	red: false,
    	orange: false,
    	purple: false,
			board: [],
			lines: []
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

	selectNumber: function(data) {
		this.setState({
			board: data.users[this.user]['board'],
			lines: data.users[this.user]['lines']
		});
	},

	render: function() {
		var self = this;
		var cells = this.state.board.map(function(cell) {
			return (
				<Cell 
					value={cell.value} 
					key={cell.id} 
					selected={cell.selected} 
					onClick={self.handleClick}
					onTouchStart={self.handleClick} />
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