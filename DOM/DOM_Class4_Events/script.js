// addEventListener
// element.addEvenetstenerListner("event", callback)
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", function() {
    msg.textContent = "Button Clicked";
});

let darkMD = document.getElementById("darkMD");
let lightMD = document.getElementById("lightMD");

darkMD.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

lightMD.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});

//  Input Event
let search = document.getElementById("search");
let output = document.getElementById("output");
let butn = document.getElementById("butn");
// let showInputText = "";

search.addEventListener("click", function() {
    output.innerText = search.value;
});

// console.log(showInputText);

// storeInput.addEventListener("click", function() {
//     output.textContent = showInputText.value;
// });
