// A student can enter the exam only if:
let age = 21;
let feePaid = true;

if(age >= 18 && feePaid == true) {
    console.log("Student is Allowed"); // Return True b/c both condition true
} else {
    console.log("Student is not Allowed");
}

// A user can login if:
let emailCorrect = true;
let phoneCorrect = false;

if(emailCorrect == true || phoneCorrect == true) { // Return true b/c OR Operator return true on one condition true
    console.log("Login Successfully");
} else {
    console.log("Login Failed");
}

// If a user is not blocked, they can access the website.
let isBlocked = true;

if(isBlocked != true) {
    console.log("Access allowed"); // Return False b/c it revert the isBlock True value to False
} else {
    console.log("Access denied");
}

/* A user gets a special discount if:
-> User is logged in
-> AND (user is a premium member OR user has a coupon) */
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

if(isLoggedIn == true && (isPremium == true || hasCoupon == true)) {
    console.log("You have Special Discount"); //This will return true b/c isLoggedIn is comparing with (isPremium == true || hasCoupon == true) through AND operator which mean one of them isPremium/hasCoupon true and isLoggedIn true will make the condition true.
} else {
    console.log("No Special Discount");
}