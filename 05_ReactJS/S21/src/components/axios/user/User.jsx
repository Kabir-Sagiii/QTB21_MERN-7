import { useContext } from "react";
import "./User.css";
import usersContext from "../usersContext";
function User() {
  let { state } = useContext(usersContext);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Numbers of Users : {state.length}</h2>
      <div className="usersDataContainer">
        {state.map(function (element, index) {
          //element = {gender:"m/f",picture:{l:"",m:""},name:{t:"",f:"",""}}
          return (
            <div className="card" key={index + 1}>
              <img src={element.picture.medium} width={250} height={250} />
              <h3>
                {element.name.title}
                {element.name.first}
                {element.name.last}
              </h3>
              <p style={{ color: "green" }}>{element.gender}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                vitae eos ad rerum?
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;
