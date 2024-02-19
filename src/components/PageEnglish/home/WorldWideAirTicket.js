import React from "react";
import "../styles.css";
import cam_hotel from "../Image/Flight_eng_1.png";
import k from "../Image/Flight_eng_2.png";
import a from "../Image/air_ticket.png";

function UseButton() {
  return (
    <div className="container grid grid-cols-1 mx-auto">
      <h4 className="text-primary justify-items-center mx-auto underline text-justify fs-5 fst-italic" >Air tickets are available at BELTEI TOUR
      </h4>
      <h4 className="text-primary justify-items-center mx-auto underline text-justify" > for all Domestic and International routes</h4>

      <div className="col-span-1 mx-auto ">
        <img className="" src={cam_hotel} alt="hh" />
        <img className="" src={k} alt="hh" />
        <img className="" src={a} alt="hh" />
      </div>
    </div>
  );
}

export default UseButton;
