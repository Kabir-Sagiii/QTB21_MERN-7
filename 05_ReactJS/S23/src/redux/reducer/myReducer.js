const myReducer = (currentStoreData, action) => {
  //action = {type:"FIRST",payload:"------"}
  console.log("reducer called");
  var newdata = {
    a: "",
    b: "",
  };

  if (action.type === "FIRST") {
    newdata = {
      ...currentStoreData,
      a: action.payload,
    };
  } else if (action.type === "CITY") {
    newdata = {
      ...currentStoreData,
      b: action.payload,
    };
  }

  return newdata;
};

export default myReducer;
