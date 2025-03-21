import React from "react";
import "./Gender.css";
function Gender() {
  return (
    <div className="genderContainer">
      <div>
        <input defaultChecked type="radio" name="gender" />
        <label>ALL</label>
      </div>
      <div>
        <input type="radio" name="gender" />
        <label>Male</label>
      </div>
      <div>
        <input type="radio" name="gender" />
        <label>Female</label>
      </div>
    </div>
  );
}

export default Gender;
