var obj1 = {
  x: "xyz",
  fn: function f1() {
    console.log(this);
  },
};

obj1.fn();
