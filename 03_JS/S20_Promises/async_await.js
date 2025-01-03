function createPromise() {
  var promiseObject = new Promise((resolve, reject) => {
    resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
  });

  return promiseObject;
}

function f1() {
  return "hello dude";
}

async function myfun() {
  //Note: Inside the Async function only we can use await Operator

  //Note: Await Operator is used with the function which returns Promsie Object

  let data = await createPromise(); //function should return promise
  console.log(data);
}
myfun();
