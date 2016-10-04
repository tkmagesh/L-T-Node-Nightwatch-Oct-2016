var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Calculator(){
	EventEmitter.call(this);
}

util.inherits(Calculator, EventEmitter);

Calculator.prototype.add = function(x,y){
	var result =  x + y;
	this.emit('add', result)
}
Calculator.prototype.subtract = function(x,y){
	var result =  x - y;
	this.emit('subtract', result)
}
Calculator.prototype.multiply = function(x,y){
	var result =  x * y;
	this.emit('multiply', result)
}
Calculator.prototype.divide = function(x,y){
	var result =  x / y;
	this.emit('divide', result)
}

module.exports = Calculator;