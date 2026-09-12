// Switch Statment

// Percentage
let percentage = 90;

switch(true) {
    case percentage >= 90 && percentage <= 100:
        document.write("A+");
        break;
    case percentage >= 80:
        document.write("A");
        break;
    default:
        document.write("Something went wrong!");
}

document.write("<br>");

// Week days
let day = Number(prompt("Enter day no: "));

switch(day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Thuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thursday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;
    default:
        document.write("Invalid!");
}

document.write("<br>");

// nullish coalescing operator:
/*The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is either null or undefined. Otherwise, it returns its left-hand side operand.*/

let role = undefined ?? "user";
document.write(role);

// Arrays
let students = ["Ahmad", "Hashir", "Aqib", "Naveed"];

console.log("array length: ", students.length);
console.log(students[1]);
console.log(students[students.length - 1]);

// Push and Pop at end
students.push("Mehran");
students.push("Rayyan");

students.pop();

// Add and Rempove from Start
students.unshift("Ali");
students.unshift("Kiramat");

students.shift();

// arrayName.slice(startIndex, endIndex): Doesn't change actual array
// Starting Index : included
// Ending Index : Excluded
let top_10_students = students.slice(0, 2);
console.log(students.slice(1, 4));

// Replace
students[1] = "Saddique";

// ['Ali', 'Saddique', 'Hashir', 'Aqib', 'Naveed', 'Mehran', empty × 4, 'Imran']
students[10] = "Imran";
console.log(students);

// Splice: Change in actual Array
// students.splice(start, count);
students.splice(4, 1);

// if want to add instead of remove students.splice(start_index, ,no_of_elements_want_t0_delete_or_replace, valueToAdd_or_replace);
students.splice(2, 0, "Saboor", "Maaz");

// Search in array
console.log(students.includes("Mehran")); // give boolean value

// Search element index
console.log(students.indexOf("Mehran"));