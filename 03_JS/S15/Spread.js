var obj1 = {
  name: "Sid",
  gender: "male",
  id: 101,
};

var obj2 = {
  ...obj1,
  city: "hyd",
  name: "Priya",
  gender: "female",
};

console.log(obj1);
console.log(obj2);

console.log("------------------");
var arr1 = [10, 20, 30];
var arr3 = ["hi", "hello", "bye"];
var arr2 = [...arr1, ...arr3];

console.log(arr1);
console.log(arr2);
