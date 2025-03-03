var user = {
  name: "Rohan",
  gender: "male",
  printCity: function f1() {
    console.log("Pune is a City");
  },
  fn: () => {
    console.log("Working");
  },
};

user.printCity();
user.fn();
user["fn"]();

//console.log()
//console["log"]("")
