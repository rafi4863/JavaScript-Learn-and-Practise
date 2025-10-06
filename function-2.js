
const products1 = {
    name : "Laptop",
    price : 52000,
    Brand : "HP Elitbook"
};


const products2 = {
    name : "Toyota CHR",
    price : 4000000,
    Brand : "Toyota"
};


const products3 = {
    name : "Shoes",
    price : 1500,
    Brand : "Apex"
};


function products(anyProducts) {
    
    console.log(` Product name is ${anyProducts.name} and its price ${anyProducts.price} brand name is ${anyProducts.Brand} `);
    
}

products(products1);
