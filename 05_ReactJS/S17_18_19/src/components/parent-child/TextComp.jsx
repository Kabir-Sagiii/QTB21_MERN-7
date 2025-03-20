import React from "react";

function TextComp({ value }) {
  return (
    <div>
      <h2>Text Component</h2>
      <p style={{ color: "red" }}>{value}</p>
    </div>
  );
}

export default TextComp;
