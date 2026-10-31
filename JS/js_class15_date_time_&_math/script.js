let myDate = new Date();

console.log(typeof myDate);
console.log(myDate);
console.log("toDateString:" + myDate.toDateString());
console.log("toISOString: " + myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());

// Declear date
let myDeclearedDate = new Date(2006, 8, 5, 6, 30); // year, month start from 0, date, hour, minutes, seconds
console.log(myDeclearedDate.toLocaleString());

// now in yy-mm-dd
let myDeclearedDateNewFormat = new Date("2015-01-07");
console.log(myDeclearedDateNewFormat.toLocaleDateString());

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());