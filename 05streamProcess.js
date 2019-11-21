/* Stream with process object */

'use strict'

var stdin = process.stdin,
    stdout = process.stdout,
    person = {
      name: null,
      age:0
    }


const saveAge = (age) => {
  person.age = age;

  if(person.age >= 18){
    stdout.write(`${person.name} is adult, your age is: ${person.age} years old.`);
  }else{
    stdout.write(`${person.name} is young, your age is: ${person.age} years old.`);
  }
  process.exit();
}


const saveName = (name) =>{
  person.name = name;

  let question = `Hello ${person.name}, how old are you ?`;

  quiz(question,saveAge);
}


const quiz = (question,callback) =>{
  stdin.resume();
  stdout.write( question + ': ')

  stdin.once('data',function(res){
    callback( res.toString().trim() );
  });
}


stdin.setEncoding('utf8');
quiz('What is your name?', saveName);
