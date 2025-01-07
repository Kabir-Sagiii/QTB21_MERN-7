// console.log(this);

function f1() {
  console.log(this);
}
// f1();

const myArrowFn = () => {
  console.log(this);
};
myArrowFn();
