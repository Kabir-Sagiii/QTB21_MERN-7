import "./App.css";
import Nav from "./components/nav/Nav";
// import A from "./components/context-api/A";
import Users from "./components/axios/Users";
function App() {
  return (
    <div>
      <Nav />
      {/* <A /> */}
      <Users />
    </div>
  );
}

export default App;
