import React from "react";

// function MapEx1() {
//   var data = ["HTML", "CSS", "JS", "REACT", "NODE"];
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Map Concept in React JS</h2>
//       <ol>
//         <li>{data[0]}</li>
//         <li>{data[1]}</li>
//         <li>{data[2]}</li>
//         <li>{data[3]}</li>
//         <li>{data[4]}</li>
//       </ol>
//     </div>
//   );
// }

function MapEx1() {
  var data = ["HTML", "CSS", "JS", "REACT", "NODE"];
  //   var data = [<li>html</li>, <li>css</li>, <li>js</li>];

  var info = [1, 2, 3, 4, 5];

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Map Concept in React JS</h2>
      {/* <ol>{[1, 2, 3]}</ol> */}
      <ol>{data}</ol>
      {/* <ol>1, 2, 3, 4, 5</ol> */}
    </div>
  );
}

export default MapEx1;
