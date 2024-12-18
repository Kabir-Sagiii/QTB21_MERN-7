var products = [
  {
    brand: "Apple",
    model: "Iphone 15 pro max",
    price: 120000,
    rate: { rating: 4.5, count: 345 },
  },
  {
    brand: "Apple",
    model: "Iphone 16 pro max",
    price: 180000,
    rate: { rating: 4.8, count: 1045 },
  },
  {
    brand: "Samsung",
    model: "S23 ultra",
    price: 135000,
    rate: { rating: 4.9, count: 100 },
  },
  {
    brand: "Oneplus",
    model: "oneplus12 pro",
    price: 66000,
    rate: { rating: 4.2, count: 2345 },
  },
];

//WAF to print all the Apple brand Products

function getProducts() {
  var data = products.filter(function (element, index) {
    // return element.brand === "apple"; //[{},{}]
    return element.price < 100000;
  });

  console.log(data);
}

getProducts();
