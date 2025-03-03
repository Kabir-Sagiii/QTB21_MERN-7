var data = [10, 20, 30, 40];

var newArray = data.filter(function (element, index) {
  //40-3
  //-------
  return element < 30; //[40]
});

console.log(newArray);

// o/p: [10,20,30,40]
