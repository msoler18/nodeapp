'use strict'

const EventEmitter = require('events');

class MyEmmiter extends EventEmitter {}

const myEmmiterFunc = new MyEmmiter();

const myEmmiterArrow = new MyEmmiter();


myEmmiterFunc.on('otherEvent', function(name){
	console.log(`${name}, node is awesome!!!`);
	console.log(this === myEmmiterFunc);
});


myEmmiterArrow.on('event', (name) => {
	setImmediate(() => {
		console.log(`${name}, node is awesome`);
		console.log(this === myEmmiterArrow);
	});
})



myEmmiterFunc.emit('otherEvent','Paola');
myEmmiterArrow.emit('event','Miguel');

