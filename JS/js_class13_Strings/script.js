// String is sequence of characters
// there are 3 ways to define strings -> double quotes(""), single quote(''), back ticks(``)

let fName = 'Shayan';
let lName = "Khan";
let fullName = `My Name is ${fName} ${lName}`;

console.log(fName);
console.log(lName);
console.log(fullName);

let details_1 = 'I learned "JavaScript"';
let details_2 = "I learned 'JavaScript'";
let details_3 = `I Learned "JavaScript"`;

// String Length
console.log(fName.length);

// Upper Case
console.log(fName.toLocaleUpperCase());
console.log(fName.toLocaleLowerCase());


// Slice Support negative Indexing While string not support Negative Indexing
console.log(details_1.substring(2, 9));

// Trim()-> Remove Spaces
let userName = prompt("Enter Your User Name").trim();
if(userName == "Shayan Khan") {
    console.log("Correct Name!");
} else {
    console.log("Incorrect Name");
}


// includes()
let email = prompt("Enter Email");

if(email.includes == "@") {
    console.log("Correct Email");
} else {
    console.log("False Email");
}

// StartWith()
let myString = "How are you";
console.log(myString.startsWith("you"));


// endsWith()


// indexOf()-> Help you to find Index  -> when not found show(-1)


// lastIndexOf() -> return last word starting index of repeating word


// replace(word_found_to_replace, word_that_replace_this) -> Replace single word/string

// ReplaceAll() -> Replace every repeated word/string


// Length of string
let name = "Shayan Khan";
console.log(`length of name: ${name.length}`);

// UpperCase
let text = "javascript is powerful";
console.log(`To Upper Case: ${text.toUpperCase()}`);
console.log(`To Lower Case: ${text.toLowerCase()}`);

// trim() ->Remove Extra Spaces
let subject = "  Software Engineering ".trim();
console.log(`Remove Extra spaces: ${subject}`);

let myEmail = "shayankhan@gamail.com";

// Includes
console.log(myEmail.includes("@") && myEmail.includes(".com"));

// Replace
console.log(myEmail.replace("khan", "Ahmad"));

let myRepeat = "Hi hello world hi";
// replaceAll-> Replace all  repeated words
console.log(myRepeat.replaceAll("hi", "Hi"));

// startWith
let url = "www.google.com";

console.log(url.startsWith("www"));
console.log(url.endsWith(".com") || url.endsWith(".site"));
