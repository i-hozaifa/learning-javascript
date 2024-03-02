// objects litrals
// this is how objects are declared in javascript

const mySum = Symbol("key1")     // Symbol datatype is defined
const jsUser = {
    name: 'hozaifa',
    "full name":" hozaifa taqui",
    [mySum]: "mykey",      // to make symbol an objects
    age: 20,
    location: 'kolkata',
    email: "hz@gmail.com",
    IsloggedIn: false,
    lastLogInDays: ['monday', 'wednesday']
}

// to access objects in js 

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySum]);      // to print symbol


