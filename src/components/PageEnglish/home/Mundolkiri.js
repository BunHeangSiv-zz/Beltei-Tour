


import welcome_message from '../Image/mudulkiri_program.png'
import beltei_tour_mondulkiri_province from '../Image/beltei_tour_mundulkiri_program.jpg'
import beltei_tour_la_eang_waterfall from '../Image/beltei_tour_la_eang_waterfall.jpg'
import beltei_tour_bousra_wasterfall from '../Image/beltei_tour_bousra_wasterfall.jpg'
import beltei_tour_dei_ey_home_stay from '../Image/beltei_tour_dei_ey_home_stay.jpg'
import beltei_tour_pahlung_village from '../Image/beltei_tour_pahlung_village.jpg'
import beltei_tour_mironty_group from '../Image/beltei_tour_mironty_group.jpg'
import React from 'react'



function UseButton() {
  return (
    <div class="container">
      <div ><img className="d-block w-100  rounded mx-auto d-block" src={welcome_message} /></div>
      <div ><img className="d-block w-85  rounded mx-auto d-block" src={beltei_tour_mondulkiri_province} /></div>
      <br></br>
      <p class="text-primary text-justify" >Mondulkiri is an eastern province of Cambodia, which is the most sparsely populated province in the whole country 
        although being the largest province in Cambodia. The province is chock full of natural beauty, with thickly forested mountains,
         powerful waterfalls and the lush green rolling hills of the western side. Despite the growing deforestation, especially due to 
         the valuable minerals remaining in the deep red, fertile ground, Mondulkiri has still one of the biggest 
        successional woodlands of Cambodia.</p>


      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_la_eang_waterfall} />

        </div>
        <div class="col-lg-8 text-primary testdiv" >
        <p class="text-justify testp ">
        La Eang Waterfall is located in Pouyam Village, Sen Monorom Commune, Oreang District; 26 km away from the provincial town. 
        It can be accessed by path.Around the waterfall most of the residents do farming. During the rainy season, the waterfall
         is 22-25 meters in height and 7-10 meters in diameter. During the dry season, the waterfall is 28 meters in height and 8 meters in diameter. It is one of the highest flowing-down waterfalls in the Mondul Kiri 
         </p>
        </div>
      </div>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_bousra_wasterfall} />

        </div>
        <div class="col-lg-8 text-primary testdiv"  >
        <p class="text-justify testp ">
        Bousra waterfall is located in Pich Chenda district about 43 kilometers northeast of Mondulkiri 
        provincial town, Sen Monorom. Busra is considered by many to be the most beautiful waterfall in Mondulkiri.
         The waterfall is divided into three stages
         </p>
        </div>
      </div>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_dei_ey_home_stay} />
        </div>
        <div class="col-lg-8 text-primary testdiv" >
        <p class="text-justify testp ">
        The Last attraction on our list is the Dei Ey community home stay, The area is extremely scenic and is a semi evergreen and bamboo plantations. The community homestay here offers guests an opportunity to enjoy a more local and simple travelling experience. 
        </p>
      </div>
      </div>

      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_pahlung_village} />
        </div>
        <div class="col-lg-8 text-primary testdiv" >
        <p class="text-justify testp ">
        The village is located an hour away from the closest city and it offers treks to the forest and rain forest as well as 
        tours and trip to the waterfalls surrounding the village.the local huts and huts are beautiful and offer amazing insight 
        into the local life.</p>
      </div>
      </div>

      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_mironty_group} />
        </div>
        <div class="col-lg-8 text-primary testdiv" >
        <p class="text-justify testp ">
        80% percent of the population of Mondulkiri is tribal minority group’s uniquen to region, only the Jarai minority group can be found 
        in neibouring Ratanakiri also. It‘s these unique generation who’ve made the province what it is today, a unique cultural melting pot
         where tribal group learn to adapt to newer traditions, and modern living techniques sometime take a step back and give precedent
         to long –standing ways of life. Language, appearance and tradition all vary significantly from group in the 
         </p>
       </div>
      </div>


    </div>

  );
}

export default UseButton;






















