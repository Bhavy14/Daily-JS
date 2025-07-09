//strings are immutable
const name = "Bhavy"
const cpunt = 12

// console.log(name + cpunt + "Thx");

console.log(`hello ${name} and ${cpunt}`);

const gameName = new String('Time-pass')

// console.log(gameName[2]);
// console.log(gameName.__proto__);
 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newGame = gameName.substring(2, 7)
console.log(newGame);

const ano = gameName.slice(-6, 4)
console.log(ano);

// for replace first we have to give word which we want to replace then the word with we wiil be actually repaced it

//includes...  alaways gives boolean value
//includes('Bhavy')

//to convert it into array
console.log(gameName.split('-'));
