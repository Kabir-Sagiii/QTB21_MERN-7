var data = [10, 20, 30, 40];

var newData = data.map(function (element, index) {
  var result = element * 10; //200

  return result; //[100,200,300,400]
});

console.log(newData); // [-,-,-,-]
//[100,200,300,400]
