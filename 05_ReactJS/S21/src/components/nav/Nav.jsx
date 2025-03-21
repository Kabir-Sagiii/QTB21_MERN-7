import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="brandName">
        <h1>BrandName</h1>
      </div>
      <div className="categoriesName">
        <Link to="/">Home</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
      </div>
      <div className="icons">
        <Link to="">
          <i class="bi bi-person-circle"></i>
        </Link>
        <Link to="">
          <i class="bi bi-cart-check-fill"></i>
        </Link>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
