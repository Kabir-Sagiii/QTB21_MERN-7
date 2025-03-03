var info = {
  name: "s1",
  city: "hyd",
  orders: [101, 105, 109, 111, 115],
};

console.log(info.orders[3]);

var ordersData = info.orders;
var value = ordersData[3];
console.log(value);
