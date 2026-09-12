// Products
let products = {
  BasicInfo: {
    name: "Air Max 2026",
    brand: "Nike",
    category: "Shoes",
    price: 25000,
  },
//   Stock
  stock: {
    available: true,
    Warehouses: [
      {
        city: "Peshawar",
        quantity: 10,
      },
      {
        city: "Islamabad",
        quantity: 8,
      },
    ],
  },
  // Rating
  rating: {
    Average: 4.5,
    Reviews: [
      {
        name: "Ali",
        rating: 5,
        comment: "Amazing shoes",
      },
      {
        name: "Ahmed",
        rating: 4,
        comment: "Very comfortable",
      },
      {
        name: "Sara",
        rating: 5,
        comment: "Worth the price",
      },
    ],
  },
  // Tags
  tags: ["shoes", "sports", "running", "nike"],
  // Variant
  Variants: [
    {
      color: "Black",
      size: 42,
      quantity: 5,
    },
    {
      color: "Black",
      size: 43,
      quantity: 3,
    },
    {
      color: "White",
      size: 42,
      quantity: 7,
    },
    {
      color: "White",
      size: 44,
      quantity: 4,
    },
  ],
};

// 1. Access nested data
console.log(`Product Name: ${products.BasicInfo.name}`);
console.log(`"Product Price: ${products.BasicInfo.price}`);
console.log(`"Peshawar Warehouse Stock: ${products.stock.Warehouses[0].quantity}`);
console.log(`"Product First Reivewer Name: ${products.rating.Reviews[0].name}`);
console.log(`"Product Variant Color: ${products.Variants[1].color}`);

// 2. Modify nested data
products.BasicInfo.price = 27000;
console.log(`Product new price: ${products.BasicInfo.price}`);

products.stock.Warehouses[0].quantity = 10;
console.log(`Product Peshawar Updated Stock: ${products.stock.Warehouses[0].quantity}`);

// 3. Array operation
products.tags.splice(4, 0, "premium");
console.log(`Product Added Updated Tags: ${products.tags}`);

products.tags.splice(2, 1);
console.log(`Product Running Remove Updated Tags: ${products.tags}`);

// 4. Add a new review
products.rating.Reviews.push(
    {
        name: "Bilal",
        rating: 4,
       comment: "Good quality"
    }
);

console.log(products.rating.Reviews);



