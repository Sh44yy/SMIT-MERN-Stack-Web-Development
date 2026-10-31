// Task 1: Get an Attribute Value
let myBrandLogo = document.getElementById("myBrandLogo");
let getMyBrandLogoSRC = myBrandLogo.getAttribute("src");
console.log(getMyBrandLogoSRC);

// Task 2: Change Image Source
let changeImageBtn = document.getElementById("changeImageBtn");
function changeImageBtnFun() {
    myBrandLogo.setAttribute("src", "updatedLogo.jpg");
}

// Task 3: Set Attribute to Input Field
let inputName = document.getElementById("inputName");
inputName.setAttribute("placeholder", "Enter your name");

// Task 4: Remove an Attribute
let disabledBtnToEnabled = document.getElementById("disabledBtnToEnabled");
disabledBtnToEnabled.removeAttribute("disabled");

// Task 5: Check if Attribute Exists
let paraClassExist = document.getElementById("paraClassExist");
console.log(paraClassExist.hasAttribute("class"));

// Task 6: Change Link Destination
let changeLink = document.getElementById("changeLink");
function changeLinkFun() {
    changeLink.setAttribute("href", "https://www.w3schools.com/js/");
}
