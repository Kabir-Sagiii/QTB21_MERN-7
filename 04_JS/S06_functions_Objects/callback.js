function f1(x) {
  console.log("f1 is called", x);
  x();
}

function f2() {
  console.log("f2 is called");
}

function f3(y) {
  console.log("f3 is called");
}

f(f2); //Passing the function as a argument
//f2 is called callback function
//f1 is HOF
f3(100);
