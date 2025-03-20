import { useState } from "react";

function StateCom() {
  let info = useState(999);

  function updateState() {
    //call setter function of useState()
    info[1]("React JS");
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
      <h1 style={{ margin: "20px 0px", color: "green" }}>
        State Concept : {info[0]}
      </h1>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}

export default StateCom;
