// There are 2 types of data type
//  Premative : It holds single value
// ->Number 
//  -> String
//  -> Null
//  -> Undefined
//  -> Boolean
// Non Premative : It holds group/multiple values

let num = 12;
console.log("num: " + typeof num);

let name = "Shayan";
console.log("Name: " + typeof name);

let isLogin = true;
console.log("isLogin: " + typeof isLogin);

let a;
console.log("No Value: " + typeof a);

let b = null;
console.log("nullValue: " + typeof b);

// Symbol is used for unique value
let c = Symbol("hello");
let d = Symbol("hello");

console.log(c, d);

console.log(c == d);

// Logical Operators

let email = "shayan@gmail.com"
let password = "sk123";
let termAndCondition = true;

console.log("AND Operator isLogin: ", email === "shayan@gmail.com" && password === "sk123" && termAndCondition === true);

console.log("OR Operator isLogin: ", email === "shayan@gmail.com" || password === "sk123" || termAndCondition === false);