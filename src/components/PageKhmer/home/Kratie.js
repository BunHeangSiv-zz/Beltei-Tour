import welcome_message from '../Image/kratie_program.png'

import beltei_tour_kratie_program from '../Image/beltei_tour_kratie_program.jpg'
import beltei_tour_kampi_dolphine_site from '../Image/beltei_tour_kampi_dolphine_site.jpg'
import beltei_tour_koh_phdao from '../Image/beltei_tour_koh_phdao.jpg'
import beltei_tour_vihear_sarsar_mouy_rouy from '../Image/beltei_tour_vihear_sarsar_mouy_rouy.jpg'
import beltei_tour_kampi_picnic from '../Image/beltei_tour_kampi_picnic.jpg'
import React from 'react'



function UseButton() {
  return (
    <div class="container text-center">
      <div ><img className="d-block w-100  rounded mx-auto d-block" src={welcome_message} /></div>
      <div ><img className="d-block w-85  rounded mx-auto d-block" src={beltei_tour_kratie_program} /></div>
      <br></br>
      <p class="text-primary text-justify" >Kratie Province, located on the east bank of the Mekong River, attracts a fair share of visitors, many of whom wish to catch a glimpse of the last few Irrawaddy
        Dolphins left in the world. The recommended place to see them is Kampi Village, about 15 kilometers from town.
        Irrawaddy Dolphins are an endangered species and are extremely rare; it is estimated there are only about 60 living in this stretch of the river.
        The town of Kratie offers an authentic rural ambience, and therefore serves as the perfect place to spend a peaceful night or two. It is a nice relief from some of the country’s more trafficked areas.</p>


      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_kampi_dolphine_site} /></div>

        </div>
        <div class="col-lg-9 text-primary " >
          <p class="text-justify">
          Kampi is the name of a small village situated at the east bank of the Mekong River, 15km north of Kratie on the old National Road 7.
          Kampi is the best place in Cambodia to see the rare Mekong River Dolphin. Kampi Dolphin pool is the most inhabited dolpin pool
          in the Mekong River with about 20 dolphins. Kampi Dolphin Site was established in 1999 to welcome international and local tourists
          and for scientific researchers to study the Mekong River Dolphin. There are motor boats available to shuttle visitors
          out of the Mekong River to see Dolphin at close quarters.
          </p>
        </div>
      </div>
      <p class="text-primary" >  dry season early morning and late afternoon.</p>
      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_koh_phdao} /></div>

        </div>
        <div class="col-lg-9 text-primary text-justify" >
        <p class="text-justify">
        The best time to see Dolphin is At Koh Pdao, an island in the Mekong, visitors will find the Koh Pdao Dolphin Pool, one of the few places where
          you can spot the rare Irrawaddy river dolphin. During the Community Development Tour, visitors travel up the Mekong
          River from Kratie to Koh Pdao Island and observe the lives of
          Cambodians on Koh Pdao. Home stays can be arranged.
        </p>
        </div>
      </div>

      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_vihear_sarsar_mouy_rouy} /></div>
        </div>
        <div class="col-lg-9 text-primary text-justify" >
        <p class="text-justify">
          Vihear Sarsar Mouy Rouy is a pagoda well-known for its history and as a place of pilgrimage for residents of Kratie.
          Vihear Sarsar Mouy Rouy, meaning 'Temple with 100 columns', was first built in the 16th century by King Chann Reachea.
          The pagoda included 100 wooden columns to commemorate the memory of his daughter Vorakpheak. The pagoda is located in
          Sambor town, 36 km from Kratie. To get there, take the old N R 7 along the River bank 24 km to Sandan village and
          continue 
          </p>
        </div>
      </div>
      <p class="text-primary" > northward 12 km by the River road to Sambo.</p>


      <br></br>
      <div class="row">
        <div class="col-lg-3">
          <div ><img className="d-block w-16 md:w-32 lg:w-48 pt-1 " src={beltei_tour_kampi_picnic} /></div>
        </div>
        <div class="col-lg-9 text-primary text-justify" >
        <p class="text-justify">
          Kampi is a natural attraction in Kratie Province that is situated alongside the Mekong River,
          approximately 16 km from Kratie City and 1 km north of Kampi Dolphin. A small archipelago,
          Kampi attracts visitors with beautiful streams where visitors can bathe and swim. Kampi is a
          seasonal attraction and can be visited only
          during the dry season from January to May.
          </p>
        </div>

      </div>

    </div>

  );
}

export default UseButton;












































