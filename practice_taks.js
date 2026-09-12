let product = {
    name: "Core i9",
    price: 80000,
    relase_year: 2025,
    ram: "16gb",
    company: "HP",
    new_features: {
        screen: [
            {
                screen_type: "Touch Screen",
                quality: "fast scrolling support"
            }
        ],
        keybord: "ligh supported keybord",
        memory: "1TB",
    }
}

console.log(product.name);
console.log(product.new_features.screen[0].screen_type);