import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/routing/home/Home";
import Electronics from "./components/routing/electronics/Electronics";
import Jewelery from "./components/routing/jewelery/Jewelery";
import Mens from "./components/routing/mens/Mens";
import Womens from "./components/routing/womens/Womens";
import Pagenotfound from "./components/routing/pagnotfound/Pagenotfound";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/routing/product-details/ProductDetails";
import RefComp from "./components/ref/RefComp";
import RefDOM from "./components/ref/RefDOM";
function App() {
  return (
    <div>
      <Nav />
      <RefDOM />
      {/* <RefComp /> */}
      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />
        <Route path={"/jewelery"} element={<Jewelery />} />
        <Route path={"/electronics"} element={<Electronics />} />

        <Route path={"/productdetails/:id"} element={<ProductDetails />} />

        <Route path={"*"} element={<Pagenotfound />} />
      </Routes> */}
    </div>
  );
}

export default App;
