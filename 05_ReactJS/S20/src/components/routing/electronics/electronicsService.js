import axios from "axios";
export const getProducts = (electronicsSetter) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      // console.log(res.data);
      electronicsSetter(res.data);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
};
