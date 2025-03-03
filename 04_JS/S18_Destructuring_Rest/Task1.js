//Create a JS function which return one array,
// that array should contain only two element

function fn() {
  var data = [
    "hello dude",
    () => {
      console.log("We are  Practising !!!");
    },
  ];
  return data;
}

// var x = fn();
// x[1]();

// var mydata = fn(); //mydata = ["----",()]
// var [x, y] = mydata;
// y();

var [x, y] = fn();
y();
console.log(x);
