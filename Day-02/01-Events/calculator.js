function add(x,y){
	var result = x + y;
	emit('add', result);
	
}
function subtract(x,y){
	var result = x - y;
	emit('subtract', result);
	
}
function multiply(x,y){
	var result = x * y;
	emit('multiply', result);
	
}
function divide(x,y){
	var result = x / y;
	emit('divide', result);
}

var _subscriptions = {
	add : [],
	subtract : [],
	multiply : [],
	divide : []
};

function on(eventName, subscription){
	_subscriptions[eventName].push(subscription);
}

function emit(eventName, result){
	var eventSubscriptions = _subscriptions[eventName];
	for(var i=0; i < eventSubscriptions.length; i++){
		var eventSubscription = eventSubscriptions[i];
		if (typeof eventSubscription === 'function')
			eventSubscription(result);
	}
}


module.exports = {
	add : add,
	subtract : subtract,
	multiply : multiply,
	divide : divide,
	on : on,
	emit : emit
}