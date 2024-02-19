import React from "react";
import camHotelImage from "../Image/cam_hotel.jpg";

function UseButton() {
  return (
    <div className="container text-primary">
      <h4 className="text-center text-justify fs-5 fst-italic" >I-Hotel Hotel Reservation</h4>

      <p className="pt-2 text-justify" >
        <span className="text-success ">BELTEI Group</span> established BELTEI
        Tour to contribute and improve the Tourism Sector in Cambodia with the
        Royal Government that has the Ministry of Tourism as its general
        headquarter. BELTEI Tour has the duty to guide local and international
        tourists and inform about the abundant treasures and culture of Cambodia
        including territory, nature, exquisite temples, and beautiful bays,
        which have become a member of the most beautiful bays in the world Club.
        Moreover, BELTEI Tour has the duty to guide Cambodian people to visit
        other tour destinations around the world in order to know about the
        general situations and to extract experiences from those developed
        countries for steadily innovating and developing ourselves and the
        society of Cambodia in the future.
      </p>

      <div className="flex justify-center items-center pt-3">
        <img className="mx-auto" src={camHotelImage} alt="Hotel" />
      </div>
    
    </div>
  );
}

export default UseButton;
