import pchum_ben_festival from "../Image/beltei_tour_pchum_ben_festival.png";
import pchum from "../Image/pchum_ben_festival.png";
import Monk from "../Image/monk.jpg";
import bowl from "../Image/bowl.jpg";
import bowl2 from "../Image/bowl2.jpg";

import welcome_message from "../Image/khmer_new_yearTitle.png";
import monk from "../Image/beltei_tour_khmer_new_year_Banner.jpeg";
import beltei_tour_khmer_new_year_a from "../Image/beltei_tour_khmer_new_year_a.jpeg";
import beltei_tour_khmer_new_year_b from "../Image/beltei_tour_khmer_new_year_b.jpeg";
import beltei_tour_khmer_new_year_c from "../Image/beltei_tour_khmer_new_year_c.jpeg";
import beltei_tour_khmer_new_year_d from "../Image/beltei_tour_khmer_new_year_d.jpeg";
import beltei_tour_khmer_new_year_e from "../Image/beltei_tour_khmer_new_year_e.jpeg";
import beltei_tour_khmer_new_year_f from "../Image/beltei_tour_khmer_new_year_f.jpeg";
// ------
import waster_festival_title from "../Image/waster_festival_title.png";
import beltei_tour_water_festival_banner from "../Image/beltei_tour_water_festival_banner.jpeg";
import beltei_tour_water_festival_a from "../Image/beltei_tour_water_festival_a.jpeg";
import beltei_tour_water_festival_b from "../Image/beltei_tour_water_festival_b.jpeg";
import beltei_tour_water_festival_c from "../Image/beltei_tour_water_festival_c.jpeg";
import beltei_tour_water_festival_d from "../Image/beltei_tour_water_festival_d.jpeg";
import beltei_tour_water_festival_e from "../Image/beltei_tour_water_festival_e.jpeg";
import beltei_tour_water_festival_f from "../Image/beltei_tour_water_festival_f.jpeg";

// -----
import beltei_tour_royal_pluoghing_ceremonyTitle from "../Image/beltei_tour_royal_pluoghing_ceremonyTitle.png";
import beltei_tour_royal_pluoghing_ceremony_banner from "../Image/beltei_tour_royal_pluoghing_ceremony_banner.jpeg";
import beltei_tour_royal_pluoghing_ceremony_a from "../Image/beltei_tour_royal_pluoghing_ceremony_a.jpeg";
import beltei_tour_royal_pluoghing_ceremony_b from "../Image/beltei_tour_royal_pluoghing_ceremony_b.jpeg";
import beltei_tour_royal_pluoghing_ceremony_c from "../Image/beltei_tour_royal_pluoghing_ceremony_c.jpeg";
import beltei_tour_royal_pluoghing_ceremony_d from "../Image/beltei_tour_royal_pluoghing_ceremony_d.jpeg";
import beltei_tour_royal_pluoghing_ceremony_e from "../Image/beltei_tour_royal_pluoghing_ceremony_e.jpeg";
import beltei_tour_royal_pluoghing_ceremony_f from "../Image/beltei_tour_royal_pluoghing_ceremony_f.jpeg";
// --------
import apsara_dancingTitle from "../Image/apsara_dancingTitle.png";
import beltei_tour_apsara_dance_banner from "../Image/beltei_tour_apsara_dance_banner.jpeg";
import beltei_tour_apsara_dance_a from "../Image/beltei_tour_apsara_dance_a.jpeg";
import beltei_tour_apsara_dance_b from "../Image/beltei_tour_apsara_dance_b.jpeg";
import beltei_tour_apsara_dance_c from "../Image/beltei_tour_apsara_dance_c.jpeg";
import beltei_tour_apsara_dance_d from "../Image/beltei_tour_apsara_dance_d.jpeg";

// -------
import cambodia_culture from "../Image/cambodia_culture.png";
import beltei_tour_pchum_ben_festival from "../Image/beltei_tour_pchum_ben_festival.png";
import beltei_tour_khmer_new_year from "../Image/beltei_tour_khmer_new_year.png";
import beltei_tour_water_festival from "../Image/beltei_tour_water_festival.png";
import beltei_tour_royal_plouging from "../Image/beltei_tour_royal_plouging.png";
import beltei_tour_apsara_dancing from "../Image/beltei_tour_apsara_dancing.png";

