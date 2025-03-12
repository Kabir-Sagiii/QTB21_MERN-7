import "./App.css";
import Nav from "./components/nav/Nav";
import ButtonComp from "./components/parent-child/ButtonComp";
function App() {
  return (
    <div>
      <Nav />
      <div className="pccontainer">
        <ButtonComp />
      </div>
    </div>
  );
}

export default App;
