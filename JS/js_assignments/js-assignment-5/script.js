let isPasswordCorrect = "123";
if(isPasswordCorrect === "123") { // Check if password correct then it will allow
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}

// Step 3: Online Order Approval
let isPaymentDone = true;

if(isPaymentDone) {                   // Condition that check if payment done then it approve the order else reject
    console.log("Approve the Order");
} else {
    console.log("Reject the order");
}

// Step 4: Student Result System
let marks = 70;

if(marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Step 5: Office Attendance Check
let isOnTime = false;
if(isOnTime) {
    console.log("Present");
} else {
    console.log("Late");
}

// Step 6: Discount Eligibility
let isPremiumUser = true;

if(isPremiumUser) {
    console.log("Discount Applied");
} else {
    console.log("No Discount Available");
}

// Step 7: Multiple Conditions (else if)
let performanceScore = 80; // Multiple condition if, else if, and else to rate according to marks

if(performanceScore >= 90) {
    console.log("Excellent");
} else if(performanceScore >= 70) {
    console.log("Good");
} else if(performanceScore >= 50) {
    console.log("Average");
} else {
    console.log("Poor");
}
