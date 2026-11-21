let userNameInput = document.getElementById("userNameInput");
let resultPara = document.getElementById("resultPara");
let resultBtn = document.getElementById("resultBtn");

userNameInput.addEventListener("input", function() {
  resultBtn.disabled = (userNameInput.value.length === 0);
});


// Radio Button
function querySelectedRadio() {
    let radioSelected = document.querySelector("input[name=`gender`]:checked");

if(radioSelected) {
    console.log(radioSelected.value);
}
}

querySelectedRadio();

resultBtn.addEventListener("click", function(e) {

    e.preventDefault();  // Form submit reload browser and preventDefault() prevent reload from losing value


    if(userNameInput.value.length < 4 || userNameInput.value.length > 12) {
        alert("UserName Must be 4 & 12 Characters");
        return;
    }
    
    resultPara.textContent = userNameInput.value;
});

