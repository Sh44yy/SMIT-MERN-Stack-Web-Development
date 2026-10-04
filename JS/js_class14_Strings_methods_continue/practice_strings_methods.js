function processSupportTicket(rawName, rawLocation, rawMessage) {
    let cleanName = rawName.trim().toLowerCase();;
    let cleanLocation = rawLocation.trim().toLowerCase();
    let cleanMessage = rawMessage.trim().toLowerCase();
    
    return (`Name: ${cleanName}\nLocation: ${cleanLocation}\nMessage: ${cleanMessage}`);
}

let name = prompt("Name: ");
let myLocation = prompt("Location: ");
let message = prompt("Message: ");

let details = processSupportTicket(name, myLocation, message);
console.log(details);