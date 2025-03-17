import { useState } from "react";

import "./Electronics.css";
import { getProducts } from "./electronicsService";
function Electronics() {
  const [electronics, setElectronics] = useState([]);

  console.log(electronics);

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

      <section className="temp">
        <button
          onClick={() => {
            getProducts(setElectronics);
          }}
        >
          Get Data
        </button>
      </section>
    </div>
  );
}

export default Electronics;
