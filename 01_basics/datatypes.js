let name = "Hozaifa" // strings 
let age = 18     // numerical
let isLoggedIn = true  // boolean 
let temp = null   

// null = stand alone value which means nothings but not nothing

console.log(typeof null);
console.log(typeof undefined);


// In JS we dont have to define types of data to be stored in variables which makes it Dynamically Typed Lang.
// primitive data types 
// 7 types of prrimitive data types -- Strings,Numbers,Boolean,Null, undefined , BigInt 

const Name = "Hozaifa"
const score = 100
const ScoreCard = 100.3
const IsloggedIn = false
const Temp = null
let  email;
const Bigdata = 1384847498402380238842408n


// non Primitive Data types  

// 3 types -- Arrays, Objects, Function

const Heroes = ["ironman","Batman","CaptainAmerica","Thor"];

let MyObjects= {
    Name: "hozaifa",
    Clasess: "Btech",
    age: 22
}

const Myfunction = function(){
    console.log("hello world");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Memory Allocation in JS

// Stack (Primitive DataTypes) And Heap (Non-Primitive DataTypes)
// IN stack data is stored in term of copy and in Heap data are stored in terms of refrence 
// so if data is changed in stack memory only for given variable but in heap it is changed for all variables
