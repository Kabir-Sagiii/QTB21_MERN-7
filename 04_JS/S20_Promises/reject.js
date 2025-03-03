var promiseObject = new Promise((resolve, reject) => {
  //   reject("xyz");
  //   reject(100);
  //   reject(false);
  //   reject({ name: "sagar", phn: 9999999 });
  //   reject([10, 20, 30, 40]);
  reject([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
});

console.log(promiseObject);
