
// Task 1: Add a Class
let paraForHighlight = document.getElementById("paraForHighlight");
let addHighlightBtn = document.getElementById("addHighlightBtn");

addHighlightBtn.addEventListener("click", function() {
    paraForHighlight.classList.add("highlight");
});


// Task 2: Remove a Class
let removeHighlightBtn = document.getElementById("removeHighlightBtn");

removeHighlightBtn.addEventListener("click", function() {
    paraForHighlight.classList.remove("highlight");
});


// Task 3: Toggle a Class
let toggleHighlightBtn = document.getElementById("toggleHighlightBtn");

toggleHighlightBtn.addEventListener("click", function() {
    paraForHighlight.classList.toggle("highlight");
});


// Task 4: Check Class Exists
let checkHighlightBtn = document.getElementById("checkHighlightBtn");

checkHighlightBtn.addEventListener("click", function() {

    if(paraForHighlight.classList.contains("highlight")) {
        alert("Class exists");
    }
    else {
        alert("Class not exists");
    }

});


// Task 5: Button Active State
let buyNowBtn = document.getElementById("buyNowBtn");

buyNowBtn.addEventListener("click", function() {
    buyNowBtn.classList.toggle("active-btn");
});


// Task 6: Dark Mode
let darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
