// Arithmetic Operators
let a = 6;
let b = 3;

console.log(`${a}+${b}: ${a+b}`);
console.log(`${a}-${b}: ${a-b}`);
console.log(`${a}*${b}: ${a*b}`);
console.log(`${a}/${b}: ${a/b}`);
console.log(`${a}%${b}: ${a%b}`);

// Assignment Operators
let num = 5;
console.log(num);
console.log(`${num} -= 2: ${num += 2}`);
console.log(`${num} -= 1: ${num -= 1}`);
console.log(`${num} *= 2: ${num *= 2}`);
console.log(`${num} /= 2: ${num /= 2}`);

// Comparison Operators

console.log(`${2} == ${2}: ${2 == 2}`);
console.log(`${3} === ${`"3"`}: ${3 === "3"}`);
console.log(`${2} != ${3}: ${2 != 3}`);
console.log(`${5} > ${3}: ${5 > 3}`);
console.log(`${5} < ${3}: ${5 < 3}`);
console.log(`${5} >= ${5}: ${5 >= 5}`);
console.log(`${3} <= ${2}: ${3 <= 2}`);

// Expressions
let price = 500;
let quantity = 5;

let totalPrice = price * quantity;
console.log(`Total Price: ${totalPrice}`);

let mark_1 = 70;
let mark_2 = 60;
let mark_3 = 75;

let finalScore = mark_1 + mark_2 + mark_3;
console.log(`Final Score: ${finalScore}`);

// Compare a number and a string using == and ===.
console.log(`"10" == 10: ${"10" == 10}`); // == just check value equality which is true
console.log(`"10" === 10: ${`"10"` === 10}`); // While === check both values and datatype of both which is not true