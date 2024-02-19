
import React from 'react'

import '../StyleCambodian.css';
import welcomebt from '../Image/welcomebt.png'
import tour_map from '../Image/tour_map.png'
function Cambodian() {
  return (
    <div class="container ">
        <h1 class="text text-decoration-underline fs-5 fst-italic" >BELTEI TOUR Location Map </h1>
        <p class="text_P text-primary pt-2" >Address:Building No 57, Corner of Street 217 and 290 Sangkat Tuol Svay Prey 2, Khan Chamkarmon, Phnom Penh.</p>
        <p style={{color: "rgb(65, 129, 106)"}}>Email:<span style={{color:"dodgerblue"}}> info@belteitour.com.kh</span></p>
        <p className='text-primary' >Tel:023 999967|023 999920</p>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={welcomebt}  />
                </div>
                
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <img style={{width:"100%"}}  src={tour_map}  />
                </div>
                
            </div>
       
    </div>
    
  );
}

export default Cambodian;