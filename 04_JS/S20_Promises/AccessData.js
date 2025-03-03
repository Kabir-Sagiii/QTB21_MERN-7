var promiseObject = new Promise((resolve, reject) => {
  //   reject({
  //     ok: false,
  //     error: "Something went Wrong",
  //   });

  resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
});

//Success Data

promiseObject
  .then((successdata) => {
    console.log("Success Data");
    console.log(successdata);
  })
  .catch((errordata) => {
    console.log("Error Data");
    console.log(errordata);
  });
