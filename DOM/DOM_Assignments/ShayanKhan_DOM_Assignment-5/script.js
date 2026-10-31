// Task 1: Button Click Event
let clickMeBtnAlert = document.getElementById("clickMeBtnAlert");
clickMeBtnAlert.addEventListener("click", function() {
    alert("Button Clicked Successfully");
});


// Task 2: Change Text on Click
let changeParaTextBtn = document.getElementById("changeParaTextBtn");
let changeParaText = document.getElementById("changeParaText");

changeParaTextBtn.addEventListener("click", function() {
    changeParaText.textContent = "Text Updated Successfully";
});

// Task 3: Background Color Change
let changeBgBtn = document.getElementById("changeBgBtn");
changeBgBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "grey";
})


// Task 4: Input Event (Live Typing)
let liveTypingInputName = document.getElementById("liveTypingInputName");
let outputLiveTypingInputName = document.getElementById("outputLiveTypingInputName");

liveTypingInputName.addEventListener("input", function() {
    outputLiveTypingInputName.textContent = liveTypingInputName.value;
});

// Task 5: Mouse Events


// Task 6: Double Click Event