var x = 10;

function f1() {
  setImmediate(() => {
    console.log("f3");
  });
  Promise.resolve("f1").then((res) => {
    console.log(res);
  });

  process.nextTick(() => {
    for (var i = 0; i < 1000; i++) {
      console.log("");
    }
    console.log("f2");
  });
}
f1();
console.log(x);
