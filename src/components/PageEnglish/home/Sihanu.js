import '../smallscreen.css';
import sihanuProgram from '../Image/sihanouk_program.png'
import sihanubanner from '../Image/beltei_tour_sihanouk.jpg'
import beltei_tour_independence_beach from '../Image/beltei_tour_independence_beach.jpg'
import beltei_tour_khbal_chhay_waterfall from '../Image/beltei_tour_khbal_chhay_waterfall.jpg'
import beltei_tour_koh_rong from '../Image/beltei_tour_koh_rong.jpg'
import beltei_tour_ream_national_park from '../Image/beltei_tour_ream_national_park.jpg'
import React from 'react'

function UseButton() {
  return (
    <div class="container text-primary">
      <div ><img className="d-block w-100  rounded mx-auto d-block" src={sihanuProgram} /></div>
      <div ><img className="d-block w-85  rounded mx-auto d-block" src={sihanubanner} /></div>
      <br></br>
      <p >Sihanouk Ville comes as one of the best beachside destinations in Asia yet to be explored. Not only so the city bears a short but amazing history
        of existence featuring both peace and turmoil which makes this places all the more significant. It is indeed heartening to see the city bounce back
        to life after a prolonged period of political turmoil, and that too with no signs of the gory past remaining. Sihanouk Province as it exists today offers
        numerous tourist attractions that are sure to leave you flabbergasted. Look out for the must visit Sihanoukville Tourist Attractions to be able to plan your
        trip beforehand. Here Sihanouk province have many attractive place for tourists such as: Kbal chay water fall,
        Ochheuteal beach, Otres beach, Koh rong Island, Paradise beach, Rongsanlem Island…</p>
      <div class="row flex-nowrap" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_independence_beach} />
        </div>
        <div class="col-lg-8 text-primary testdiv" >
          <p class="text-justify testp ">
            Independence Beach gets its name from the deserted hulk of the 7-storey Independence Hotel at the north end.
            Locals call this beach hotel 7 floors, it is Label 7(7 chann beach). on the in town street sigh, this beach almost a kilometer long,
            the sandy area is much narrower making the beach best when the tide is low.
            This beach is very nice and popular for foreigner, because of this place not so many local people come.
            </p>
        </div>
      </div>
      <br></br>
      <div class="row flex-nowrap" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_khbal_chhay_waterfall} />

        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          Kbal Chhay was discovered in 1960. Three years later, it was developed into a reservoir to supply clean water
          to the city of Sihanouk Province. The reservoir construction, however, was interrupted due to civil war,
          and the site became a hide-out for khmer Rouge. In 1997, Kbal Chhay was maked for development, and year later Kok An
          Company was awarded a contract to construct the road and develop the site for tourism.
          </p>
        </div>
      </div>

      <br></br>
      <div  class="row flex-nowrap" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <div ><img class="w-full" src={beltei_tour_koh_rong} /></div>
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          Koh Rong Island is a Cambodian Island in the Gulf of Thailand, at about 40km off the coast of Sihanoukville. Actually,
          the island in the Gulf of Thailand, at about 40 km of the coast of Sihanouk Province, Actually the Island is deserted, Now a day have
          developed this area to became a very nice tourist attraction. Tourists could go by big speed boat just about 45mn to get this Island, the
          unique great sand of this going to be very famous tourists  destination of Cambodia  very soon.
          </p>
        </div>
      </div>


      <br></br>
      <div class="row flex-nowrap" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_ream_national_park} />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
          The untouched beach of Ream is located in the Ream National Park. Take Route 4 to the Airport road 18km north of town.
          Behind the beach is a mangrove swamp, which attracts a wide variety of tropical birds. The beaches to the left nearer the Naval
          Base now have a few vendors selling drinks and renting tubes. There is a small guesthouse run by the National Park.. The Ream Beach
          in Sihanoukville is the perfect place that takes you away from the crowded life of the town. Located on the outskirts it is almost
          </p>
         
        </div>
        <p className='text-justify' > a haven for nature lovers. It brings to you the
          best of creation and will surely captivate you to come back to it again and again.</p>

      </div>













    </div>

  );
}

export default UseButton;











