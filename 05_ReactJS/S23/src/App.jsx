import "./App.css";
import Nav from "./components/nav/Nav";
import A from "./redux/components/A";
import B from "./redux/components/B";
import C from "./redux/components/C";
function App() {
  return (
    <div>
      <Nav />
      <A />

      <br />
      <C />
      <hr />
      <br />
      <B />
    </div>
  );
}

export default App;
