import { useState } from "react";
import TextComp from "./TextComp";
function ButtonComp() {
  const [data, setData] = useState("dummy data");

  const updateState = () => {
    setData("New Data");
  };
  return (
    <div>
      <h2>Button Component</h2>
      <button onClick={updateState}>Submit</button>
      <br />
      <br />
      <hr />
      <br />
      <TextComp value={data} />
    </div>
  );
}

export default ButtonComp;
