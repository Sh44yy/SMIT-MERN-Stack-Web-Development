// Question 9 — Discount Calculator
function calculateDiscount(price) {
    let finalPrice = 0;
    let discountAmount = 0;
    if(price >= 10000) {
        discountAmount = price * (20 / 100);
        finalPrice = price - discountAmount;
    } else if(price >= 5000 && price <= 9999) {
        discountAmount = price * (10 / 100);
        finalPrice = price - discountAmount;
    } else {
        finalPrice = price;
    }
    return "Final Price: " + finalPrice;
}

console.log(calculateDiscount(10000));
console.log(calculateDiscount(6000));
console.log(calculateDiscount(3000));


function checkAge(age) {
    if(age >= 18) {
        return "You are an adult.";
    } else {
        return "You are a minor.";
    }
}

console.log(checkAge(34));
console.log(checkAge(14));

function checkResults(marks) {
    if(marks >= 50) {
        return "Pass";
    } else {
        return "fail";
    }
}

console.log(checkResults(64));
console.log(checkResults(44));

// Even or odd
function checkNumber(num) {
    if(num % 2 == 0) {
        return "Even";
    } else {
        return "odd";
    }
}

console.log(checkNumber(12));
console.log(checkNumber(23));

function isLogin(login) {
    if(login) {
        return "Welcom Back!";
    } else {
        return "Please login first.";
    }
}

console.log(isLogin(true));
console.log(isLogin(false));

// Grade Calculate
function calculateGrade(marks) {
    if(marks >= 90 && marks <= 100) {
        return "A";
    } else if(marks >= 80 && marks <= 89) {
        return "B";
    } else if(marks >= 70 && marks <= 79) {
        return "C";
    } else if(marks >= 60 && marks <= 69) {
        return "D";
    } else {
        if(marks < 60) {
            return "Fail";
        } else {
            return "Invalid Input";
        }
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(75));
console.log(calculateGrade(65));
console.log(calculateGrade(55));
console.log(calculateGrade(105));

function checkTemperature(temp) {
    if(temp >= 35) {
        return "It's hot";
    } else if(temp >= 20 && temp <= 34) {
        return "Weather is normal";
    } else {
        return "It's cold";
    }
}

console.log(checkTemperature(37));
console.log(checkTemperature(27));
console.log(checkTemperature(15));

// Check Stock
function checkStock(productName, quantity) {
    if(quantity > 0) {
        return (`${productName} is Available.`);
    } else {
        return (`${productName} is out of stock.`);
    }
}

console.log(checkStock("Laptop", 5));
console.log(checkStock("Phone", 0));

// Shipping Calculator
function calculateShipping(orderAmount) {
    if(orderAmount >= 5000) {
        return "Free Shipping";
    } else {
        return "250 Shipping Fees";
    }
}

console.log(calculateShipping(6000));
console.log(calculateShipping(2000));

// Student Result System
function calculateAverage(marks1, marks2, marks3) {
    let average = 0;
    average = (marks1 + marks2 + marks3) / 3;
    return average;
}

function checkResult(average) {
    if(average >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function generateResult(name, average, isPassed) {
    console.log(`Name: ${name}`);
    console.log(`Average: ${average}`);
    console.log(`Result: ${isPassed}`);
}

let average = calculateAverage(70,80,90);
let isPassed = checkResult(average);

generateResult("Shayan", average, isPassed);