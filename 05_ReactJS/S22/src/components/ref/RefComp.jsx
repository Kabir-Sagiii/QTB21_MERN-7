import { useState, useRef } from "react";

function RefComp() {
  const [state, setState] = useState("hi");
  let obj = useRef(true); //obj = {current: true }
  const [data, setData] = useState(100);
  //   var normal = 100;

  const updateVariable = () => {
    // normal = 500;
    setData(500);
  };

  const updateState = () => {
    setState("hello dude");
  };

  const updateRef = () => {
    obj.current = false;
  };

  const displayData = () => {
    // console.log("Variable Value", normal);
    console.log("state Value", data);
    console.log("state Value", state);
    console.log("ref", obj.current);
    console.log("----------------------------");
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>useRef Concept : {state}</h2>
      <br />
      <button onClick={updateVariable}>update variable</button> &nbsp;&nbsp;
      <button onClick={updateState}>update state</button>&nbsp;&nbsp;
      <button onClick={displayData}>display data</button>&nbsp;&nbsp;
      <button onClick={updateRef}>update Ref</button>&nbsp;&nbsp;
    </div>
  );
}

export default RefComp;
