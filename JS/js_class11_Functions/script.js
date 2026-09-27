// if we miss passing argument the parameter will be undefined
// Solution for Undefined -> Default Parameter Passes if argument is missing

// Addition

function add(num1, num2) {
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}

add(6, 12);
add(34, 35);


// Person Details
function introduce(name, age, city) {
    console.log(`My name is ${name}`);
    console.log(`I'm ${age} years old`);
    console.log(`I'm from ${city}`);
}

introduce("Shayan", 21, "Peshawar");

// Default Parameters
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();

function login(email, password, role = "Buyer") {
    console.log(`Email: ${email} Password: ${password} Role: ${role}`);
}

login("shayan@gmail.com", "pass1122", "Seller");  // By default it take Buyer but if pass argument then Seller

// Return
function addNums(num1, num2) {
    return  num1 + num2;
}

console.log(addNums(14, 16));

function calculateAverage(marks) {
    let totalMarks = 0;
    for(let i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i];
    }

    let avergeMarks = totalMarks / marks.length;
    return avergeMarks;
}

const students = [
  {
    name: "Ali",
    marks: [85, 78, 92, 88],
    attendance: 90
  },
  {
    name: "Ahmed",
    marks: [55, 64, 59, 70],
    attendance: 75
  },
  {
    name: "Sara",
    marks: [95, 91, 89, 97],
    attendance: 96
  },
  {
    name: "Hamza",
    marks: [40, 52, 48, 45],
    attendance: 82
  }
];

let totalAverageMarksStudent1 = calculateAverage(students[0].marks);
let totalAverageMarksStudent2 = calculateAverage(students[1].marks);
let totalAverageMarksStudent3 = calculateAverage(students[2].marks);
let totalAverageMarksStudent4 = calculateAverage(students[3].marks);

console.log(totalAverageMarksStudent1); 
console.log(totalAverageMarksStudent2); 
console.log(totalAverageMarksStudent3); 
console.log(totalAverageMarksStudent4); 

function checkAverage(average, attendance) {
    if(average >= 50 && attendance >= 75) {
        console.log("Pass!");
    } else {
        console.log("Fail!");
    }
}

checkAverage(65, 80);

// Find Percentage
function finalResult(percent) {
    if(percent >= 50 && percent <= 100) {
        console.log("Passed");
    } else if(percent < 50 && percent >= 0) {
        console.log("failed");
    } else {
        console.log("Invalid Input");
    }
}

finalResult(105); // Invalid
finalResult(45); //fail
finalResult(67); // Passed

const userDetails = {
    email: "shayan@gmail.com",
    password: "1122",
    role: "admin"
}

function checkAdminRole(userDetails) {
    if(userDetails.role == "admin") {
        console.log("You are allow");
    } else {
        console.log("something in wrong!");
    }
};

// let userRole = prompt("Enter your role: ");

checkAdminRole(userDetails);