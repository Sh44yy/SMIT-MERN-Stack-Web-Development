const msg = document.getElementById("msg");

msg.textContent = "Salam, Shayan!";
console.log(msg.textContent);

msg.innerHTML = "<b>Sale</b> today";
console.log(msg.innerHTML);

// Chnage Attribute
const pic = document.getElementById("pic");
pic.setAttribute("src", "logo2.png");

console.log(pic.getAttribute("src"));

pic.removeAttribute("src");
console.log(pic.getAttribute("src"));

// Change Classes
msg.classList.add("big");
console.log(msg.classList.contains("big"));

msg.classList.toggle("big");

msg.classList.add("to-big");
console.log(msg.classList.contains("to-big"));

msg.classList.remove("to-big");
msg.classList.toggle("to-big");