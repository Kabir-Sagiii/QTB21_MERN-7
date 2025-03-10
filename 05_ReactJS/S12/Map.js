var data = [2, 5, 6, 8, 10, 6789];

// data.map(function(element){
// return JSX Code
// })

var newArray = data.map(function (element) {
  return element * element; //[4,25,36,64]
});

console.log(newArray);

// [4,25,36,64,100,-----]

// function findSquares() {
//   var newArray = [];
//   while (data.length > 0) {
//     var first = data[0];
//     var res = first * first;
//     newArray.push(res);
//     data.shift();
//   }
//   return newArray;
// }
// var result = findSquares();
// console.log(result);
