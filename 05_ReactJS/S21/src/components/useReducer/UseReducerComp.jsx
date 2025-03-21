import { useReducer } from "react";

const reducerFn = (state, action) => {
  //logic to update the state
  var newState;
  if (action.type === "inc") {
    newState = state + action.data;
  } else if (action.type === "dec") {
    newState = state - action.data;
  } else {
    newState = 1;
  }
  return newState;
};

function UseReducerComp() {
  const [state, dispatch] = useReducer(reducerFn, 1);
  return (
    <div style={{ padding: "50px" }}>
      <h2> Use Reducer Hook :{state} </h2>
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "inc",
            data: 1,
          });
        }}
      >
        Inc
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "inc",
            data: 5,
          });
        }}
      >
        Inc by 5
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "dec",
            data: 3,
          });
        }}
      >
        dec by 3
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "dec",
            data: 1,
          });
        }}
      >
        Dec
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducerComp;
