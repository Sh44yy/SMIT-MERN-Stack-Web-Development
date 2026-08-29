
// Ternary OPERATOR:
// condition ? "FullFilled" : "Failed"

// Switch Statment:
/*switch(condition) {
    case 1:
        log
    case 2:
        log
    default:
        message
}*/


// let age = Number(prompt("Enter Your Age: "));
// let gender = prompt("Enter your Gender", "Male");


// If Else Condition
// if(age >= 18) {
//     document.write("You are eligible");
// } 
// else {
//     document.write("You aren't eligible");
// }

if(age >= 18 && gender == "Male") {
    document.write("You are eligible plz visit XYZ Male Polling Station");
} else if(age >= 18 && gender == "Female") {
    document.write("You are eligible plz visit XYZ Female Polling Station");
} else {
    document.write("Not Eligible");
}

// Alternative if else
    let result = age >= 18 ? "You are Eligible" : "You are not Eligible";
    document.write(result);

let marks = Number(prompt("Enter your Marks: "));

if(marks >= 80 && marks <= 100) {
    document.write("A grade");
} else if(marks >= 60) {
    document.write("B grade");
} else if(marks >= 50) {
    document.write("C grade");
} else {
    document.write("You are Failed, try next time");
}

document.write("<br>");


// Login
let role = "admin";
let email = "xyz@gmail.com";
let password = 123;

if(email == "xyz@gmail.com" && password == 123) {
    if(role == "admin") {
        document.write("You can Post!");
    } else {
        document.write("You can Post!");
        document.write("You can't Post!");
    }
} else {
    document.write("invalid crenditial");
}