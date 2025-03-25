import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cityActionCreator } from "../action-creator/firstAction";
function C() {
  const [state, setState] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const getData = () => {
    // var action = cityActionCreator(inputRef.current.value);
    //  dispatch(action)

    // dispatch(cityActionCreator(inputRef.current.value));
    dispatch(cityActionCreator(state));
  };
  return (
    <div style={{ padding: "30px", color: "coral" }}>
      <h2>C Component</h2>
      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
        ref={inputRef}
        type="text"
        placeholder="add city"
      />
      <button onClick={getData}>Submit</button>
    </div>
  );
}

export default C;
