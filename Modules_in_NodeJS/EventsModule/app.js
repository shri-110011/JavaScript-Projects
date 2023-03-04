var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function(){
	console.log("Ring ring ring!");
	eventEmitter.emit('bellRings', "Welcome");
}

eventEmitter.on('doorOpen',ringbell); //eventEmitter.on('<event>', eventHandler) function specifies what has to happen when an event occurs.
//Note: We can't start an event before we define what has to happen when the event occurs.

eventEmitter.on('bellRings', function(msg){
	console.log(msg);
})

eventEmitter.emit('doorOpen');//eventEmitter.emit('<event>') is used to start an event.