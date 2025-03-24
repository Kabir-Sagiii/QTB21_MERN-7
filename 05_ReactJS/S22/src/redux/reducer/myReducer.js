const myReducer = (currentStoreData, action) => {
  //action = {type:"FIRST",payload:"------"}
  console.log("reducer called");
  var newdata = "";

  if (action.type === "FIRST") {
    newdata = action.payload + " QT";
  }

  return newdata;
};

export default myReducer;
