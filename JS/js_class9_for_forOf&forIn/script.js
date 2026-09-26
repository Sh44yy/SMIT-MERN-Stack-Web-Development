for(let i = 0; i <= 10; i++) {
    if(i % 2 != 0) {
        console.log("Odd Numbers " + i);
    }
}

let evenNums = [];

// Even Numbers in range of 15 to 45 & push to array
for(let i = 15; i < 45; i++) {
    if(i % 2 == 0) {
        evenNums.push(i);
        console.log(i);
    }
}
console.log("Length of even nums array is: " + evenNums.length);
console.log(evenNums);

// For In Loop
const fruits = ["Apple", "Mango", "Banana"];
const inputFruit = prompt("Enter your fruit: ");

for(const fruit of fruits) {
    if(inputFruit === fruit) {
        console.log("Yes Available: " + fruit);
    }
    //console.log(fruit); // It will print values of indexes if we use FOR OF loop here it just print the index
}

let cartProducts = [
    {
        id: 1, name:"Earbuds", price: 1000
    },
    {
        id: 2, name:"Charger", price: 800
    },
    {
        id: 1, name:"Leptopr", price: 60000
    }
]

let totalProductPrice = 0;

for(let product of cartProducts) {
    totalProductPrice = totalProductPrice + product.price;
}

console.log(totalProductPrice);