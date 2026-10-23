// Step 2: JavaScript Data Types
let name = "Shayan Khan";
let age = 21;
let isMale = true;
let graduate;
let occupation = null;

console.log(`name type: ${typeof name}`);
console.log(`age type: ${typeof age}`);
console.log(`isMale type: ${typeof isMale}`);
console.log(`graduate type: ${typeof graduate}`);
console.log(`occupation type: ${typeof occupation}`);

// Step 4: Convert Data Types (Type Conversion)
let idNo = "16438";
let contact = 9231291235;
isHuman = "true";

let stringToNumber = Number(idNo);
let numberToString = String(contact);
let stringToBoolean =  Boolean(isHuman);

console.log(`${typeof stringToNumber}: ${stringToNumber}`);
console.log(`${typeof numberToString}: ${numberToString}`);
console.log(`${typeof stringToBoolean}: ${stringToBoolean}`);

// Step 6: Practice Task
let nonNumeric = "abc";
let toNumeric = Number(nonNumeric);
console.log(`${typeof toNumeric}: ${toNumeric}`);

console.log(Boolean(0));
console.log(Boolean(1));
