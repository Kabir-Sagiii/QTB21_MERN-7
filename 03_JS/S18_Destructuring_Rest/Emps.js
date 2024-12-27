var emp = {
  empName: "Yash",
  gender: "male",
  city: "mumbai",
  phone: 89898976,
};

var { phone, city } = emp;

function f1() {
  console.log(emp.empName, emp.gender);
}
function f2() {
  console.log(phone, city);
}
function f3() {
  console.log();
}
f1();
f2();
