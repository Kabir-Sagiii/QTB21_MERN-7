import "./User.css";
import { useState } from "react";

function User() {
  let [state, setState] = useState(
    "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
  );

  function changeToFemale() {
    setState(
      "https://th.bing.com/th/id/OIP.CEZFxwH1ytVYI-gGd6fYwgHaE8?rs=1&pid=ImgDetMain"
    );
  }

  function changeToMale() {
    setState(
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    );
  }

  return (
    <div className="userContainer">
      <img src={state} width={300} height={300} /> <br />
      <br />
      <button onClick={changeToMale}>Male</button>
      <button onClick={changeToFemale}>Female</button>
    </div>
  );
}

export default User;
