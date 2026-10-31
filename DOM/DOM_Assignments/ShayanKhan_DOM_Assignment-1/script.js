// Task 1: Change Text Using JavaScript
let heading1 = document.getElementById("heading1");
heading1.textContent = "Welcome to JavaScript DOM";

// Task 2: Change Paragraph Text on Button Click
let paragraph = document.getElementById("para");

function changeBtnFun() {
    paragraph.textContent = "Paragraph text changed!";
};

// Task 3: Change Background Color on Button Click
function changeBgBtnFun() {
    document.body.style.backgroundColor = "#ADD8E6";
};

// Task 4: Show Alert Message on Button Click
function showAlertOnBtnClickFun() {
    alert("DOM is working!");
};

// Task 5: Update Text Using Input Field
let inputName = document.getElementById("inputName");
let showInputNameBtn = document.getElementById("showInputNameBtn");
let displayInputName = document.getElementById("displayInputName");

let storeInputName = "";
inputName.addEventListener("input", function() {
    storeInputName = inputName.value;
});

function displayInputNameFun() {
    displayInputName.textContent = storeInputName;
}