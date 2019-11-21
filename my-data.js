'user strict'

let dataPerson = {
	name: 'Miguel',
	lastName: 'Soler',
	age:27,
	favoriteLang:'Javascript',
	birthdayMonth:'January'
}

const favoriteLanguage = (name,language) =>{
	console.log(`${name}, your favorite language is: ${language}`);
}


module.exports.name = dataPerson.name;
module.exports.lastName = dataPerson.lastName;
module.exports.age = dataPerson.age;
module.exports.lang = dataPerson.favoriteLang;
module.exports.month = dataPerson.birthdayMonth;
module.exports.yourLanguage = favoriteLanguage;