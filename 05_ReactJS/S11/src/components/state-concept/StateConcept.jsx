import { useState } from "react";

function StateConcept() {
  let data = useState(0);

  function updateState() {
    data[1]("React JS");
  }

  //data = [state,setState]
  //data[0]

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ margin: "20px 0px", color: "green" }}>
        State Concept :{data[0]}
      </h2>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}

export default StateConcept;
