import { useState } from "react";
import StaticContent from "./static-content/StaticContent";
import Gender from "./gender/Gender";
import User from "./user/User";
import "./Users.css";
import axios from "axios";
import usersContext from "./usersContext";

function Users() {
  const [state, setState] = useState([]);
  const getUsersData = () => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        setState(res.data.results);
      })
      .catch((error) => {
        alert("failed to get users");
        console.log(error);
      });
  };

  return (
    <div>
      <usersContext.Provider value={{ state, getUsersData }}>
        <StaticContent />
        <Gender />
        <User />
      </usersContext.Provider>
    </div>
  );
}

export default Users;
