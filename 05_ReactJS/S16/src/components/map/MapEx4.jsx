import React from "react";
import { users } from "../../data/Users";
function MapEx4() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Map concept</h2>
      {users.map(function (element, index) {
        return <h3>{element}</h3>;
      })}
    </div>
  );
}

export default MapEx4;
