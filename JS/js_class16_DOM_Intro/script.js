// 1. getElementByID 
// const heading = document.getElementById("heading");
// heading.textContent = "I understand Dom";
// console.log(heading);

// const myHeading = document.getElementById("myName");
// myHeading.textContent = "Im learning JavaScript DOM!";


// 2. querySelector
// const heading3 = document.querySelector("#title");
// const pharagraph1 = document.querySelectorAll(".message");

// console.log(heading3);
// console.log(pharagraph1);

const x = document.querySelector(".info");
const y = document.querySelectorAll(".info");
const z = document.getElementById("main");

console.log(x.textContent);
console.log(y.length);
console.log(z.textContent);