import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hideAllButtons, setHideAllButtons] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setHideAllButtons(true);
  };

  const handleBackButtonClick = () => {
    setCurrentPage(currentPage-1); // Set it to the initial page or adjust as needed
    setHideAllButtons(false);
  };

  return (
    <div className="text-primary mx-auto w-100">
      {!hideAllButtons && (
        <div>
         
          <div className="">
              <img
                className="rounded mx-auto md:w-50 lg:w-70 "
                src={cambodia_culture}
                alt="hh"
              />
            </div>
          <br />
          <div onClick={() => handlePageChange(1)}>
            <div className="transition-transform transform hover:scale-110 hover:cursor-pointer">
              <img
                className="rounded mx-auto md:w-50 lg:w-70 "
                src={beltei_tour_pchum_ben_festival}
                alt="hh"
              />
            </div>
          </div>
          <br />
          <div onClick={() => handlePageChange(2)}>
            <div className="transition-transform transform hover:scale-110 hover:cursor-pointer">
              <img
                className="w-70 rounded mx-auto"
                src={beltei_tour_khmer_new_year}
                alt="hh"
              />
            </div>
          </div>
          <br />
          <div onClick={() => handlePageChange(3)}>
            <div className="transition-transform transform hover:scale-110 hover:cursor-pointer">
              <img
                className="w-70 rounded mx-auto"
                src={beltei_tour_water_festival}
                alt="hh"
              />
              <br />
            </div>
          </div>
          <div onClick={() => handlePageChange(4)}>
            <div className="transition-transform transform hover:scale-110 hover:cursor-pointer">
              <img
                className="w-70 rounded mx-auto"
                src={beltei_tour_royal_plouging}
                alt="hh"
              />
              <br />
            </div>
          </div>
          <div onClick={() => handlePageChange(5)}>
            <div className="transition-transform transform hover:scale-110 hover:cursor-pointer">
              <img
                className="w-70 rounded mx-auto"
                src={beltei_tour_apsara_dancing}
                alt="hh"
              />
              <br />
            </div>
          </div>
        </div>
      )}
      {hideAllButtons && (
        <div>
          {currentPage === 1 && (
            <p>
              <div>
                <button onClick={handleBackButtonClick} className="text-blue-500">Back</button>
                <img
                  className="w-50 rounded mx-auto"
                  src={pchum}
                />
              </div>
              <div>
                
                <img
                  className="w-70 rounded mx-auto pt-3"
                  src={Monk}
                />
              </div>
              <br></br>
              <p class="text-primary text-justify" >
                Pchum Ben is a 15-day Cambodian religious festival, culminating
                in celebrations on the 15th day of the tenth month in the Khmer
                calendar, at the end of the Buddhist lent, Vassa. The day is a
                time when many Cambodians pay their respects to deceased
                relatives of up to 7 generations. Monks chant the sutra in Pali
                language overnight (continuously, without sleeping) in prelude
                to the gates of hell opening, an event that is presumed to occur
                once a year, and is linked to the cosmology of King Yama
                originating in the Pali Canon. During this period, the gates of
                hell are opened and ghosts of the dead (preta) are presumed to
                be especially active. In order to combat this, food-offerings
                are made to benefit them, some of these ghosts having the
                opportunity to end their period of purgation, whereas others are
                imagined to leave hell temporarily, to then return to endure
                more suffering; without much explanation, relatives who are not
                in hell are also generally imagined to benefit from the
                ceremonies. In temples adhering to canonical protocol, the
                offering of food itself is made from the laypeople to the
                (living) Buddhist monks, thus generating "merit" that indirectly
                benefits the dead; however, in many temples, this is either
                accompanied by or superseded by food offerings that are imagined
                to directly transfer from the living to the dead, such as
                rice-balls thrown through the air, or rice thrown into an empty
                field. Anthropologist Satoru Kobayashi observed that these two
                models of merit-offering to the dead are in competition in rural
                Cambodia, with some temples preferring the greater canonicity of
                the former model, and others embracing the popular assumption
                that mortals can "feed" ghosts with physical food. Pchum Ben is
                considered unique to Cambodia, however, there are
                merit-transference ceremonies that can be closely compared to it
                in Sri Lanka (i.e., offering food to the ghosts of the dead),
                and in its broad outlines, it even resembles the Taiwanese Ghost
                Festival (i.e., especially in its links to the notion of a
                calendric opening of the gates of hell, King Yama, and so on).
              </p>

              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={bowl}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={bowl2}
                    />
                  </div>
                </div>
              </div>
            </p>
          )}

          {currentPage === 2 && (
            <p>
              <div>
              <button onClick={handleBackButtonClick} className="text-blue-500">Back</button>
                <img
                  className="w-50 rounded mx-auto"
                  src={welcome_message}
                />
              </div>

              <div>
                <img
                  className="d-block w-85 rounded-3 rounded mx-auto d-blockk"
                  src={monk}
                />
              </div>
              <br></br>
              <p class="text-primary text-justify" >
                {" "}
                The Khmer New Year in Khmer language called “Bon Chol Chhnam
                Thmei” is commonly celebrated on 13th or 14th of April each year
                in keeping with the Cambodian lunar calendar. This marks the end
                of the harvest season when farmers enjoy the fruits of their
                labor and relax before the start of the rainy season. The New
                Year holidays last for three days.During this time, people
                engage in traditional Khmer games; they play such games as the
                Bas Angkunh (seed throwing), Chaol Chhoung (twisted scarf
                throwing), Leak Kanseng (twisted scarf hide) etc. Throughout the
                county, people merrily dance the traditional Khmer forms of the
                Ram Vong, Ram kbach, Saravan, and Lam Leav in the open.
              </p>

              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_a}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_b}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_c}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_d}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_e}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_khmer_new_year_f}
                    />
                  </div>
                </div>
              </div>
            </p>
          )}

          {currentPage === 3 && (
            <p>
              <div>
              <button onClick={handleBackButtonClick} className="text-blue-500">Back</button>
                <img
                  className="w-50 rounded mx-auto"
                  src={waster_festival_title}
                />
              </div>
              <div>
                <img
                  className="d-block w-85 rounded-3 rounded mx-auto d-blockk"
                  src={beltei_tour_water_festival_banner}
                />
              </div>

              <br></br>
              <p class="text-primary text-justify" >
                {" "}
                Cambodian Water Festival in Khmer (Bon Om Touk), is a Cambodian
                festival celebrated in November and marks a reversal of the flow
                of the Tonle Sap River. Every town and province joins in with
                the festival but the biggest celebrations take place in Phnom
                Penh with boat racing along the Sisowath Quay. For three days,
                workers from every province join with the city's residents to
                celebrate by night and day. The festival lasts for three days,
                and commemorates the end of the country's rainy season, as well
                as the reversal of flow of the Tonle Sap River. It includes boat
                races and concerts, and attracts several million people each
                year. With this festival, we also have Ak Ambok, Sampeah Preah
                Khae, and Bandaet Pratip.
              </p>
              <p class="text-primary text-justify" >
                Ak Ambok [ɑk ɑmboːk] is named after the rice dish which forms
                part of the Bon Om Tuk ceremony. Rice is fried in the husk and
                then pounded with a giant pestle. The husks are removed and the
                special rice mixed with coconut and banana. This traditional
                Khmer dish is sold throughout the festival: Ak Ambok, Sampheah
                Preah Khae, and Bandaet Pratip.
              </p>

              <p class="text-primary text-justify" >
                {" "}
                Sampheah Preah Khae [sɑmpeəʰ preəʰ kʰaːe] is a ceremony in which
                salutations are made to the moon. After the Sampeah Preah Khae
                ceremony people gather at a pagoda at midnight for Ak Ambok.
                Bandaet Pratip [ɓɑndaːet prɑtiːp] begins around 7 pm with
                illuminated boats taking to the water. Each boat represents a
                government ministry or state institution.
              </p>

              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_a}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_b}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_c}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_d}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_e}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_water_festival_f}
                    />
                  </div>
                </div>
              </div>
            </p>
          )}
          {currentPage === 4 && (
            <p>
              <div>
              <button onClick={handleBackButtonClick} className="text-blue-500">Back</button>
                <img
                  className="w-50 rounded mx-auto"
                  src={beltei_tour_royal_pluoghing_ceremonyTitle}
                />
              </div>
              <div>
                <img
                  className="d-block w-85 rounded-3 rounded mx-auto d-blockk"
                  src={beltei_tour_royal_pluoghing_ceremony_banner}
                />
              </div>
              <br></br>
              <p class="text-primary text-justify" >
                {" "}
                Royal Ploughing Ceremony in Khmer "Preah Reach Pithi Chrot Preah
                Neang Korl" is an annual tradition in Cambodia. It marks the
                traditional beginning of the rice-growing season and indicates
                to farmers when they can prepare their fields for the next crop
                of rice. The festival is usually held at the start of the rainy
                season in late May. It consists in a symbolic ploughing
                procession before their majesties King and Queen. The King leads
                the yoke and plough and the Queen sows the seeds. After circling
                the field three times, the procession stops at a shrine where
                Brahmins invoke the protection of the gods. They bring sacred
                cows to eat from seven silver trays containing rice, corn,
                beans, sesame seeds, grass, water and wine. Predictions are made
                for the upcoming year based upon what the cows select. The
                harvest will be good if they choose the cereals, rain will be
                abundant if they drink water, but trouble is feared if they eat
                herbs or drink alcohol.
              </p>
              <p class="text-primary text-justify" >
                Ak Ambok [ɑk ɑmboːk] is named after the rice dish which forms
                part of the Bon Om Tuk ceremony. Rice is fried in the husk and
                then pounded with a giant pestle. The husks are removed and the
                special rice mixed with coconut and banana. This traditional
                Khmer dish is sold throughout the festival: Ak Ambok, Sampheah
                Preah Khae, and Bandaet Pratip.
              </p>

              <p class="text-primary text-justify" >
                {" "}
                Sampheah Preah Khae [sɑmpeəʰ preəʰ kʰaːe] is a ceremony in which
                salutations are made to the moon. After the Sampeah Preah Khae
                ceremony people gather at a pagoda at midnight for Ak Ambok.
                Bandaet Pratip [ɓɑndaːet prɑtiːp] begins around 7 pm with
                illuminated boats taking to the water. Each boat represents a
                government ministry or state institution.
              </p>

              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_a}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_b}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_c}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_d}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_e}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_royal_pluoghing_ceremony_f}
                    />
                  </div>
                </div>
              </div>
            </p>
          )}

          {currentPage === 5 && (
            <p>
              <div>
              <button onClick={handleBackButtonClick} className="text-blue-500">Back</button>
                <img
                  className="w-50 rounded mx-auto"
                  src={apsara_dancingTitle}
                />
              </div>
              <div>
                <img
                  className="d-block w-85 rounded-3 rounded mx-auto d-blockk"
                  src={beltei_tour_apsara_dance_banner}
                />
              </div>
              <br></br>
              <p class="text-primary text-justify" >
                {" "}
                Royal Ploughing Ceremony in Khmer "Preah Reach Pithi Chrot Preah
                Neang Korl" is an annual tradition in Cambodia. It marks the
                traditional beginning of the rice-growing season and indicates
                to farmers when they can prepare their fields for the next crop
                of rice. The festival is usually held at the start of the rainy
                season in late May. It consists in a symbolic ploughing
                procession before their majesties King and Queen. The King leads
                the yoke and plough and the Queen sows the seeds. After circling
                the field three times, the procession stops at a shrine where
                Brahmins invoke the protection of the gods. They bring sacred
                cows to eat from seven silver trays containing rice, corn,
                beans, sesame seeds, grass, water and wine. Predictions are made
                for the upcoming year based upon what the cows select. The
                harvest will be good if they choose the cereals, rain will be
                abundant if they drink water, but trouble is feared if they eat
                herbs or drink alcohol.
              </p>

              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_apsara_dance_a}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_apsara_dance_b}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row ">
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_apsara_dance_c}
                    />
                  </div>
                </div>
                <div class="col-lg-6 rounded mx-auto d-block">
                  <div>
                    <img
                      className="d-block w-100  rounded-5 rounded mx-auto d-block  "
                      src={beltei_tour_apsara_dance_d}
                    />
                  </div>
                </div>
              </div>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
