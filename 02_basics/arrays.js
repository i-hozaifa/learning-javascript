const myArr = [1,2,3,4,5,6,7,8]
const heroes = ['ironman','captain america','hulk']
const myArr2 = new Array(1,2,34,56,990)
// these are the ways to declare in array

console.log(myArr2[3]);    // to find value of any index of an arrays


// Arrays methods........



// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.reverse());

// console.log(myArr.includes("3"));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()
console.log(typeof newArr);

// slice splice
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


console.log("A", myArr);
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

console.log("C", myArr);