import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import { getProducts } from "./electronicsService";
function Electronics() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getProducts(setElectronics);
  }, []);

  return (
    <div className="electronics">
      <section id="electronicsBanner">
        <section className="bgShadow">
          <h1>Electronics Products Data</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            totam labore ullam esse cum quis illum sunt, omnis explicabo placeat
            modi. Perspiciatis culpa tempore magnam id, facilis non totam
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima totam labore ullam esse cum quis illum sunt, omnis explicabo
            placeat modi. Perspiciatis culpa tempore magnam id, facilis non
            totam beatae.
          </p>
        </section>
      </section>

      <section className="productData">
        {electronics
          .filter((pro) => pro.category === "electronics")
          .map((product) => {
            return (
              <div className="card">
                <img src={product.image} width={230} height={230} />
                <h3>{product.title}</h3>
                <p style={{ color: "black" }}>${product.price}</p>
                <p style={{ color: "black" }}>{product.category}</p>

                <Link to={`/productdetails/${product.id}`}>
                  <button>Product Details</button>
                </Link>

                <button>Add to Cart</button>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Electronics;
