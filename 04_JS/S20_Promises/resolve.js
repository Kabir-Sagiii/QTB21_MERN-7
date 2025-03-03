var promiseObject = new Promise((resolve, reject) => {
  //   resolve("xyz");
  //   resolve(100);
  //   resolve(false);
  //   resolve({ name: "sagar", phn: 9999999 });
  //   resolve([10, 20, 30, 40]);
  resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
});

console.log(promiseObject);
