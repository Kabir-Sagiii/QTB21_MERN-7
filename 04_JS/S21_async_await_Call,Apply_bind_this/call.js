var myobj = {
  name: "abc",
};

function f1(x, y) {
  console.log(this, x, y); //this= myobj
}

// const arrow = () => {
//   console.log(this);
// };
// arrow.call(myobj);

// f1.call(myobj, 3, 4);

f1.apply(myobj, [20, 30]);

var x = f1.bind(myobj, 300, 400);
x();
