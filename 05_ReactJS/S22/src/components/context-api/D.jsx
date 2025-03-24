import { useContext } from "react";
import myfirstContext from "./context";
function D() {
  const myData = useContext(myfirstContext);

  return (
    <div
      style={{
        width: "250px",
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 0 10px green",
      }}
    >
      <h2>D Component</h2>
      <p style={{ color: "green", fontWeight: "bold" }}>A Data : {myData}</p>
      {/* <p style={{ color: "green", fontWeight: "bold" }}>A Data : {info}</p> */}
    </div>
  );
}

export default D;
