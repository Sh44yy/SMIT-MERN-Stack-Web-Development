let productArray = [
    {id: 1, name: "Headphones", price: 2500, category: "Electronics", stock: 10},
    {id: 2, name: "Keyboard", price: 3500, category: "Electronics", stock: 8},
    {id: 3, name: "T-Shirt", price: 1200, category: "Clothing", stock: 15},
    {id: 4, name: "Shoes", price: 4500, category: "Clothing", stock: 5},
    {id: 5, name: "Backpack", price: 2000, category: "Accessories", stock: 7}
];

// push an object as a index
productArray.push({id: 6, name: "Books", price: 400, category: "Accessories", stock: 13});

// document.write(`ID\t\tName\t\tPrice\t\tCategory\t\tStock<br>`)
// for(let i = 0; i < productArray.length; i++) {
//     document.write(`${productArray[i].id}`);
//     document.write(`\t\t${productArray[i].name}`);
//     document.write(`\t\t${productArray[i].price}`);
//     document.write(`\t\t${productArray[i].category}`);
//     document.write(`\t\t${productArray[i].stock}`);
//     document.write("<br>")
// }

let tableHTML = `<table border="1px" style="border-collapse: collapse">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
`;

for(let i = 0; i < productArray.length; i++) {
    tableHTML += `
        <tr>
            <td>${productArray[i].id}</td>
            <td>${productArray[i].name}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].category}</td>
            <td>${productArray[i].stock}</td>
        </tr>
    `;
};

tableHTML += `
    </tbody></table>;
`

document.write(tableHTML);

// let setAttributeToPara = document.getElementById("para");

// setAttributeToPara.classList.add("my-search");

let element = document.querySelector("img");
console.log(element.getAttribute("alt"));

// let setImgAtt = document.getElementsByTagName("img");
// setImgAtt.se