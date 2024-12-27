var arr = [10, 20, 30, 40, 50];

// var [_, _, x] = arr;

var [x, y, z, a, b] = arr;

function f1() {
  console.log(a, b); //40 50
}

function f2() {
  console.log(y, z); //20 30
}

function f3() {
  console.log(x); //10
}

// function f1() {
//   console.log(arr[3], arr[4]); //40 50
// }

// function f2() {
//   console.log(arr[1], arr[2]); //20 30
// }

// function f3() {
//   console.log(arr[0]); //10
// }

f1();
f2();
f3();
