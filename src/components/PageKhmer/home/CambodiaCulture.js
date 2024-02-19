import React from 'react'
import cambodia_culture from '../Image/cambodia_culture.png';
import beltei_tour_pchum_ben_festival from '../Image/beltei_tour_pchum_ben_festival.png';
import beltei_tour_khmer_new_year from '../Image/beltei_tour_khmer_new_year.png';
import beltei_tour_water_festival from '../Image/beltei_tour_water_festival.png';
import beltei_tour_royal_plouging from '../Image/beltei_tour_royal_plouging.png';
import beltei_tour_apsara_dancing from '../Image/beltei_tour_apsara_dancing.png';


function CambodiaCulture() {
  return (
    <div class="container">
    
  
     <img className="d-block mx-auto w-auto rounded-3" src={cambodia_culture} alt='hh' /> 
     <br></br>
  <div className='HOVER'><img className="d-block mx-auto w-auto rounded-3  " src={beltei_tour_pchum_ben_festival} alt='hh' /> 
  <br></br></div>   

<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3"  src={beltei_tour_khmer_new_year} alt='hh' /> 
<br></br></div>
<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3"  src={beltei_tour_water_festival} alt='hh' /> 
<br></br></div>
<div className='HOVER'> <img className="d-block mx-auto w-auto rounded-3" src={beltei_tour_royal_plouging} alt='hh' /> 
<br></br></div>
<div className='HOVER'><img className="d-block mx-auto w-auto rounded-3" src={beltei_tour_apsara_dancing} alt='hh' /> 
</div>





    </div>
    
  );
}

export default CambodiaCulture;