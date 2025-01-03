var city = "hyd";
function fn() {
  console.log("fn is called");
}

function f1() {
  console.log(city);
  fn();
}

function f2() {
  console.log(city);
  fn();
}

f1();
f2();

fn();
