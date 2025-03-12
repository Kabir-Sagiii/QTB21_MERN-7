import { useState } from "react";
import StaticContent from "./static-content/StaticContent";
import Gender from "./gender/Gender";
import User from "./user/User";
import "./Users.css";
import axios from "axios";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const getUsers = () => {
//     axios
//       .get("https://randomuser.me/api/?results=30")
//       .then((res) => {
//         // console.log(res.data.results);
//         setUsers(res.data.results);
//       })
//       .catch((error) => {
//         alert("Failed to Fetch Users");
//         console.log(error);
//       });
//   };

//   return (
//     <div className="usersContainer">
//       <h1>Users Information</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis,
//         quia fugit, beatae quidem ex nihil quod ipsa sint deleniti molestias
//         iste quis praesentium necessitatibus laboriosam animi alias aspernatur
//         fugiat. Corrupti fuga, magnam velit fugiat quis modi ullam soluta
//         delectus sunt non inventore nulla laborum quidem! Fugiat ducimus
//         suscipit, itaque aspernatur exercitationem ratione ut consectetur culpa
//         molestias eos! Odit, aliquam. Minus, incidunt. Amet exercitationem eaque
//         distinctio veritatis natus quasi nesciunt, architecto quidem iure quos a
//         nulla expedita, laboriosam quas omnis. Delectus reiciendis beatae odio
//         sapiente perferendis error, praesentium facere suscipit inventore
//         similique reprehenderit est excepturi minima totam obcaecati impedit eos
//         dolorem cum deserunt asperiores nobis quisquam? Aut, ut? Ab ipsa ut
//         ipsum modi harum soluta ea, itaque quam ratione animi. Iste recusandae
//         maiores porro, accusantium nulla nobis dolores in ab, nesciunt dolorum
//         fugit fuga labore, et corrupti omnis laboriosam? Quibusdam ab odit
//         voluptas dolorum, voluptate eum rerum. Vitae facere consectetur nemo
//         tenetur harum enim perspiciatis accusamus debitis impedit. Adipisci,
//         recusandae. Sequi minus exercitationem perspiciatis quis labore eos
//         recusandae atque, fugit, eveniet dignissimos assumenda. Consequatur
//         dolore deserunt, doloribus necessitatibus laboriosam ipsum consequuntur
//         quibusdam quaerat facere iusto ipsam eius eaque similique obcaecati,
//         accusantium, nemo aspernatur! Autem recusandae eligendi exercitationem
//         iste quia odio.
//       </p>
//       <button onClick={getUsers}>Get Users</button>

// <div className="genderContainer">
//   <div>
//     <input defaultChecked type="radio" name="gender" />
//     <label>ALL</label>
//   </div>
//   <div>
//     <input type="radio" name="gender" />
//     <label>Male</label>
//   </div>
//   <div>
//     <input type="radio" name="gender" />
//     <label>Female</label>
//   </div>
// </div>

// <h2 style={{ textAlign: "center" }}>Numbers of Users : {users.length}</h2>
// <div className="usersDataContainer">
//   {users.map(function (element, index) {
//     //element = {gender:"m/f",picture:{l:"",m:""},name:{t:"",f:"",""}}
//     return (
//       <div className="card">
//         <img src={element.picture.medium} width={250} height={250} />
//         <h3>
//           {element.name.title}
//           {element.name.first}
//           {element.name.last}
//         </h3>
//         <p style={{ color: "green" }}>{element.gender}</p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
//           vitae eos ad rerum?
//         </p>
//       </div>
//     );
//   })}
// </div>
//     </div>
//   );
// }

import React from "react";

function Users() {
  return (
    <div>
      <StaticContent />
      <Gender />
      <User />
    </div>
  );
}

export default Users;
