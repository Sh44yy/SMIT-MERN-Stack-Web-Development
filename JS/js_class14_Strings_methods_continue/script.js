// Split -> Convert string to arrays
let skills_1 = "HTML, CSS, Bootstrap, JS";
let skills_2 = "React| php| mysql";

console.log(skills_1.split(",")); //Can use any symbol here instead of comma(,)
console.log(skills_2.split("|"));

// Join -> Convert arrays to string
let student = ["Shayan", "Khan", "Studying", "at", "SMIT"];

console.log(student.join(" "));

// Reverse Array
console.log(student.reverse());

// Reverse String
let word = prompt("Enter to reverse: ");

// -> Now reverse method for String

// first convert into array
let wordIntoArray = word.split("");
console.log(wordIntoArray);

// -> Now we can reverse the array 
let reverseArray = wordIntoArray.reverse();
console.log(reverseArray);

// -> Now again convert into string 
let convertBackReveseString = reverseArray.join();
console.log(convertBackReveseString);



// if(word == convertBackReveseString) {
//     console.log("Valid Palindrom");
// } else {
//     console.log("Invalid Palindrom");
// }

// tabs

// Get file extention