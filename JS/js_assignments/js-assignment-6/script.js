// Step 2: Employee Role Access System
let role = prompt("Enter your role (admin / manager / developer / intern): ");

switch(role) {
    case "admin":
        alert("Full system access");
        break;
    case "manager":
        alert("Team management access");
        break;
    case "developer":
        alert("Code access");
        break;
    case "intern":
        alert("Limited access");
        break;
    default:
        alert("Invalid input. Please try again.");
        break;
}

// Step 3: Online Payment Method Selection
let paymentMethod = prompt("Choose payment method (credit / debit / upi / cod): ");

switch(paymentMethod) {
    case "credit":
        alert(`Your choose ${paymentMethod} payment method`);
        break;
    case "debit":
        alert(`Your choose ${paymentMethod} payment method`);
        break;
    case "upi":
        alert(`Your choose ${paymentMethod} payment method`);
        break;
    case "cod":
        alert(`Your choose ${paymentMethod} payment method`);
        break;
    default:
        alert("Invalid input. Please try again.");
        break;
}

// Step 4: Order Status Checker
let orderStatus = prompt("Enter order status (placed / packed / shipped / delivered / cancelled): ");

switch(orderStatus) {
    case "placed":
        alert(`Your order is ${orderStatus}`);
        break;
    case "packed":
        alert(`Your order is ${orderStatus}`);
        break;
    case "shipped":
        alert(`Your order is ${orderStatus}`);
        break;
    case "delivered":
        alert(`Your order is ${orderStatus}`);
        break;
    case "cancelled":
        alert(`Your order is ${orderStatus}`);
        break;
    default:
        alert("Invalid input. Please try again.");
        break;
}

// Step 5: Office Working Day Checker
let day = prompt("Enter day name (Monday – Sunday): ");

switch(day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "saturday":
        alert("Working day");
        break;
    case "friday":
        alert("Half day");
        break;
    case "sunday":
        alert("Holiday");
        break;
    default:
        alert("Invalid input. Please try again.");
        break;
}