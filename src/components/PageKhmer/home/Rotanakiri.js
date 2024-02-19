







import welcome_message from '../Image/ratanakiri_program.png'
import beltei_tour_siem_reap from '../Image/beltei_tour_ratanakiri.jpg'
import beltei_tour_yak_laom_lake from '../Image/beltei_tour_yak_laom_lake.jpg'
import beltei_tour_cha_ung_water from '../Image/beltei_tour_cha_ung_water.jpg'
import beltei_tour_minority_village from '../Image/beltei_tour_minority_village.jpg'
import beltei_tour_lumphat_wildlife from '../Image/beltei_tour_lumphat_wildlife.jpg'
import React from 'react'




function UseButton() {
  return (
    <div class="container text-primary">
      <div ><img className="d-block w-100  rounded mx-auto d-block" src={welcome_message} /></div>
      <div ><img className="d-block w-85  rounded mx-auto d-block" src={beltei_tour_siem_reap} /></div>
      <br></br>
      <p class="text-primary text-justify">Ratanakiri is a province of Cambodia located in the remote northeast. It borders the provinces of
        Mondulkiri to the south and Stung Treng to the west and the countries of Laos and Vietnam to the north and east, respectively.
        The province extends from the mountains of the Anna mite Range in the north, across a hilly plateau between the Tonle San and Tonle
        Srepok rivers, to tropical deciduous forests in the south. In recent years,
        logging and mining have scarred Ratanakiri's environment, long known for its beauty.</p>


      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_yak_laom_lake} /></div>

        </div>
        <div class="col-lg-9 text-primary text-justify">
        <p class="text-justify">
          Yeak Laom Lake is located about 5KM southeast of central Bunlung. This beautiful lake is basically a volcanic crater formed
          after a volcanic eruption of 4000 year ago; the diameter of this lake is about 800 meters and it bears about 50 meters of clear water.
          At one end, there are two wooden platforms for tourists to view the lake up close, but some people cannot resist a dip to feel the warmth of the water for themselves.
          </p>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-lg-3 text-primary">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_cha_ung_water} /></div>

        </div>
        <div class="col-lg-9 text-primary text-justify">
        <p class="text-justify">
          Cha Ung Waterfall is located about 8KM west from the center of Banlung. The source of this waterfall is from the Svay Mountain
          where Wat Eisey Patamak is located. Below the waterfall is a cave like pitch where
          visitors can stand or sit to watch the waterfall from behind and enjoy the cool mist sprayed gently by the wind.
          </p>
        </div>
      </div>

      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_minority_village} /></div>
        </div>
        <div class="col-lg-9 text-primary text-justify">
        <p class="text-justify">
          Ratanakiri has a population of about 60,000 “Khmer Loeu” people. “Khmer Loeu” is a controversial (not conformably defined)
          term referring to various minority groups of people from different tribes. The Khmer Loeus are actually 12 different groups
          of tribal people (including the Tampuan, Kroeung, Kavet, Kachok, Charai, Prouv, Phnoung and Lan) living in the jungle and mountains.
          They still practice many of their traditional ways
          of life including slash and burn agriculture, and animism; and they continue to maintain.
          </p>
        </div>
      </div>


      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_lumphat_wildlife} /></div>
        </div>
        <div class="col-lg-9 text-primary text-justify">
        <p class="text-justify">
        Lumphat Wildlife Sanctuary is situated 37km south of Banlung. With a total land area of 250,000 ha there are special kinds of 
        animals and birds like tigers, elephants, red-headed vultures. Lumphat Wildlife Sanctuary, Ratanakiri is one of the must-see places in the colorful Cambodia.
         Eco-tourism prospects and remote tribal villages. If you want to tour this province extensively,
         make it a point to include Lumphat Wildlife Sanctuary, Ratanakiri in your itinerary.
         </p>
        </div>

      </div>

    </div>

  );
}

export default UseButton;






















































