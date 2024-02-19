
import React from 'react'

import '../StyleCambodian.css';
import booklet_green from '../Image/booklet_green.png';
import booklet_red from '../Image/booklet_red.png';
import booklet_blue from '../Image/booklet_blue.png';
import booklet_yell from '../Image/booklet_yell.png';


function CambodiaCulture() {
  return (
    <div class="container">
    
 
   <h3 className="text-center text-primary fs-5 fst-italic" > BELTEI TOUR Booklet 2012 Download </h3>

   <p className=' text-center text-primary fs-6 fst-italic' > Please click on each book below to download!!!</p>
     <br></br>
     
<img className="d-block mx-auto w-auto rounded-3" src={booklet_green} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_red} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_blue} alt='hh' /> 
 
<img className="d-block mx-auto w-auto rounded-3  " src={booklet_yell} alt='hh' /> 
 


    </div>
    
  );
}

export default CambodiaCulture;