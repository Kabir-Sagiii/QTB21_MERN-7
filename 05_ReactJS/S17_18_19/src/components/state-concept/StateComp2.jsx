import { useState } from "react";

function StateCom2() {
  let [state, setState] = useState(1010);

  function updateState() {
    setState("Sagar");
  }

  return (
    <div
      style={{
        textAlign: "center",
        margin: "50px auto",
        boxShadow: "0 0 10px",
        width: "500px",
        padding: "30px",
      }}
    >
      <h1 style={{ margin: "20px 0px", color: "red" }}>
        State Concept with Array Destructuring : {state}
      </h1>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}

export default StateCom2;
