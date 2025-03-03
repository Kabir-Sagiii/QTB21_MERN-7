function createPromise() {
  return new Promise(function (resolve, reject) {
    // reject({ ok: false, result: "something went wrong" });
    resolve({ ok: true, result: [{ name: "xyz" }, { name: "abc" }] });
  });
}

// var promiseObject = createPromise();

// promiseObject
//   .then((success) => {
//     console.log("success");
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log("error");
//     console.log(error);
//   });

// async function handlePromise() {
//   var data = await createPromise();
//   console.log(data);
// }
// handlePromise();

async function handleErrorPromise() {
  try {
    var res = await createPromise();
    console.log("try block");
    console.log(res);
  } catch (error) {
    console.log("error block");
    console.log(error);
  }
}
handleErrorPromise();
