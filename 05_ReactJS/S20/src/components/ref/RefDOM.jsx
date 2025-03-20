import { useRef } from "react";

function RefDOM() {
  const h2Ref = useRef(null); // h2Ref = {current:null}

  const updateDOM = () => {
    h2Ref.current.innerText = "Hello Ref";
    h2Ref.current.style.color = "red";
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 ref={h2Ref}>Welcome to Ref concept</h2>
      <button onClick={updateDOM}>Update UI</button>
    </div>
  );
}

export default RefDOM;
