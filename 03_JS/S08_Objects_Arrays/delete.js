var obj = {
  name: "s1",
  city: "c1",
  gender: "g1",
};

console.log(obj);

//remove
delete obj.gender;
delete obj["city"];

console.log(obj);
