var obj1 = {
  x: "xyz",
  fn: () => {
    console.log(this);
  },
};

obj1.fn();
