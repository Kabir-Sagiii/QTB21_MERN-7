import React from "react";
import { useSelector } from "react-redux";

function B() {
  const data = useSelector((reduxData) => {
    return reduxData;
  });
  return (
    <div style={{ padding: "30px", color: "red" }}>
      <h2>Details Component</h2>
      <p>A Data : {data.a}</p>
      <p>C Data :{data.b}</p>
    </div>
  );
}

export default B;
