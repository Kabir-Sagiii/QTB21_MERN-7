import React from "react";
import C from "./C";
function B({ data }) {
  return (
    <div
      style={{
        width: "600px",
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 0 10px red",
      }}
    >
      <h2>B Component</h2>
      {/* <C value={data} /> */}
      <C />
    </div>
  );
}

export default B;
