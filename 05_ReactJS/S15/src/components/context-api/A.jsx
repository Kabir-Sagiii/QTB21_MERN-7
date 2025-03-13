import { useState } from "react";

import B from "./B";
import myfirstContext from "./context";

function A() {
  const [state, setState] = useState("---------");
  return (
    <div
      style={{
        width: "800px",
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>A Component</h2>

      <button
        onClick={(event) => {
          setState("State Got Updated");
        }}
      >
        Update State
      </button>

      <myfirstContext.Provider value={state}>
        <B />
      </myfirstContext.Provider>

      {/* <B data={state} /> */}
    </div>
  );
}

export default A;
