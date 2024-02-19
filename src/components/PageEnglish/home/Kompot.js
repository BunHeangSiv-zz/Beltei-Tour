import welcome_message from "../Image/kappot_kep_program.png";
import beltei_tour_kompot_province from "../Image/beltei_tour_kampot_and_kep.jpg";
import beltei_tour_thansour_bokor from "../Image/beltei_tour_thansour_bokor.jpg";
import beltei_tour_kampong_trach from "../Image/beltei_tour_kampong_trach.jpg";
import beltei_tour_veal_lumher from "../Image/beltei_tour_veal_lumher.jpg";
import beltei_tour_kos_tonsay from "../Image/beltei_tour_kos_tonsay.jpg";
import React from "react";

function UseButton() {
  return (
    <div class="container text-primary">
      <div>
        <img
          className="d-block w-100  rounded mx-auto d-block"
          src={welcome_message}
        />
      </div>
      <div>
        <img
          className="d-block w-85  rounded mx-auto d-block"
          src={beltei_tour_kompot_province}
        />
      </div>
      <p class="text-primary text-justify mt-4" >
        Kampot is a city in southern Cambodia and the capital of Kampot
        Province. It is situated at the Praek Tuek Chhu River southeast of the
        Elephant Mountains and around 5 km from the Gulf of Thailand.
        Kampot known as the last Province where the France came to make Colonial
        on year 1889. That because of the potential of this country so good for
        France colonial (Mountain, River, Sea, and agriculture as like pepper).
        There are manay actractive place such as: Thansure Bokor resort, Kampong
        Trach, Kep, Tada waterfall, Nattaya Resort, Rabit island…etc
      </p>

      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          
            <img
              class="w-full"
              src={beltei_tour_thansour_bokor}
            />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          Bokor Hill is located 42 km from the provincial town. It was erected
          by French colonists in 1922 during the reign of King Sisowath. Bokor
          was a resort location for affluent French colonists who needed a
          change of atmosphere. The Bokor Hill is 1,075 meters high, and
          promises good weather and magnificent views. Big trees casting shadows
          over the water and rocks shaped as animal figures hold particular
          interest for tourists. The mountain overlooks Kampot Town, Kep Beach,
          Preah Sihanouk Province and blue sea water.
          </p>
        </div>
      </div>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
            <img
              class="w-full"
              src={beltei_tour_kampong_trach}
            />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          The town of Kampong Trach, Kampot is a small one but still offers
          enough attractions to the tourists. Here you would find various
          limestone caves and tubes in a nearby mountain. Once there was also a
          large cave in the center of the mountain whose roof had collapsed and
          thus a small enclosed jungle had been formed in the area. In the caves
          you would find various pagodas and caves which are excellent
          sightseeing attractions. Therefore, do not forget to bring a
          flashlight and always a pair of good walking shoes.
          </p>
        </div>
      </div>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <div>
            <img
              class="w-full"
              src={beltei_tour_veal_lumher}
            />
          </div>
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          Veal Lumher is a lovely little site tucked away in Kep Village of Kep
          Commune. Veal Lumher refers to the Koh Puor or the Puor Island. It has
          become as one of the most favorite destinations for the tourists who
          are looking for spending a few days far away from the crowds of more
          'touristy' places. Arriving here is easy and convenient. If you are
          traveling from the provincial town, a 0.5 km journey will take you to
          the Veal Lumher in Kep City. A maximum of 3 minutes' ride and you will
          find yourself at one of the most beautiful corners in the land of
          Cambodia.
          </p>
        </div>
      </div>

      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
            <img
              class="w-full"
              src={beltei_tour_kos_tonsay}
            />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          The island is generally pretty quiet and is a gem of coastal Cambodia.
          All the bungalows and restaurants for tourists are at the main beach.
          Besides that there are only a few fisher huts scattered around the
          island. Development is slow, though there is now a massage shack
          directly on the beach. The name Rabbit Island derives from the shape
          of the island, not from any rabbits there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseButton;
