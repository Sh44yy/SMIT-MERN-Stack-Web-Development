// textContent vs innerHTML vs innerText
// -> InnerHTML used innerHTML tags as well while textContent take tag just as content
let paragraph = document.getElementById("para");
paragraph.textContent = "<strong>Welcome to ReactJS</strong>";
// paragraph.innerHTML = "<strong>Welcome to ReactJS</strong>";
console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);


// getAttribute(attributeName), setAttribute(attributeName, valueToChange), removeAttribute(attributeName)
let logo = document.getElementById("logo");
console.log(logo.getAttribute("alt"));

let setImgAttributeVlaue = logo.setAttribute("alt", "Smart Ring Logo");
console.log(logo.getAttribute("alt"));

// classList.add("className"), classList.remove("className"), classList.toggle("className"), classList.contains("className")->Contains give boolean value


