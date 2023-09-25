const products = [
  {
    id: 1,
    sku: "abc",
    productName: "name 1",
    category: 1,
  },
  {
    id: 2,
    sku: "def",
    productName: "name 2",
    category: 2,
  },
  {
    id: 3,
    sku: "ghi",
    productName: "name 1",
    category: 2,
  },
  {
    id: 4,
    sku: "klm",
    productName: "name 1",
    category: 3,
  },
  {
    id: 5,
    sku: "xyz",
    productName: "name 1",
    category: 1,
  },
];

const pricing = [
  {
    sku: "abc",
    price: 10,
  },
  {
    sku: "def",
    price: 20,
  },
  {
    sku: "ghi",
    price: 30,
  },
  {
    sku: "klm",
    price: 40,
  },
  {
    sku: "xyz",
    price: 50,
  },
];

const categories = [
  {
    id: 1,
    name: "category1",
  },
  {
    id: 2,
    name: "category2",
  },
  {
    id: 3,
    name: "category3",
  },
  {
    id: 4,
    name: "category4",
  },
  {
    id: 5,
    name: "category5",
  },
];


// Create a mapping of SKU to price for quick lookup
const pricingMap = {};
pricing.forEach(item => {
  pricingMap[item.sku] = item.price;
});

console.log(pricingMap)


const categoryMap = {};
categories.forEach((category) => {
  categoryMap[category.id] = category.name;
});

// Add the price to each product
const productsWithPrice = products.map(product => ({
  ...product,
  price: pricingMap[product.sku],
  category: categoryMap[product.category]

  
}));

console.log(productsWithPrice);

git








module.exports={productsWithPrice}