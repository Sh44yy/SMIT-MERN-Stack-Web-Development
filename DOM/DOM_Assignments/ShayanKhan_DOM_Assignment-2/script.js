// Task 1: Select Element by ID
let welcomeStudentHeading1 = document.getElementById("welcomeStudentHeading1");
welcomeStudentHeading1.textContent = "DOM Element Selected by ID";

// Task 2: Select Elements by Tag Name
let pharas = document.getElementsByTagName("p");
pharas[0].textContent = "First paragraph updated";

// Task 3: Select Elements by Class Name
let clickMeBtn = document.getElementsByClassName("clickMeBtn");
clickMeBtn[1].textContent = "Click Me";

// Task 4: Use querySelector
let heading2ForQuery = document.querySelector("#heading2ForQuery");
heading2ForQuery.style.color = "blue";

// Task 5: Use querySelectorAll
let allListItems = document.querySelectorAll("li");

for(let item of allListItems) {
    item.style.color = "green";
}

// Task 6: Change Style Using Selected Element
let paraForStyling = document.querySelector(".paraForStyling");
paraForStyling.style.fontSize = "24px";
paraForStyling.style.color = "blue";
paraForStyling.style.backgroundColor = "#ADD8E6";