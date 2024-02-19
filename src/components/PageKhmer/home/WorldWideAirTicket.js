import React from "react";
import "../styles.css";
import cam_hotel from "../Images/Flight_kh_1.png";
import k from "../Images/Flight_eng_2.png";
import a from "../Images/air_ticket.png";
function UseButton() {
  return (
    <div className="container grid grid-cols-1 mx-auto">
      <h4 className="text-primary justify-items-center mx-auto underline text-justify fs-6" >
        លក់​សំបុត្រ យន្តហោះ ក្នុង​ និង​ក្រៅ​ប្រទេស​
      </h4>
      <div className="col-span-1 mx-auto ">
        <img className="" src={cam_hotel} alt="hh" />
        <img className="" src={k} alt="hh" />
        <img className="" src={a} alt="hh" />
      </div>
    </div>
  );
}

export default UseButton;
