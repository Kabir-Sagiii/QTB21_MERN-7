import React from "react";

// function MapEx3() {
//   var arrayData = ["html", "css", "js", "react","nodejs","angular","mongodb"];
//   return (
//     <div>
//       <ul>
//         <li>{arrayData[0]}</li>
//         <li>{arrayData[1]}</li>
//         <li>{arrayData[2]}</li>
//         <li>{arrayData[3]}</li>
//<li>{arrayData[4]}</li>
//         <li>{arrayData[5]}</li>
//         <li>{arrayData[6]}</li>
//       </ul>
//     </div>
//   );
// }

function MapEx3() {
  var arrayData = [
    "html",
    "css",
    "js",
    "react",
    "nodejs",
    "express",
    "mongodb",
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <ul>
        {arrayData.map(function (element, index) {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default MapEx3;
