let inputTask = document.getElementById("inputTask");
let addInputTaskBtn = document.getElementById("addInputTaskBtn");
let listItems = document.getElementById("listItems");

let storeInputTask = "";

inputTask.addEventListener("input", function () {
    storeInputTask = inputTask.value;
});

addInputTaskBtn.addEventListener("click", function () {

    if (storeInputTask.trim() === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = storeInputTask;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Item";

    // Append button inside li
    li.appendChild(removeBtn);

    // Append li inside ul
    listItems.appendChild(li);

    // Remove individual task
    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    // Clear input
    inputTask.value = "";
    storeInputTask = "";
});