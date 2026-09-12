/*
student details
name "Shayan Khan"
age 21
gender "male"
marks 996
studClass 12
contact "+923129123034"
address "Peshawar"

object:-
->Properties in which key value pairs (age: 21)
*/

let student_Details = {
    name: "Shayan Khan",
    age: 21,
    gender: "Male",
    marks: 996,
    student_Class: 12,
    contact: "+923129123034",
    address: [
        { // Object inside Key
            city: "Peshawar",
            Country: "Pakistan",
            street: "2345"
        }
    ],
    
    skills: ["HTML", "CSS", "JS"]
}

console.log(student_Details);

// Accessing JavaScript Properties
// objectNmae.property
console.log("Student name is: " + student_Details.name);
// objectName["property"]
console.log(student_Details["contact"]);

// Add Properties to object
student_Details.id = 16438;

console.log("Add ID Property: ");
console.log(student_Details);

// change property value
student_Details.age = 20;

console.log("Change Student Age: ");
console.log(student_Details);

// Arry Element Access inside object array
console.log("Student specific Skill: " + student_Details.skills[1]);

// Delete speicific Key
delete student_Details.age;

console.log(student_Details.address.Country);


