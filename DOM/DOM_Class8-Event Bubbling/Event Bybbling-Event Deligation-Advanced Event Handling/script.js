let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
});

child.addEventListener("click", function() {
    console.log("Child Clicked");
});


// Child Bubbling



