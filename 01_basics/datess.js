let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();  // it gives exact now dates.. it comes in mili second
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));   // it makes easy to compare values for further use


let newDate = new Date()  // date is an object
console.log(newDate.getDay());