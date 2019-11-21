'use strict'

var person = require('./my-data.js');

const greet = (name,lastname,age) => {
	console.log(`Hello ${name} ${lastname} your age is: ${age}, you are young!!!`);
}

greet(person.name,person.lastName,person.age);
person.yourLanguage(person.name,person.lang);