var info = [
  {
    name: "s1",
    city: "hyd",
  },
  {
    name: "s2",
    city: "vizag",
  },
  {
    name: "s3",
    city: "pune",
  },
];

//print all the cities in the terminal

info.forEach(function (element, index) {
  //element = {name:"",city:""}
  var cityName = element.city;
  console.log(cityName);
});
