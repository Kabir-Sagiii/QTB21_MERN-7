import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams(); //obj = {id:5}
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    rating: { rate: 0, count: 0 },
    price: 0,
    category: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
      })
      .catch((error) => {
        alert("Failed to get the Product");
        console.log(error);
      });
  };

  return (
    <div className="pdcontainer">
      <div className="leftPanel">
        <img src={product.image} width={"100%"} height={400} />
      </div>
      <div className="rightPanel">
        <dl>
          <dt>
            <b>Product Title</b>
          </dt>
          <dd>{product.title}</dd>
          <dt>
            <b>Price</b>
          </dt>
          <dd>{product.price}</dd>
          <dt>
            <b>Product Category</b>
          </dt>
          <dd>{product.category}</dd>
          <dt>
            <b>Rating</b>
          </dt>
          <dd>{product.rating.rate}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>{product.description}</dd>
        </dl>
        <button>Buy Product</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
