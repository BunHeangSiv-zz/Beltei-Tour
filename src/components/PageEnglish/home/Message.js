import mr_ly from "../Image/mr.ly.png";

import welcome_message from "../Image/welcome_message.png";
import sign_lychheng from "../Image/sign.png";

import React from "react";

function UseButton() {
  return (
    <div class="container">
      <div className="mx-2">
        <img className=" w-90 rounded mx-auto" src={welcome_message} />
      </div>
      <br></br>
      <div class="grid grid-cols-6 gap-2">
        <div>
          <img className="w-16 md:w-32 lg:w-48 " src={mr_ly} />
        </div>

        <div class="col-span-5 text-primary text-justify">
          <p >
            {" "}
            I would like to express my respect and welcome to all our beloved
            guests coming from other countries around the world that trust and
            visit Cambodia via BELTEI Tour, which is a part of BELTEI Group and
            is certified by Ministry of Tourism of the Royal government of
            Kingdom of Cambodia. As everyone has known, Cambodia, the Kingdom of
            Wonder, is the country enriched with valuable heritages such as
            traditions, cultures, and civilization which have long history as
            well as diversity of natural resources.
          </p>
        </div>
        <br></br>
        <p class="col-span-6 mt-1 text-primary text-justify" >
          As a result, Cambodia is recognized as a country in which Tourism
          Sector is tremen dously progressing, especially it has been inscribed
          as Clean Cities and Clean Bays.
        </p>
<br></br>
        <p class="col-span-6 mt-1 text-primary text-justify" >
          {" "}
          BELTEI Tour is established and consolidated by capable human resources
          with long experiences in providing sophisticating services on Tourism
          Sector and it obligates to offer better services to our valuable
          national and international guests in terms of inbound tour, outbound
          tour, hotel booking, air tickets reservation, transportation, tour
          guides, and complete packaged-tour regarding to your needs.
        </p>
        <br></br>
        <p class="col-span-6 mt-1 text-primary text-justify" >
          {" "}
          This inbound tour booklet that you are reading describes about our
          tour programs to popular areas around the country such as Phnom Penh
          capital city, Sihanoukville, Kep, Koh Kong, Mondulkiri, Ratanakiri,
          Battambang, and especially Siem Reap provinces where prosperous Angkor
          Wat temple, Khmer's spiritual architecture and also the world heritage
          of human are located. These areas offer very attractive sceneries to
          all tourists for theirs natural views and collection of cultures.
          Accompanied by our services, we have modern and comfortable buses,
          skillful drivers who are motivated with morality and high commitment,
          friendly tour guides who are comprehensive in Cambodia history and
          locations, and a lot of popular and welfare restaurants where
          delicious and healthy foods are served. For accommodation, we provide
          national and international standard hotels which are fulfilled with
          safety, welfare, and high responsibility.
        </p>
        <br></br>
        <p class="col-span-6 mt-1 text-primary text-justify" >
          {" "}
          Meanwhile, we have also arranged tailor-made tour itineraries for your
          needs. Welcome to visit Cambodia, the Kingdom of Wonder, and kindly
          contact BELTEI Tour Office via (855) 23 9999 20, (855) 23 9999 67 or
          Email:
          <span className="hover: text-lime-600 underline hover:cursor-pointer">
            {" "}
            info@belteitour.com.kh{" "}
          </span>
          in order to consult about your preferred tours. For further
          information, please check our website:
          <span className="hover: text-lime-600 underline hover:cursor-pointer">
            www.belteitour.com.kh.
          </span>{" "}
          We are looking forward to serving you with our great services. BELTEI
          Tour is your great delight with the best service!
        </p>
      </div>
      <br></br>
      <p class=" text-primary" >
        {" "}
        Yours faithfully,
      </p>
      <div>
        <img
          className="w-16 md:w-32 lg:w-48 pt-3 float-right"
          src={sign_lychheng}
          alt="Signature"
        />
      </div>
    </div>
  );
}

export default UseButton;
