// Run after a Delay
console.log("First Log");

setTimeout(function () {
  console.log("Run after 3 Sec");
}, 3000);

console.log("Second Log");

setTimeout(function () {
  console.log("Welcome to JavaScript");
}, 5000);

// ClearTimeout()
let para = document.getElementById("para");
let btn = document.getElementById("btn");
// console.log(para);
// console.log(btn);

const xyz = setTimeout(function () {
  para.innerHTML = "Welcome to DOM";
}, 7000);

btn.addEventListener("click", function () {
  clearTimeout(xyz);
  para.innerHTML= "Welcome to Cancel";
});

