let name = "hozaifa"
let secondName = 'Taqui'

// console.log(name + secondName + " anythings");

console.log(`hello my name is ${name} and my second name is ${secondName} and whatever uh can call`);

const GameName = new String('Hozaifa') // way to declare Strings in JS although it return same value as normal declaration
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf('z'));
const newString = GameName.substring(0,3);
console.log(newString);
const neww = GameName.slice(-7,3)   // to make start from reverse
console.log(neww);
const word = '    hzz      '
console.log(word);
console.log(word.trim());   // to trim extra spacess

const url = 'https://hozaifa.com/hozaifa%20ahmed'
console.log(url.replace('%20','##'));
 const sperate = 'hozaifa-hz-taqui'
 console.log(sperate.split('-'));