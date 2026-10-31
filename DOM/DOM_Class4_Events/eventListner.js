const input = document.getElementById("inputField");
const submitBtn = document.getElementById("submitBtn");
const outputPara = document.getElementById("para");

let finalResult = "";


input.addEventListener("input", function() {
    finalResult = input.value;
});



submitBtn.addEventListener("click", function() {
    outputPara.textContent = finalResult;
});

console.log(finalResult);