// While Loop
let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
};

let password = false;
let attempt = 3;

let j = 1;
while(!password && j <= attempt) {
    console.error("Try Again");
    j++;
}

let k = 1;

do {
    console.log("show menu");
    k++;
} while(k < 3);