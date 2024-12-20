var data = {
  result: [
    {
      name: {
        title: "Mr",
        first: "Rohan",
        last: "Singh",
      },
      location: {
        street: {
          pin: 12345,
          colony: "Shiv Nagar",
        },
        city: "Pune",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Harpreet",
        last: "Singh",
      },
      location: {
        street: {
          pin: 12785,
          colony: "Shree Nagar",
        },
        city: "Amritsar",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Arjun",
        last: "Reddy",
      },
      location: {
        street: {
          pin: 22345,
          colony: "Bashir Nagar", //Bashir Bagh
        },
        city: "Hyd",
      },
    },
  ],
  info: {
    pin: 99898,
  },
};

data.result[2].location.street.colony = "Bashir Bagh";
console.log(data.result[2].location);
