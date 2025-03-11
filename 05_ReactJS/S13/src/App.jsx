import "./App.css";
import Nav from "./components/nav/Nav";
// import MapEx1 from "./components/map/MapEx1";
// import MapEx2 from "./components/map/MapEx2";
// import MapEx3 from "./components/map/MapEx3";
// import MapEx4 from "./components/map/MapEx4";
import Users from "./components/axios/Users";
function App() {
  return (
    <div>
      <Nav />
      <Users />
    </div>
  );
}

export default App;
