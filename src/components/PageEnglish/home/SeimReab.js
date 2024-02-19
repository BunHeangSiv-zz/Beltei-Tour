

import welcome_message from '../Image/siem_reap_program.png'
import beltei_tour_siem_reap from '../Image/beltei_tour_siem_reap.jpg'
import beltei_tour_temple_hopping from '../Image/beltei_tour_temple_hopping.jpg'
import beltei_tour_bayon_temple from '../Image/beltei_tour_bayon_temple.jpg'
import beltei_tour_visiting_floating from '../Image/beltei_tour_visiting_floating.jpg'
import beltei_tour_landmine_museum from '../Image/beltei_tour_landmine_museum.jpg'
import React from 'react'
import '../StyleCambodian.css';




function UseButton() {
  return (
    <div class="container text-primary">
      <div ><img className="d-block w-100  rounded mx-auto d-block" src={welcome_message} /></div>
      <div ><img className="d-block w-85  rounded mx-auto d-block" src={beltei_tour_siem_reap} /></div>
      <br></br>
      <p className='text-justify' >Siem Reap, a resort town in northwestern Cambodia, is the gateway to the ruins of Angkor, the seat of the Khmer 
        kingdom from the 9th–15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor
         Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon Temple 
         at Angkor Thom. Angkor Who? Find out what else there is to see and do in this Cambodian center of culture. 
         With glittering temples, great street food and bustling markets to explore, 
        it's easy to see why travelers are flocking to Siem Reap.</p>


      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_temple_hopping} />
        </div>
        <div class="col-lg-8 text-primary testdiv" >
        <p class="text-justify testp ">
        There’s no right or wrong way, but there’s a way to visit them to avoid the crowds. Start with Angkor Wat at sunrise, landing a spot
         either just outside of the temple, or inside by the famous lake
         so that you can snap that iconic reflection photo.
         </p>
        </div>
      </div>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_bayon_temple} />

        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
        Those looking to explore more temples, but have no time to spare, should go to the 10th century temple Banteay Srei.
         For the more adventurous you can take a one-hour ride outside of town to Beng Mealea, 
        which takes on a quiet beauty with the surrounding jungle
        </p>
        </div>
      </div>
      <br></br>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_visiting_floating} />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
        Those that want to marvel at the fisherman way of life will want to visit Tonle Sap Lake. This is Southeast Asia’s largest
         freshwater lake, but the real treat is seeing how the fisherman lives. Wooden houses are built on long, sturdy 
         stilts to avoid getting soaked by the flooding that makes this area so   perfect for fishing.
        </p>
        </div>
      </div>
      <br></br>
      <div class="row flex-nowrap mt-3" style={{display:'flex'}}>
        <div class="col-lg-4 test">
          <img class="w-full" src={beltei_tour_landmine_museum} />
        </div>
        <div class="col-lg-8 text-primary testdiv">
        <p class="text-justify testp ">
        Only open to tourists since the 1990s, Cambodia is a country still living through the legacy of its worn-torn past.
         A visit to the Landmine Museum is a great chance to learn about its history and relations with its powerful neighbour,
        Vietnam. Founded by a former child soldier, it's a place of ihstorical 
        imporatnace and quiet reflection. 
        </p>        
        </div>


      </div>
    </div>

  );
}

export default UseButton;











































