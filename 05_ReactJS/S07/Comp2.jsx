import Card from "./Comp1.jsx";
import { Navbar } from "./Comp3.jsx";
import { f1 } from "./File-1.js";

function Container() {
  f1();
  return (
    <div>
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
