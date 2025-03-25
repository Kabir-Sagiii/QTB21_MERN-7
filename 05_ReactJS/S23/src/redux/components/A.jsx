import { useState } from "react";
import { firstActionCreator } from "../action-creator/firstAction";
import mystore from "../store/store";

function A() {
  const [state, setState] = useState("Hello I am From A Component");

  const getAction = () => {
    const actionObject = firstActionCreator(state);
    mystore.dispatch(actionObject);
  };

  return (
    <div style={{ padding: "30px", color: "green" }}>
      <h2>A Component</h2>
      <button onClick={getAction}>Submit</button>
    </div>
  );
}

export default A;
